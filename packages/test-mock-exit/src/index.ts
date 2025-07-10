/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { MockedExitError } from 'universe+test-mock-exit:error.ts';

import type { Promisable } from 'type-fest';

// {@symbiote/notExtraneous jest}

export * from 'universe+test-mock-exit:error.ts';

export const { isError: isMockedExitError } = MockedExitError;

/**
 * Mock `process.exit` within the scope of `test`. Guaranteed to return
 * `process.env` to its original state no matter how `test` terminates.
 *
 * **WARNING: it is not safe to run this function concurrently (e.g. with
 * `Promise.all`).**
 */
export async function withMockedExit(
  test: (spies: {
    exitSpy: jest.SpyInstance;
    getExitCode: () => typeof process.exitCode;
  }) => Promisable<void>
) {
  // {@symbiote/notExtraneous jest}
  const exitSpy_ = jest.spyOn(process, 'exit').mockImplementation((code) => {
    throw new MockedExitError(code);
  });

  const oldProcessExitCode = process.exitCode;

  // ? Sometimes the program is trying to crash but the attempt is swallowed
  // ? when all we really wanted was to track changes to process.exitCode. To
  // ? prevent this, we expect that our spy has not been called at all UNLESS
  // ? the caller of withMockedExit used the spy (accessed a property).
  let exitSpyWasAccessed = false;
  let getExitCodeWasUsed = false;

  const exitSpyProxy = new Proxy(exitSpy_, {
    get(target, property) {
      exitSpyWasAccessed = true;

      const value: unknown =
        // @ts-expect-error: TypeScript isn't smart enough to figure this out
        target[property];

      /* istanbul ignore next */
      if (typeof value === 'function') {
        return function (...args: unknown[]) {
          // ? This is "this-recovering" code.
          return value.apply(target, args);
        };
      }

      return value;
    }
  });

  try {
    await test({
      exitSpy: exitSpyProxy,
      getExitCode() {
        getExitCodeWasUsed = true;
        return process.exitCode;
      }
    });

    if (!exitSpyWasAccessed && !getExitCodeWasUsed) {
      expect({
        'expected process.exit calls': exitSpyProxy.mock.calls,
        'expected process.exitCode value': process.exitCode || '0 or undefined'
      }).toStrictEqual({
        'expected process.exit calls': [],
        'expected process.exitCode value': '0 or undefined'
      });
    } else if (!exitSpyWasAccessed) {
      expect({
        'expected process.exit calls': exitSpyProxy.mock.calls
      }).toStrictEqual({
        'expected process.exit calls': []
      });
    } else if (!getExitCodeWasUsed) {
      expect({
        'expected process.exitCode value': process.exitCode || '0 or undefined'
      }).toStrictEqual({
        'expected process.exitCode value': '0 or undefined'
      });
    }
  } finally {
    exitSpyProxy.mockRestore();
    process.exitCode = oldProcessExitCode;
  }
}
