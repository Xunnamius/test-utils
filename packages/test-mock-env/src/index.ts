import type { Promisable } from 'type-fest';

/**
 * @see {@link withMockedEnv}
 */
export type MockedEnvOptions = {
  /**
   * By default, all environment variables in the `process.env` object are
   * deleted before the object is re-hydrated with `newEnv`.
   *
   * Two environment variables, if present, are exempt from deletion:
   * `process.env.DEBUG` and `process.env.DEBUG_COLORS`.
   *
   * Setting `replace` to `false` will cause `newEnv` to be merged on top of
   * `process.env` instead of replacing it. Setting `replace` to `true` will
   * cause `newEnv` to replace the _entire_ `process.env` object, including
   * `process.env.DEBUG_COLORS`.
   *
   * Note that `process.env.DEBUG` is unaffected by this option (see
   * {@link MockedEnvOptions.passthroughDebugEnv} instead).
   *
   * @default undefined
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
 * **WARNING: it is not safe to run this function concurrently (e.g. with
 * `Promise.all`).**
 */
export async function withMockedEnv(
  test: () => Promisable<void>,
  simulatedEnv: Record<string, string>,
  { replaceEntireEnv, passthroughDebugEnv = true }: MockedEnvOptions = {}
) {
  const previousEnv = { ...process.env };

  // ? Take care to preserve the original env object reference in memory
  if (replaceEntireEnv !== false) {
    clearEnv({
      keepDebug: passthroughDebugEnv,
      keepDebugColors: replaceEntireEnv !== true
    });
  }

  Object.assign(process.env, simulatedEnv);

  try {
    await test();
  } finally {
    clearEnv({ keepDebug: false, keepDebugColors: false });
    Object.assign(process.env, previousEnv);
  }

  function clearEnv({
    keepDebug,
    keepDebugColors
  }: {
    keepDebug: boolean;
    keepDebugColors: boolean;
  }) {
    Object.getOwnPropertyNames(process.env).forEach((property) => {
      if (
        (!keepDebugColors || property !== 'DEBUG_COLORS') &&
        (!keepDebug || property !== 'DEBUG')
      ) {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete process.env[property];
      }
    });
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
  factoryOptions?: MockedEnvOptions
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
