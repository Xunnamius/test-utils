/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { withMockedExit } from '@-xun/test-mock-exit';
import { createDebugLogger } from 'rejoinder';

import { globalDebuggerNamespace } from 'universe+test-mock-import:constant.ts';

import type { AbsolutePath } from '@-xun/fs';

const globalDebug = createDebugLogger({ namespace: globalDebuggerNamespace });
const globalDebugIsolatedImport = globalDebug.extend('isolated-import');
const globalDebugProtectedImport = globalDebug.extend('protected-import-factory');

/**
 * @see {@link isolatedImport}
 */
export type IsolatedImportOptions = {
  /**
   * By default, if `module.__esModule === true`, the default export will be
   * returned instead. Use `useDefault` to override this behavior in either
   * direction.
   *
   * @default undefined
   */
  useDefault?: boolean | undefined;
};

/**
 * Performs a module import as if it were being imported for the first time.
 *
 * Note that this function breaks the "require caching" expectation of Node.js
 * modules. Problems can arise, for example, when closing an app-wide database
 * connection in your test cleanup phase and expecting it to close for the
 * isolated module too. In this case, the isolated module has its own isolated
 * "app-wide" connection that would not actually be closed and could cause your
 * test to hang unexpectedly, even when all tests pass.
 */
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export function isolatedImport<T>(
  /**
   * Specifier or absolute path to the module under test. Module resolution is
   * handled by `require`, therefore the specifier, if a filesystem path, should
   * never be relative and must always use unix-style separators (i.e. `/`).
   */
  specifier: AbsolutePath | string,
  options?: IsolatedImportOptions
): T {
  let package_: T | undefined;

  // {@symbiote/notExtraneous jest}
  // ? Cache-busting
  jest.isolateModules(() => {
    package_ = ((required) => {
      const shouldUseDefault =
        options?.useDefault === true ||
        (options?.useDefault !== false &&
          required.__esModule &&
          Object.keys(required).length === 1);

      globalDebugIsolatedImport(
        `performing isolated import of ${specifier}${
          shouldUseDefault
            ? ` (returning ::default${options?.useDefault ? ' by force' : ''})`
            : ''
        }`
      );

      return required.default && shouldUseDefault ? required.default : required;
    })(require(specifier));
  });

  return package_ as T;
}

/**
 * Returns a function that, when invoked, performs a module import as if it were
 * being imported for the first time.
 *
 * Use `expectedExitCode` when the import is expected to terminate with a
 * specific exit code.
 *
 * @see {@link isolatedImport}
 */
export function protectedImportFactory<T>(path: string) {
  return async (factoryOptions?: { expectedExitCode?: number }): Promise<T> => {
    let package_: T | undefined = undefined;

    await withMockedExit(async ({ exitSpy, getExitCode }) => {
      package_ = await isolatedImport<T>(path);

      if (!expect) {
        globalDebugProtectedImport(
          'WARNING: "expect" object not found, so exit check was skipped'
        );
      } else if (factoryOptions?.expectedExitCode !== undefined) {
        const exitCode = getExitCode();

        if (exitCode === undefined) {
          expect(exitSpy).toHaveBeenCalledWith(factoryOptions.expectedExitCode);
        } else {
          expect(exitCode).toBe(factoryOptions.expectedExitCode);
        }
      }
    });

    return package_ as T;
  };
}
