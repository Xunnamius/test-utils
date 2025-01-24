import type { Promisable } from 'type-fest';

/**
 * @see {@link withMockedEnv}
 */
export type MockedEnvOptions = {
  /**
   * By default, the `process.env` object is emptied and re-hydrated with
   * `newEnv`. Setting `replace` to `false` will cause `newEnv` to be appended
   * instead.
   *
   * @default true
   */
  replaceEntireEnv?: boolean;
  /**
   * If `true`, whenever `process.env.DEBUG` is present, it will be forwarded
   * as-is to the underlying environment mock even when `replaceEntireEnv` is
   * `true`. This allows debug output to make it to the screen.
   *
   * @default true
   */
  passthroughDebugEnv?: boolean;
};

/**
 * Mock `process.env` within the scope of `test`. Guaranteed to return
 * `process.env` to its original state no matter how `test` terminates.
 *
 * It is not safe to run this function concurrently (e.g. with `Promise.all`).
 */
export async function withMockedEnv(
  test: () => Promisable<void>,
  simulatedEnv: Record<string, string>,
  { replaceEntireEnv = true, passthroughDebugEnv = true }: MockedEnvOptions = {}
) {
  const previousEnv = { ...process.env };

  const clearEnv = () => {
    Object.getOwnPropertyNames(process.env).forEach((property) => {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete process.env[property];
    });
  };

  // ? Take care to preserve the original env object reference in memory
  if (replaceEntireEnv) clearEnv();
  Object.assign(process.env, simulatedEnv);

  if (passthroughDebugEnv && previousEnv.DEBUG !== undefined) {
    process.env.DEBUG = previousEnv.DEBUG;
  }

  try {
    await test();
  } finally {
    clearEnv();
    Object.assign(process.env, previousEnv);
  }
}

/**
 * Return a function that, when invoked, returns a pre-configured
 * {@link withMockedEnv} function.
 *
 * This is useful for centralizing mock configuration in one place instead of
 * duplicating configuration across {@link withMockedEnv} calls.
 */
export function mockEnvFactory(
  factorySimulatedEnv: Record<string, string>,
  factoryOptions: MockedEnvOptions
) {
  return (
    test: () => Promisable<void>,
    simulatedEnv: Record<string, string> = {},
    options?: MockedEnvOptions
  ) => {
    return withMockedEnv(
      test,
      { ...factorySimulatedEnv, ...simulatedEnv },
      options ?? factoryOptions
    );
  };
}
