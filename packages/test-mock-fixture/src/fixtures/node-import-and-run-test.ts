import { runNoRejectOnBadExit } from '@-xun/run';

import type { MockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';
 
const name = 'node-import-and-run-test';

/**
 * @see {@link nodeImportAndRunTestFixture}
 */
export type NodeImportAndRunTestFixture = MockFixture<typeof name>;

/**
 * @see {@link nodeImportAndRunTestFixture}
 */
export type NodeImportAndRunTestFixtureOptions = {
  /**
   * Additional packages to install.
   */
  npmInstall?: string | string[];
  /**
   * If `false`, `--ignore-scripts` will be passed to NPM during installation.
   *
   * @default true
   */
  runInstallScripts?: boolean;
  /**
   * Configure the executable used to run the index file.
   */
  runWith?: {
    /**
     * The binary that is executed.
     *
     * @default 'node'
     */
    binary?: string;
    /**
     * The arguments passed to the binary that is executed.
     *
     * Note that a relative path to the index file is always passed to the
     * executable as the last argument.
     *
     * @default ['--no-warnings', '--experimental-json-modules',
     * '--experimental-vm-modules']
     */
    args?: string[];
    /**
     * The options passed to `@-xun/run`'s {@link runNoRejectOnBadExit}
     * function.
     */
    opts?: Record<string, unknown>;
  };
};

/**
 * This fixture initializes the dummy root directory with an index file under
 * `src` (described by `initialFileContents`) and then executes it. This file
 * should import and test the package under test.
 *
 * The index file must have a path matching the pattern `src/index${extension}`;
 * it can have any of the following extensions: `.js`, `.cjs`, `.mjs`, `.jsx`,
 * `.ts`, `.cts`, `.mts`, `.tsx`.
 */
export function nodeImportAndRunTestFixture(): NodeImportAndRunTestFixture {
  return {
    name,
    description: 'setting up node import and runtime integration test',
    setup: async (context) => {
      const targetPath = Object.keys(context.fileContents).find((path) =>
        /^src\/index(\.test)?\.(((c|m)?js)|ts)x?$/.test(path)
      );

      if (!targetPath) {
        throw new Error('could not find initial contents for src/index test file');
      }

      await writeFile({
        path: `${context.root}/${targetPath}`,
        data: context.fileContents[targetPath],
        context
      });

      const bin = context.options.runWith?.binary ?? 'node';

      const args = context.options.runWith?.args ?? [
        '--no-warnings',
        '--experimental-json-modules',
        '--experimental-vm-modules'
      ];

      const options = Object.assign(
        { env: { DEBUG_COLORS: 'false' } },
        context.options.runWith?.opts ?? {}
      );

      context.treeOutput = await getTreeOutput(context);
      context.testResult = await run(bin, [...args, targetPath], {
        cwd: context.root,
        ...options
      });
    }
  };
}
