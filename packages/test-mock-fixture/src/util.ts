import { runNoRejectOnBadExit } from '@-xun/run';

import { ErrorMessage } from 'universe+test-mock-fixture:error.ts';

import type { AbsolutePath, RelativePath } from '@-xun/fs';

const indexFileRegExp = /^src\/index(\.test)?\.((c|m)?(js|ts)x?)$/;

/**
 * Get the `tree` output of a directory and all its sub-directories. If the
 * `tree` command is not available for whatever reason, a string is returned
 * containing a helpful error message.
 */
export async function getTreeOutput(root: AbsolutePath) {
  if (process.platform === 'win32') {
    return '(this platform does not support the `tree` command)';
  } else {
    const { stdout } = await runNoRejectOnBadExit('tree', ['-a', '-L', '2'], {
      cwd: root
    });

    return stdout || '(the `tree` command did not return a result; not installed?)';
  }
}

/**
 * Search a `virtualFiles` object for a key matching a `src/index` or
 * `src/index.test` file with a JS/TS/JSX extension.
 */
export function findIndexVirtualPath(
  virtualFiles: Record<string, string>,
  options?: {
    /**
     * @default true
     */
    throwIfNotFound?: true;
  }
): RelativePath;
export function findIndexVirtualPath(
  virtualFiles: Record<string, string>,
  options: {
    /**
     * @default true
     */
    throwIfNotFound: false;
  }
): RelativePath | undefined;
export function findIndexVirtualPath(
  virtualFiles: Record<string, string>,
  options: {
    /**
     * @default true
     */
    throwIfNotFound: boolean;
  }
): RelativePath | undefined;
export function findIndexVirtualPath(
  virtualFiles: Record<string, string>,
  {
    throwIfNotFound = true
  }: {
    /**
     * @default true
     */
    throwIfNotFound?: boolean;
  } = {}
): RelativePath | undefined {
  const path = Object.keys(virtualFiles).find((path) => indexFileRegExp.test(path));

  if (!path) {
    if (throwIfNotFound) {
      throw new Error(ErrorMessage.MissingVirtualFile('src/index.*'));
    } else {
      return undefined;
    }
  }

  return path as RelativePath;
}
