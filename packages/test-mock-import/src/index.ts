import { isMockedExitError, withMockedExit } from '@-xun/test-mock-exit';
import { createDebugLogger } from 'rejoinder';

import { globalDebuggerNamespace } from 'universe+test-mock-import:constant.ts';

import type { AbsolutePath } from '@-xun/fs';

const globalDebug = createDebugLogger({ namespace: globalDebuggerNamespace });
const globalDebugIsolatedImport = globalDebug.extend('isolated-import');

/**
 * A helper type that reduces an object type to its `default` property, if such
 * a property exists, or returns it as-is if it does not.
 */
export type AsDefault<T> = T extends { default: unknown } ? T['default'] : T;

/**
 * @see {@link isolatedImport}
 */
export type IsolatedImportOptions = {
  /**
   * By default, if `module.__esModule === true` and the only other property of
   * `module.exports` is `"default"`, then said `"default"` export will be
   * returned instead of a module object. Use `reduceToDefault` to override this
   * behavior in either direction.
   *
   * @default undefined
   */
  reduceToDefault?: boolean | undefined;
};

/**
 * Performs a CJS module import (via `require`) as if it were being imported for
 * the first time.
 *
 * Note that this function breaks the "require caching" expectation of Node.js
 * modules. Problems can arise, for example, when closing an app-wide database
 * connection in your test cleanup phase and expecting it to close for the
 * isolated module too. In this case, the isolated module has its own isolated
 * "app-wide" connection that would not actually be closed and could cause your
 * test to hang unexpectedly, even when all tests pass.
 */
// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export function isolatedImport<Module>(
  /**
   * Specifier or absolute path to the module under test. Module resolution is
   * handled by `require`, therefore the specifier, if a filesystem path, should
   * never be relative and must always use unix-style separators (i.e. `/`).
   */
  specifier: AbsolutePath | string,
  options?: IsolatedImportOptions
): Module {
  let package_: Module | undefined;

  // {@symbiote/notExtraneous jest}
  // ? Cache-busting
  jest.isolateModules(() => {
    package_ = ((required) => {
      const shouldUseDefault =
        options?.reduceToDefault === true ||
        (options?.reduceToDefault !== false &&
          required.__esModule &&
          Object.keys(required).length <= 2);

      globalDebugIsolatedImport(`performing isolated import of %O`, specifier);

      if (shouldUseDefault === true) {
        globalDebugIsolatedImport(
          `the value of module.default will be returned if it exists`
        );
      } else if (shouldUseDefault === false) {
        globalDebugIsolatedImport(
          `the entire module object will be returned regardless of the presence of module.default`
        );
      } else {
        globalDebugIsolatedImport(
          `the value of module.default will be returned if (1) module.__esModule === true and (2) module.default exists as the only other key in the module object`
        );
      }

      return required.default && shouldUseDefault ? required.default : required;
    })(require(specifier));
  });

  return package_ as Module;
}

/**
 * Returns a function that, when invoked, performs a CJS module import (via
 * `require`) as if it were being imported for the first time. Also awaits the
 * import result and protects the caller from any calls to `process.exit` from
 * the imported module.
 *
 * Use `expectedExitCode` when the import is expected to terminate with a
 * specific exit code.
 *
 * @see {@link isolatedImport}
 */
export function protectedImportFactory<Module>(
  ...[specifier, factoryOptions]: Parameters<typeof isolatedImport<Module>>
) {
  return async function <LocalModule = Module>({
    expectedExitCode,
    reduceToDefault
  }: IsolatedImportOptions & { expectedExitCode?: number } = {}): Promise<LocalModule> {
    let package_: LocalModule | undefined = undefined;

    await withMockedExit(async ({ exitSpy, getExitCode }) => {
      let caughtError = undefined;

      try {
        package_ = await isolatedImport<LocalModule>(specifier, {
          ...factoryOptions,
          ...(reduceToDefault !== undefined ? { reduceToDefault } : {})
        });
      } catch (error) {
        if (isMockedExitError(error)) {
          caughtError = error;
        } else {
          throw error;
        }
      }

      if (expectedExitCode !== undefined) {
        const exitCode = getExitCode();
        const exitSpyWasCalled = !!exitSpy.mock.lastCall;

        if (exitCode === undefined || exitSpyWasCalled) {
          expect(exitSpy).toHaveBeenCalledWith(expectedExitCode);
        }

        if (exitCode !== undefined) {
          expect(exitCode).toBe(expectedExitCode);
        }
      } else if (caughtError) {
        throw caughtError;
      }
    });

    return package_ as LocalModule;
  };
}
