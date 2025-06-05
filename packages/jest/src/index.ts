/* eslint-disable @typescript-eslint/no-explicit-any */

import assert from 'node:assert';
import { isPromise } from 'node:util/types';

import { toPath } from '@-xun/fs';
import { withMockedArgv } from '@-xun/test-mock-argv';
import { withMockedEnv } from '@-xun/test-mock-env';
import { withMockedExit } from '@-xun/test-mock-exit';
import { withMockedOutput } from '@-xun/test-mock-output';
import { flattenPackageJsonSubpathMap } from 'bidirectional-resolve';
import { glob } from 'glob';
import { createDebugLogger } from 'rejoinder';

import { globalDebuggerNamespace } from 'universe+jest:constant.ts';
import { ErrorMessage } from 'universe+jest:error.ts';

import type { AbsolutePath } from '@-xun/fs';
import type { MockedArgvOptions } from '@-xun/test-mock-argv';
import type { MockedEnvOptions } from '@-xun/test-mock-env';
import type { MockedOutputOptions } from '@-xun/test-mock-output';
import type { Merge, PackageJson, Promisable, Tagged } from 'type-fest';

// {@symbiote/notExtraneous jest}

export * from '@-xun/test-mock-argv';
export * from '@-xun/test-mock-env';
export * from '@-xun/test-mock-exit';
export * from '@-xun/test-mock-fixture';
export * from '@-xun/test-mock-import';
export * from '@-xun/test-mock-output';

const globalDebug = createDebugLogger({ namespace: globalDebuggerNamespace });

const ensurePackageHasBeenBuiltDebugger = globalDebug.extend(
  'ensurePackageHasBeenBuilt'
);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    interface Describe {
      /**
       * @see {@link reconfigureJestGlobalsToSkipTestsInThisFileIfRequested}
       */
      noskip: Describe;
    }

    interface It {
      /**
       * @see {@link reconfigureJestGlobalsToSkipTestsInThisFileIfRequested}
       */
      noskip: It;
    }
  }
}

/**
 * Return a function representing `T` but wrapped with Jest mock definitions.
 * Pass `{shallow: true}` as the only parameter to disable the deep mocking of
 * `T`, which otherwise occurs by default.
 *
 * This is a more powerful version of Jest's own {@link jest.mocked} and
 * {@link jest.MockedFn}.
 *
 * @example
 *
 *import type { MyFunctionType } from "./library";
 *jest.mock("./library");
 *
 *const mockRepresentingMyFunctionType = asMocked<MyFunctionType>();
 * // ...
 *expect(mockRepresentingMyFunctionType.mock.calls[0][0]).toBe(42);
 */
export function asMocked<T extends (...args: any[]) => any>(options?: {
  shallow?: false;
}): jest.MaybeMockedDeep<T>;
/**
 * Return a function representing `T` but wrapped (shallowly) with Jest mock
 * definitions.
 *
 * This is a more powerful version of Jest's own {@link jest.mocked} and
 * {@link jest.MockedFn}.
 *
 * @example
 *
 *import type { MyFunctionType } from "./library";
 *jest.mock("./library");
 *
 *const mockRepresentingMyFunctionType = asMocked<MyFunctionType>({ shallow: true });
 * // ...
 *expect(mockRepresentingMyFunctionType.mock.calls[0][0]).toBe(42);
 */
export function asMocked<T extends (...args: any[]) => any>(options: {
  shallow: true;
}): jest.MaybeMocked<T>;
/**
 * Wrap the non-nullish `source` with Jest mock definitions. Pass `{shallow:
 * true}` as the second parameter to disable the default deep mocking behavior.
 *
 * This is a more powerful version of Jest's own {@link jest.mocked} function.
 *
 * @example
 *
 *import { myFunction } from "./library";
 *jest.mock("./library");
 *
 *const mockMyFunction = asMocked(myFunction);
 *expect(mockMyFunction.mock.calls[0][0]).toBe(42);
 */
export function asMocked<T extends NonNullable<unknown>>(
  source: T,
  options?: { shallow: false }
): jest.MaybeMockedDeep<T>;
/**
 * Shallowly wrap the non-nullish `source` with Jest mock definitions.
 *
 * This is a more powerful version of Jest's own {@link jest.mocked} function.
 *
 * @example
 *
 *import { myFunction } from "./library";
 *jest.mock("./library");
 *
 *const mockMyFunction = asMocked(myFunction, { shallow: true });
 *expect(mockMyFunction.mock.calls[0][0]).toBe(42);
 */
export function asMocked<T extends NonNullable<unknown>>(
  source: T,
  options: { shallow: true }
): jest.MaybeMocked<T>;
/**
 * Wrap the non-nullish `source` (or `T` itself is `source` is omitted) with
 * Jest mock definitions.
 *
 * This is a more powerful version of Jest's own {@link jest.mocked} function.
 *
 * @example
 *
 *import { myFunction } from "./library";
 *jest.mock("./library");
 *
 *const mockMyFunction = asMocked(myFunction);
 *expect(mockMyFunction.mock.calls[0][0]).toBe(42);
 */
export function asMocked<T extends NonNullable<unknown>>(
  ...args:
    | [options?: { shallow?: boolean }]
    | [source: T, options?: { shallow: boolean }]
): jest.MaybeMockedDeep<T> | jest.MaybeMocked<T>;
export function asMocked<T extends NonNullable<unknown>>(
  ...args:
    | [options?: { shallow?: boolean }]
    | [source: T, options?: { shallow: boolean }]
): jest.MaybeMockedDeep<T> | jest.MaybeMocked<T> {
  const shallowArg =
    args[0] === undefined
      ? false
      : typeof args[0] === 'object' &&
          'shallow' in args[0] &&
          typeof args[0].shallow === 'boolean'
        ? args[0].shallow
        : undefined;

  const source = (shallowArg !== undefined ? jest.fn() : args[0]) as T;
  const options = { shallow: shallowArg ?? args[1]?.shallow ?? false };

  return jest.mocked<T>(source, options as Parameters<typeof jest.mocked>[1]);
}

/**
 * This function replaces Jest's `describe`, `test`, and `it` functions in the
 * current file with `describe.skip`, `test.skip`, and `it.skip` if
 * `process.env.SYMBIOTE_TEST_JEST_SKIP_SLOW_TESTS >= 1`. The replaced functions
 * also have a `noskip` method which are aliases for their respective original
 * versions.
 *
 * Essentially, this function changes Jest's execution semantics such that all
 * tests in a given file are skipped by default. Use the `noskip` method to opt
 * a test into always being run.
 *
 * To prevent a file from being executed in its entirety (for example, a test
 * file with hundreds or thousands of tests that still take a noticeable amount
 * of time to skip), include the string `-slow.` in the file's name, e.g.
 * `unit-my-slow.test.ts`, and set
 * `process.env.SYMBIOTE_TEST_JEST_SKIP_SLOW_TESTS >= 2`.
 *
 * See the [symbiote wiki](https://github.com/Xunnamius/symbiote/wiki) for more
 * details.
 */
export function reconfigureJestGlobalsToSkipTestsInThisFileIfRequested(
  /**
   * Determines which Jest globals are targeted for reconfiguration.
   *
   * By default, only `describe` is reconfigured while `test` and `it` are left
   * alone. This makes it easier to apply `noskip` to a collection of tests, but
   * sometimes it's prudent to reconfigure the other globals as well.
   */
  targets?: {
    /**
     * @default true
     */
    describe?: boolean;
    /**
     * @default false
     */
    test?: boolean;
    /**
     * @default false
     */
    it?: boolean;
  }
) {
  const debug = globalDebug.extend('slow-skip');

  const {
    describe: replaceDescribe = true,
    test: replaceTest = false,
    it: replaceIt = false
  } = targets || {};

  const describe_ = globalThis.describe;
  const test_ = globalThis.test;
  const it_ = globalThis.it;

  if (Number(process.env.SYMBIOTE_TEST_JEST_SKIP_SLOW_TESTS) >= 1) {
    if (replaceDescribe) {
      globalThis.describe = globalThis.describe.skip;
    }

    if (replaceTest) {
      globalThis.test = globalThis.test.skip;
      globalThis.test.todo = test_.todo;
    }

    if (replaceIt) {
      globalThis.it = globalThis.it.skip;
      globalThis.it.todo = it_.todo;
    }

    debug(
      'reconfigured jest global targets (%O) to skip all tests by default: process.env.SYMBIOTE_TEST_JEST_SKIP_SLOW_TESTS (%O) >= 1',
      targets,
      process.env.SYMBIOTE_TEST_JEST_SKIP_SLOW_TESTS
    );
  } else {
    debug(
      'did not reconfigure jest globals: process.env.SYMBIOTE_TEST_JEST_SKIP_SLOW_TESTS (%O) is not >=1',
      process.env.SYMBIOTE_TEST_JEST_SKIP_SLOW_TESTS
    );
  }

  globalThis.describe.noskip = describe_;
  globalThis.test.noskip = test_;
  globalThis.it.noskip = it_;

  debug('patched in noskip alias to all available targets');

  return {
    describe: describe_,
    test: test_,
    it: it_
  };
}

/**
 * Wraps {@link withMockedArgv} + {@link withMockedEnv} with
 * {@link withMockedExit} + {@link withMockedOutput}.
 */
export async function withMocks(
  fn: (
    spies: Merge<
      Parameters<Parameters<typeof withMockedOutput>[0]>[0],
      Parameters<Parameters<typeof withMockedExit>[0]>[0]
    >
  ) => Promise<void>,
  {
    simulatedEnv = {},
    simulatedArgv = [],
    options = undefined
  }: {
    simulatedEnv?: Record<string, string>;
    simulatedArgv?: string[];
    options?: Merge<Merge<MockedArgvOptions, MockedEnvOptions>, MockedOutputOptions>;
  } = {}
) {
  return withMockedArgv(
    () => {
      return withMockedEnv(
        () => {
          return withMockedExit((exitSpies) =>
            withMockedOutput(
              (outputSpies) => fn(Object.assign({}, exitSpies, outputSpies)),
              options
            )
          );
        },
        simulatedEnv,
        options
      );
    },
    simulatedArgv,
    options
  );
}

/**
 * This function will throw if at least one of `packageName`'s entry points
 * (relative to `packageRoot` and as defined in `packageExports`, are
 * inaccessible. If this package has no entry points, this function becomes a
 * no-op.
 */
export async function ensurePackageHasBeenBuilt(
  packageRoot: AbsolutePath,
  packageName: PackageJson['name'],
  packageExports: PackageJson['exports']
) {
  if (!packageExports) {
    throw new Error(ErrorMessage.NoEntryPointsInPackageJson(packageName));
  }

  await Promise.all(
    flattenPackageJsonSubpathMap({ map: packageExports }).map(
      async ({ isDeadCondition, isFallback, isFirstNonNullFallback, target }) => {
        if (!isDeadCondition && (!isFallback || isFirstNonNullFallback) && target) {
          const entryPoint = toPath(packageRoot, target);
          ensurePackageHasBeenBuiltDebugger('checking entry point: %O', entryPoint);

          const { length: fileCount } = await glob(entryPoint);
          ensurePackageHasBeenBuiltDebugger('matching files (count): %O', fileCount);

          if (fileCount <= 0) {
            throw new Error(ErrorMessage.DistributableNotBuilt(target));
          }
        } else {
          ensurePackageHasBeenBuiltDebugger('ignored entry target: %O', target);
        }
      }
    )
  );
}

/**
 * The mock Date.now() value returned after calling `useMockDateNow`.
 */
export const mockDateNowMs = Date.now();

/**
 * Sets up a Jest spy on the `Date` object's `now` method such that it returns
 * `mockNow` or `mockDateNowMs` (default) rather than the actual date. If you
 * want to restore the mock, you will have to do so manually (or use Jest
 * configuration to do so automatically).
 *
 * This is useful when testing against dummy data containing values derived from
 * the current time (i.e. unix epoch).
 */
export function useMockDateNow(options?: { mockNow?: number }) {
  beforeEach(() => {
    jest.spyOn(Date, 'now').mockImplementation(() => options?.mockNow || mockDateNowMs);
  });
}

/**
 * This type can be used to construct the error spec required by
 * {@link expectExceptionsWithMatchingErrors} without having to call said
 * function.
 *
 * Example:
 *
 * ```typescript
 * const errors = [
 *   [{ something: 1 }, 'expected error #1'],
 *   [{ something: 2 }, 'expected error #2'],
 *   [{ something: 3 }, 'expected error #3'],
 * ] as Spec<[{ something: number }], 'single-parameter'>;
 *
 * await expectExceptionsWithMatchingErrors(
 *   errors,
 *   (params) => fn(...params),
 *   { singleParameter: true }
 * );
 * ```
 * @see `spec` from {@link expectExceptionsWithMatchingErrors}
 */
export type ExpectExceptionsWithMatchingErrorsSpec<
  Params extends readonly unknown[],
  SingleParameter extends 'single-parameter' | 'multi-parameter' = 'multi-parameter'
> = Tagged<
  [
    params: 'single-parameter' extends SingleParameter ? Params[0] : Params,
    errorMessage: string
  ][],
  SingleParameter
>;

/**
 * @see {@link expectExceptionsWithMatchingErrors}
 */
export type ExpectExceptionsWithMatchingErrorsOptions = {
  /**
   * If present, only the given indices (zero-based) will be run. The others
   * will be skipped.
   *
   * @default undefined
   */
  runOnly?: number[];
  /**
   * If `true`, the first element of each `spec` tuple will be considered a
   * lone parameter (as if it were wrapped in an array).
   *
   * This is to make adoption of this function by legacy code bases, which
   * used the old single-parameter style, easier and should otherwise be
   * left as `false`.
   *
   * @default false
   */
  singleParameter?: boolean;
};

/**
 * @see `errorFn` from {@link expectExceptionsWithMatchingErrors}
 */
export type ExpectExceptionsWithMatchingErrorsFunction<
  Params extends readonly unknown[]
> = (
  params: ExpectExceptionsWithMatchingErrorsSpec<Params>[number][0],
  index: number
) => Promisable<unknown>;

/**
 * Maps each element of the `spec` array into a Jest expectation asserting that
 * `errorFn` either throws an error or rejects. If an assertion fails, a helpful
 * error message is thrown.
 *
 * Example:
 *
 * ```typescript
 * await expectExceptionsWithMatchingErrors([
 *  [[param1, param2], 'expected error message 1'],
 *  [[1, 2, 3], 'expected error message 2']
 * ],
 * () => {
 *   // ...
 * });
 * ```
 *
 * Note: if you're getting a type error about no matching overloads, make sure
 * you've set `options.singleParameter` to `true` if you're passing in a
 * {@link ExpectExceptionsWithMatchingErrorsSpec} typed with
 * `'single-parameter'` as its second type parameter.
 */
export async function expectExceptionsWithMatchingErrors<Params>(
  spec: ExpectExceptionsWithMatchingErrorsSpec<[Params], 'single-parameter'>,
  errorFn: ExpectExceptionsWithMatchingErrorsFunction<[Params]>,
  options: ExpectExceptionsWithMatchingErrorsOptions & { singleParameter: true }
): Promise<void>;
export async function expectExceptionsWithMatchingErrors<Params extends unknown[]>(
  spec: ExpectExceptionsWithMatchingErrorsSpec<Params>,
  errorFn: ExpectExceptionsWithMatchingErrorsFunction<Params>,
  options?: ExpectExceptionsWithMatchingErrorsOptions
): Promise<void>;
export async function expectExceptionsWithMatchingErrors(
  spec_:
    | ExpectExceptionsWithMatchingErrorsSpec<[unknown], 'single-parameter'>
    | ExpectExceptionsWithMatchingErrorsSpec<unknown[]>,
  errorFn_:
    | ExpectExceptionsWithMatchingErrorsFunction<[unknown]>
    | ExpectExceptionsWithMatchingErrorsFunction<unknown[]>,
  { runOnly, singleParameter = false }: ExpectExceptionsWithMatchingErrorsOptions = {}
): Promise<void> {
  const debug = globalDebug.extend('match-errors');

  debug('runOnly: %O', runOnly);
  debug('singleParameter: %O', singleParameter);

  const spec = singleParameter
    ? (
        spec_ as ExpectExceptionsWithMatchingErrorsSpec<[unknown], 'single-parameter'>
      ).map(([param, error]) => [[param], error] as const)
    : (spec_ as ExpectExceptionsWithMatchingErrorsSpec<unknown[]>);

  const errorFn = errorFn_ as ExpectExceptionsWithMatchingErrorsFunction<
    readonly unknown[]
  >;

  await Promise.all(
    spec.map(async ([params, message], index) => {
      if (runOnly && !runOnly.includes(index)) {
        debug('skipped running index #%O', index);
        return undefined;
      }

      let result = undefined;
      let error = undefined;
      let errored = false;

      try {
        result = errorFn(params, index);
        if (isPromise(result)) {
          result = await result;
        }
      } catch (error_) {
        errored = true;
        error = error_;
      }

      assert(errored, ErrorMessage.ExceptionDidNotOccur(index, message));

      expect({ index, params, error }).toMatchObject({
        index,
        error: { message }
      });
    })
  );

  assert(!runOnly, ErrorMessage.ExceptionDidOccur());
}
