import type { Promisable } from 'type-fest';

/**
 * @see {@link withMockedEnv}
 */
export type MockedEnvOptions = {
  /**
   * By default, the `process.env` object (**except `process.env.DEBUG_COLORS`,
   * if it exists**) is emptied and re-hydrated with `newEnv`. Setting `replace`
   * to `false` will cause `newEnv` to be appended instead. Setting `replace` to
   * `true` will cause `newEnv` to replace the _entire_ `process.env` object,
   * including `process.env.DEBUG_COLORS`.
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
 * It is not safe to run this function concurrently (e.g. with `Promise.all`).
 */
export async function withMockedEnv(
  test: () => Promisable<void>,
  simulatedEnv: Record<string, string>,
  { replaceEntireEnv, passthroughDebugEnv = true }: MockedEnvOptions = {}
) {
  const previousEnv = { ...process.env };

  const clearEnv = ({ keepDebugColors }: { keepDebugColors: boolean }) => {
    Object.getOwnPropertyNames(process.env).forEach((property) => {
      if (keepDebugColors && property !== 'DEBUG_COLORS') {
        // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
        delete process.env[property];
      }
    });
  };

  // ? Take care to preserve the original env object reference in memory
  if (replaceEntireEnv !== false) {
    clearEnv({ keepDebugColors: replaceEntireEnv !== true });
  }

  Object.assign(process.env, simulatedEnv);

  if (passthroughDebugEnv && previousEnv.DEBUG !== undefined) {
    process.env.DEBUG = previousEnv.DEBUG;
  }

  try {
    await test();
  } finally {
    clearEnv({ keepDebugColors: false });
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
