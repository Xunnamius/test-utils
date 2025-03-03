import { runNoRejectOnBadExit } from '@-xun/run';

import { ErrorMessage } from 'universe+test-mock-fixture:error.ts';

import type { AbsolutePath, RelativePath } from '@-xun/fs';
import type { RunOptions, RunReturnType } from '@-xun/run';
import type { Promisable } from 'type-fest';

const indexFileRegExp = /^src\/index(\.test)?\.((c|m)?(js|ts)x?)$/;

const nodejsDebugStrings = [
  'Debugger attached.\n',
  'Waiting for the debugger to disconnect...'
];

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

/**
 * Remove those pesky strings Node outputs to stderr when running with
 * `--inspect`.
 *
 * Only works with string-type data.
 */
export async function withoutNodeDebuggerStderrOutput<
  T extends RunReturnType<RunOptions>
>(runResult: Promisable<T>): Promise<T> {
  const awaitedRunResult = await runResult;

  if (typeof awaitedRunResult.stderr === 'string') {
    let { stderr } = awaitedRunResult;

    nodejsDebugStrings.forEach((deletionTarget) => {
      stderr = stderr.replaceAll(deletionTarget, '');
    });

    awaitedRunResult.stderr = stderr;
  } else if (Array.isArray(awaitedRunResult.stderr)) {
    const trimmedNodejsDebugStrings = nodejsDebugStrings.map((str) => str.trim());
    awaitedRunResult.stderr = awaitedRunResult.stderr.filter((filterTarget) => {
      return !trimmedNodejsDebugStrings.includes(String(filterTarget));
    });
  }

  return awaitedRunResult;
}
