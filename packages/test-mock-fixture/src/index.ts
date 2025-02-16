/* eslint-disable no-await-in-loop */
import assert from 'node:assert';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';

import { toAbsolutePath } from '@-xun/fs';
import deepMerge from 'lodash.mergewith';
import { createDebugLogger } from 'rejoinder';

import { globalDebuggerNamespace } from 'universe+test-mock-fixture:constant.ts';
import { ErrorMessage } from 'universe+test-mock-fixture:error.ts';

import {
  describeRootFixture,
  describeRootFixtureName
} from 'universe+test-mock-fixture:fixtures/describe-root.ts';

import {
  rootFixture,
  rootFixtureName
} from 'universe+test-mock-fixture:fixtures/root.ts';

import type { PathLike } from 'node:fs';
import type { AbsolutePath } from '@-xun/fs';
import type { ArraySlice, EmptyObject, Promisable, ReadonlyDeep } from 'type-fest';

import type {
  FixtureContext,
  GenericMockFixture
} from 'universe+test-mock-fixture:types/fixtures.ts';

import type { FixtureOptions } from 'universe+test-mock-fixture:types/options.ts';

const defaultTestIdentifier = 'fixtures-test';
const alphaNumericRegExp = /^[a-z0-9-_]+$/i;

const rootDebugger = createDebugLogger({ namespace: globalDebuggerNamespace });

type FsFunctionName = keyof typeof fs;
const excludedFsFunctions: FsFunctionName[] = ['glob'];

const twoParameterFsFunctions: FsFunctionName[] = [
  'copyFile',
  'cp',
  'symlink',
  'rename',
  'link'
];

export * from 'universe+test-mock-fixture:fixtures/describe-root.ts';
export * from 'universe+test-mock-fixture:fixtures/dummy-directories.ts';
export * from 'universe+test-mock-fixture:fixtures/dummy-files.ts';
export * from 'universe+test-mock-fixture:fixtures/dummy-npm-package.ts';
export * from 'universe+test-mock-fixture:fixtures/git-repository.ts';
export * from 'universe+test-mock-fixture:fixtures/node-import-and-run-test.ts';
export * from 'universe+test-mock-fixture:fixtures/run-test.ts';
export * from 'universe+test-mock-fixture:fixtures/npm-copy-package.ts';
export * from 'universe+test-mock-fixture:fixtures/npm-link-package.ts';
export * from 'universe+test-mock-fixture:fixtures/root.ts';
export * from 'universe+test-mock-fixture:fixtures/webpack-test.ts';

export type * from 'universe+test-mock-fixture:types/fixtures.ts';
export type * from 'universe+test-mock-fixture:types/options.ts';

/**
 * Create a mock or "dummy" filesystem structure used to simulate one or more
 * runtime environments for the package under test.
 *
 * When passing one-off custom fixture functions via the `fixtures` parameter,
 * use the `AdditionalOptions` and `AdditionalContext` type parameters to supply
 * any additional options and context where necessary.
 */
export async function withMockedFixtures<
  Fixtures extends ((...args: never[]) => GenericMockFixture)[],
  AdditionalOptions extends Record<string, unknown> = EmptyObject,
  AdditionalContext extends Record<string, unknown> = EmptyObject
>(
  /**
   * The function responsible for interfacing with the testing framework (e.g.
   * running `expect` functions).
   */
  test: (
    context: FixtureContext<
      FixtureOptions<ReturnType<Fixtures[number]>, false> & NoInfer<AdditionalOptions>
    > &
      NoInfer<AdditionalContext>
  ) => Promisable<unknown>,
  /**
   * The fixtures used to construct the dummy environment. If the describeRoot
   * fixture is not included, it will be appended automatically. If the root
   * fixture is not included, it will be prepended automatically; if it is
   * included but not the first element, said instance(s) will be removed.
   *
   * Otherwise, **duplicate fixtures are _not_ filtered out!**
   */
  fixtures: Fixtures,
  /**
   * Options seen by all fixtures.
   */
  options: ReadonlyDeep<
    FixtureOptions<ReturnType<Fixtures[number]>> & NoInfer<AdditionalOptions>
  >
): Promise<void> {
  const $test = Symbol.for('@xunnamius/test');

  const contextDebug = rootDebugger.extend(options.identifier || defaultTestIdentifier);

  const context = {
    /* istanbul ignore next */
    get root(): never {
      throw new TypeError(ErrorMessage.RootAccessedTooEarly());
    },
    /* istanbul ignore next */
    set root(updatedRoot: AbsolutePath) {
      context.root = updatedRoot;
    },
    debug: contextDebug,
    fixtures: fixtures.map((fixture, index) => {
      const reifiedFixture = fixture();

      if (
        !reifiedFixture.name ||
        !alphaNumericRegExp.test(reifiedFixture.name.toString())
      ) {
        throw new TypeError(
          ErrorMessage.NonAlphaNumericIdentifier(
            `fixtures[${index}].name`,
            reifiedFixture.name
          )
        );
      }

      return reifiedFixture;
    }),
    options: {
      identifier: defaultTestIdentifier,
      initialVirtualFiles: {},
      ...options
    },
    virtualFiles: { ...options.initialVirtualFiles },
    fs: Object.fromEntries(
      Object.entries(fs)
        .map(function ([name, fn]) {
          if (
            !excludedFsFunctions.includes(name as FsFunctionName) &&
            typeof fn === 'function'
          ) {
            return [
              name,
              wrapFsFunction(
                fn,
                twoParameterFsFunctions.includes(name as FsFunctionName) ? 2 : 1
              )
            ];
          }
        })
        .filter((entry) => !!entry)
        .concat([['isAccessible', wrapFsFunction(isAccessible, 1)]])
    )
  } as FixtureContext<
    FixtureOptions<ReturnType<Fixtures[number]>, false> & AdditionalOptions
  > &
    AdditionalContext;

  if (
    !context.options.identifier ||
    !alphaNumericRegExp.test(context.options.identifier)
  ) {
    throw new TypeError(
      ErrorMessage.NonAlphaNumericIdentifier(
        'options.identifier',
        context.options.identifier
      )
    );
  }

  let sawDescribeRootFixture = false;

  for (const [index, fixture] of context.fixtures.entries().toArray()) {
    if (fixture.name === describeRootFixtureName) {
      sawDescribeRootFixture = true;
    }

    if (fixture.name === rootFixtureName && index !== 0) {
      context.fixtures.splice(index, 1);
    }
  }

  if (context.fixtures[0]?.name !== rootFixtureName) {
    context.fixtures.unshift(rootFixture());
  }

  if (!sawDescribeRootFixture) {
    context.fixtures.push(describeRootFixture());
  }

  // ? A pseudo-fixture responsible for running the test function is technically
  // ? the "final fixture"
  context.fixtures.push({
    name: $test,
    description: 'executing user-supplied `test` function',
    setup: () => test(context)
  });

  contextDebug('fixtures (final): %O', fixtures);
  contextDebug('context (final): %O', context);

  // ? We track this separately so we can run it when an error occurs
  let attemptedToRunDescribeRootFixture = false;
  // ? Track setup function error and teardown errors and report them all
  const errors: unknown[] = [];
  const teardownFunctions: [string, NonNullable<GenericMockFixture['teardown']>][] = [];

  try {
    for (const { name, description, setup, teardown } of context.fixtures) {
      if (name === describeRootFixtureName) {
        attemptedToRunDescribeRootFixture = true;
      }

      if (name === 'root') {
        // @ts-expect-error: will be added back by root later
        delete context.root;
      }

      if (name !== $test) {
        // ? We replace the normal debug logger with a "setup" debug logger
        context.debug = contextDebug.extend(`${name.toString()} ▲`);
      }

      context.debug.message(description);

      if (!setup) {
        context.debug('fixture lacks a "setup" function');
      }

      if (name !== $test && !teardown) {
        context.debug('fixture lacks a "teardown" function');
      }

      try {
        await setup?.(context);

        if (teardown) {
          teardownFunctions.unshift([name.toString(), teardown]);
        }
      } catch (error) {
        context.debug.error(error);
        throw error;
      }
    }
  } catch (error) {
    errors.push(error);
  } finally {
    if (!attemptedToRunDescribeRootFixture) {
      // ? We replace the normal debug logger with a "cleanup" debug logger
      context.debug = contextDebug.extend(`${describeRootFixtureName} ▲▼`);

      const fixture = context.fixtures.find(
        ({ name }) => name === describeRootFixtureName
      );

      assert(fixture, ErrorMessage.GuruMeditation());
      await fixture.setup?.(context);
    }

    for (const [fixtureName, teardown] of teardownFunctions) {
      // ? We replace the normal debug logger with a "cleanup" debug logger
      context.debug = contextDebug.extend(`${fixtureName} ▼`);

      await (async () => teardown(context))().catch(function (error: unknown) {
        errors.push(error);
        context.debug.error('ignored error in teardown function: %O', error);
      });
    }
  }

  if (errors.length) {
    throw new AggregateError(
      errors,
      ErrorMessage.AggregateErrors(
        errors,
        context.options.performCleanup ? undefined : context.root
      )
    );
  }

  function wrapFsFunction(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fn: (...args: any[]) => unknown,
    pathParametersCount: number
  ) {
    const fsDebugger = contextDebug.extend(
      `fs-${fn.name}-${crypto.randomBytes(2).readUInt16LE(0).toString(16)}`
    );

    return async function (...args: unknown[]) {
      for (let index = 0; index < pathParametersCount; ++index) {
        args[index] = toAbsolutePath(context.root, String(args[index]));
      }

      fsDebugger('invoked with args: %O', args);
      const result = await fn(...args);
      fsDebugger('result: %O', result);

      return result;
    };
  }
}

/**
 * Returns a function allowing for the creation of many mock (or "dummy")
 * filesystem structures, each used to simulate one or more runtime environments
 * for the package under test.
 */
export function mockFixturesFactory<
  Fixtures extends ((...args: never[]) => GenericMockFixture)[],
  AdditionalOptions extends Record<string, unknown> = EmptyObject,
  AdditionalContext extends Record<string, unknown> = EmptyObject
>(
  ...[factoryFixtures, factoryOptions]: ArraySlice<
    Parameters<
      typeof withMockedFixtures<Fixtures, AdditionalOptions, AdditionalContext>
    >,
    1
  >
): (
  ...args: [
    Parameters<
      typeof withMockedFixtures<Fixtures, AdditionalOptions, AdditionalContext>
    >[0],
    Partial<
      Parameters<
        typeof withMockedFixtures<Fixtures, AdditionalOptions, AdditionalContext>
      >[2]
    >?
  ]
) => ReturnType<typeof withMockedFixtures> {
  return function (test, incomingOptions) {
    return withMockedFixtures<Fixtures, AdditionalOptions, AdditionalContext>(
      test,
      factoryFixtures,
      deepMerge({}, factoryOptions, incomingOptions, mergeCustomizer)
    );
  };
}

/* istanbul ignore next */
async function isAccessible(path: PathLike, mode?: number): Promise<boolean> {
  return fs.access(path, mode).then(
    () => true,
    () => false
  );
}

/**
 * Custom lodash merge customizer that causes source arrays to be concatenated
 * and successive `undefined` values to unset (delete) the property if it
 * exists.
 *
 * Take from babel-plugin-tester's source.
 *
 * @see https://lodash.com/docs/4.17.15#mergeWith
 */
function mergeCustomizer(
  objValue: unknown,
  srcValue: unknown,
  key: string,
  object: Record<string, unknown>,
  source: Record<string, unknown>
) {
  if (srcValue === undefined && key in source) {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete object[key];
  } else if (Array.isArray(objValue)) {
    return objValue.concat(srcValue);
  }

  return undefined;
}
