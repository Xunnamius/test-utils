import type { MockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';
import type { FixtureOptions } from 'universe+test-mock-fixture:types/options.ts';

export type * from 'universe+test-mock-fixture:types/fixtures.ts';
export type * from 'universe+test-mock-fixture:types/options.ts';

export type * from 'universe+test-mock-fixture:fixtures/describe-root.ts';
export type * from 'universe+test-mock-fixture:fixtures/dummy-directories.ts';
export type * from 'universe+test-mock-fixture:fixtures/dummy-files.ts';
export type * from 'universe+test-mock-fixture:fixtures/dummy-npm-package.ts';
export type * from 'universe+test-mock-fixture:fixtures/git-repository.ts';
export type * from 'universe+test-mock-fixture:fixtures/node-import-and-run-test.ts';
export type * from 'universe+test-mock-fixture:fixtures/run-test.ts';
export type * from 'universe+test-mock-fixture:fixtures/npm-copy-self.ts';
export type * from 'universe+test-mock-fixture:fixtures/npm-link-self.ts';
export type * from 'universe+test-mock-fixture:fixtures/root.ts';
export type * from 'universe+test-mock-fixture:fixtures/webpack-test.ts';

export async function withMockedFixtures<
  Fixtures extends ((...args: never[]) => MockFixture<string>)[],
  AdditionalOptions extends Record<string, unknown> = never,
  AdditionalContext extends Record<string, unknown> = never
>(
  test: unknown,
  fixtures: Fixtures,
  options: FixtureOptions<ReturnType<Fixtures[number]>>
) {
  type CustomizedFixtureOptions = FixtureOptions &
    Partial<Record<string, unknown> & CustomOptions>;
  type CustomizedFixtureContext = FixtureContext<CustomizedFixtureOptions> &
    CustomContext;
  type CustomizedMockFixture = MockFixture<CustomizedFixtureContext>;

  const testSymbol = Symbol.for('@xunnamius/test');
  const finalOptions = {
    performCleanup: true,
    use: [] as MockFixture[],
    initialFileContents: {},
    ...options
  } as CustomizedFixtureOptions & { use: CustomizedMockFixture[] };

  const context = {
    root: '',
    testIdentifier,
    debug: globalDebug,
    using: [] as MockFixture[],
    options: finalOptions,
    fileContents: { ...finalOptions.initialFileContents }
  } satisfies Omit<FixtureContext, 'fs'> as CustomizedFixtureContext & {
    using: CustomizedMockFixture[];
  };

  context.fs = {
    writeFile: wrapFilesystemFunction(writeFile, context),
    readFile: wrapFilesystemFunction(readFile, context),
    accessFile: wrapFilesystemFunction(accessFile, context),
    symlink: wrapFilesystemFunction(symlink, context),
    mkdir: wrapFilesystemFunction(mkdir, context),
    remove: wrapFilesystemFunction(remove, context),
    copy: wrapFilesystemFunction(copy, context),
    rename: wrapFilesystemFunction(rename, context)
  };

  if (finalOptions.use) {
    if (finalOptions.use?.[0]?.name !== 'root') context.using.push(rootFixture());
    context.using = [...context.using, ...finalOptions.use];
    // ? `describe-root` fixture doesn't have to be the last one, but a fixture
    // ? with that name must be included at least once
    if (!finalOptions.use.some((f) => f.name === 'describe-root'))
      context.using.push(describeRootFixture());
  } else context.using = [rootFixture(), describeRootFixture()];

  context.using.push({
    name: testSymbol,
    description: '',
    setup: test
  });

  let ranDescribe = false;
  const cleanupFunctions: NonNullable<CustomizedMockFixture['teardown']>[] = [];

  const setupDebugger = async (fixture: CustomizedMockFixture, error = false) => {
    const toString = async (
      source:
        | CustomizedMockFixture['name']
        | LiteralUnion<Exclude<CustomizedMockFixture['description'], string>, string>
    ) => String(typeof source === 'function' ? await source(context) : source);

    const name = await toString(fixture.name);
    const desc = await toString(fixture.description);
    const debug_ = globalDebug.extend(name);

    context.debug = error ? (debug_.error as unknown as typeof debug_) : debug_;
    context.debug(desc);
  };

  /*eslint-disable no-await-in-loop */
  try {
    for (const mockFixture of context.using) {
      if (mockFixture.name === testSymbol) {
        context.debug = globalDebug;
        globalDebug('executing test callback');
      } else {
        await setupDebugger(mockFixture);
        if (mockFixture.teardown) cleanupFunctions.push(mockFixture.teardown);
      }

      void (mockFixture.setup
        ? await mockFixture.setup(context)
        : context.debug('(warning: mock fixture has no setup function)'));

      if (mockFixture.name === 'describe-root') ranDescribe = true;
    }
  } catch (error) {
    context.debug.error('exception occurred: %O', error);
    throw error;
  } finally {
    if (!ranDescribe) {
      const fixture = describeRootFixture();
      await setupDebugger(fixture, true);
      await fixture.setup?.(context);
    }

    context.debug = cleanupDebug;

    for (const cleanupFn of cleanupFunctions.reverse()) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/use-unknown-in-catch-callback-variable
      await cleanupFn(context).catch((error: any) =>
        context.debug(
          `ignored exception in teardown function: ${String(
            error?.message || error.toString() || '<no error message>'
          )}`
        )
      );
    }
  }
}

export function mockFixtureFactory<
  Fixtures extends ((...args: never[]) => MockFixture<string>)[],
  AdditionalOptions extends Record<string, unknown> = never,
  AdditionalContext extends Record<string, unknown> = never
>(testIdentifier: string, options?: Partial<FixtureOptions & CustomOptions>) {
  return (
    test: FixtureAction<
      FixtureContext<FixtureOptions & Partial<Record<string, unknown> & CustomOptions>> &
        CustomContext
    >
  ) =>
    withMockedFixture<CustomOptions, CustomContext>({
      test,
      testIdentifier,
      options
    });
}
