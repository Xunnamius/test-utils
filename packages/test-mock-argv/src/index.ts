import type { Promisable } from 'type-fest';

/**
 * @see {@link withMockedArgv}
 */
export type MockedArgvOptions = {
  /**
   * By default, the first two elements in `process.argv` are preserved. Setting
   * `replace` to `true` will cause the entire process.argv array to be
   * replaced.
   *
   * @default false
   */
  replaceEntireArgv?: boolean;
};

/**
 * Mock `process.argv` within the scope of `test`. Guaranteed to return
 * `process.argv` to its original state no matter how `test` terminates.
 *
 * It is not safe to run this function concurrently (e.g. with `Promise.all`).
 */
export async function withMockedArgv(
  test: () => Promisable<void>,
  simulatedArgv: string[],
  { replaceEntireArgv = false }: MockedArgvOptions = {}
) {
  // ? Take care to preserve the original argv array reference in memory
  const previousArgv = process.argv.splice(
    replaceEntireArgv ? 0 : 2,
    process.argv.length
  );

  process.argv.push(...simulatedArgv);

  try {
    await test();
  } finally {
    process.argv.splice(replaceEntireArgv ? 0 : 2, process.argv.length);
    process.argv.push(...previousArgv);
  }
}

/**
 * Return a function that, when invoked, returns a pre-configured
 * {@link withMockedArgv} function.
 *
 * This is useful for centralizing mock configuration in one place instead of
 * duplicating configuration across {@link withMockedArgv} calls.
 */
export function mockArgvFactory(
  factorySimulatedArgv: typeof process.argv,
  factoryOptions?: MockedArgvOptions
) {
  return (
    test: () => Promisable<void>,
    simulatedArgv?: string[],
    options?: MockedArgvOptions
  ) => {
    return withMockedArgv(
      test,
      [...factorySimulatedArgv, ...(simulatedArgv ?? [])],
      options ?? factoryOptions
    );
  };
}
