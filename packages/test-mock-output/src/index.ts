import assert from 'node:assert';
import nodeConsole from 'node:console';

import type { Promisable } from 'type-fest';

// {@symbiote/notExtraneous jest}

/**
 * @see {@link withMockedOutput}
 */
export type MockedOutputOptions = {
  /**
   * If `true`, whenever `process.env.DEBUG` is present, output functions will
   * still be spied on but their implementations will not be mocked, allowing
   * debug output to make it to the screen.
   *
   * @default true
   */
  passthroughOutputIfDebugging?: boolean;
  /**
   * Prevent mocking the implementation of one or more output spies, allowing
   * output to be passed through to the original function. Said spies will
   * remain functional.
   *
   * @default []
   */
  passthrough?: ('log' | 'warn' | 'error' | 'info' | 'stdout' | 'stderr')[];
};

/**
 * @see {@link withMockedOutput}
 */
export type MockedOutputSpies = {
  /**
   * Spies on `globalThis.console.log`.
   */
  logSpy: jest.SpyInstance;
  /**
   * Spies on `globalThis.console.warn`.
   */
  warnSpy: jest.SpyInstance;
  /**
   * Spies on `globalThis.console.error`.
   */
  errorSpy: jest.SpyInstance;
  /**
   * Spies on `globalThis.console.info`.
   */
  infoSpy: jest.SpyInstance;
  /**
   * Spies on `require('node:console').log`.
   */
  nodeLogSpy: jest.SpyInstance;
  /**
   * Spies on `require('node:console').warn`.
   */
  nodeWarnSpy: jest.SpyInstance;
  /**
   * Spies on `require('node:console').error`.
   */
  nodeErrorSpy: jest.SpyInstance;
  /**
   * Spies on `require('node:console').info`.
   */
  nodeInfoSpy: jest.SpyInstance;
  /**
   * Spies on `process.stdout.write`.
   */
  stdoutSpy: jest.SpyInstance;
  /**
   * Spies on `process.stderr.write`.
   */
  stderrSpy: jest.SpyInstance;
};

/**
 * Mock terminal output functions within the scope of `test`. Guaranteed to
 * return terminal output functions to their original state no matter how `test`
 * terminates.
 *
 * **WARNING: it is not safe to run this function concurrently (e.g. with
 * `Promise.all`).**
 */
export async function withMockedOutput(
  test: (spies: MockedOutputSpies) => Promisable<unknown>,
  { passthrough = [], passthroughOutputIfDebugging = true }: MockedOutputOptions = {}
) {
  const spies: MockedOutputSpies = {
    logSpy: jest.spyOn(console, 'log'),
    warnSpy: jest.spyOn(console, 'warn'),
    errorSpy: jest.spyOn(console, 'error'),
    infoSpy: jest.spyOn(console, 'info'),
    nodeLogSpy: jest.spyOn(nodeConsole, 'log'),
    nodeWarnSpy: jest.spyOn(nodeConsole, 'warn'),
    nodeErrorSpy: jest.spyOn(nodeConsole, 'error'),
    nodeInfoSpy: jest.spyOn(nodeConsole, 'info'),
    stdoutSpy: jest.spyOn(process.stdout, 'write'),
    stderrSpy: jest.spyOn(process.stderr, 'write')
  };

  const $wasAccessed = Symbol('was-accessed');
  const noDebugPassthrough = !process.env.DEBUG || !passthroughOutputIfDebugging;

  for (const [name, spy] of Object.entries(spies)) {
    // ? If we're debugging, show all outputs instead of swallowing them
    if (
      noDebugPassthrough &&
      !passthrough.includes(name.slice(0, -3) as (typeof passthrough)[number])
    ) {
      if (name.startsWith('std')) {
        spy.mockImplementation(() => true);
      } else {
        spy.mockImplementation(() => undefined);
      }
    }

    // ? Sometimes useful warnings/errors and what not are swallowed when all we
    // ? really wanted was to track log/stdout calls, or vice-versa. To prevent
    // ? this, we expect that our spies have not been called at all UNLESS the
    // ? caller of withMockedOutput uses the spy (accesses a property).
    let wasAccessed = false;

    spies[name as keyof typeof spies] =
      //
      new Proxy(spy, {
        get(target, property) {
          if (property === $wasAccessed) {
            return wasAccessed;
          }

          wasAccessed = true;

          const value: unknown =
            // @ts-expect-error: TypeScript isn't smart enough to figure this out
            target[property];

          // ? It's what the MDN example uses, so we shall use it too
          /* istanbul ignore next */
          if (typeof value === 'function') {
            return function (...args: unknown[]) {
              // ? "this-recovering" code
              return value.apply(target, args);
            };
          }

          return value;
        }
      });
  }

  try {
    await test(spies);

    // ? Let us know when output was swallowed unexpectedly
    for (const [name, spy] of Object.entries(spies)) {
      if (
        noDebugPassthrough &&
        !passthrough.includes(name as (typeof passthrough)[number])
      ) {
        const wasAccessed = (spy as typeof spy & { [$wasAccessed]: boolean })[
          $wasAccessed
        ];

        assert(typeof wasAccessed === 'boolean');

        if (!wasAccessed) {
          expect({
            'failing-spy': name,
            'unexpected-output': spy.mock.calls
          }).toStrictEqual({ 'failing-spy': name, 'unexpected-output': [] });
        }
      }
    }
  } finally {
    Object.values(spies).forEach((spy) => spy.mockRestore());
  }
}
