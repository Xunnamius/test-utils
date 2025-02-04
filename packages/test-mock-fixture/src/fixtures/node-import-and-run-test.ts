import { runNoRejectOnBadExit } from '@-xun/run';

import { ErrorMessage } from 'universe+test-mock-fixture:error.ts';

import type { GlobalFixtureOptions } from 'multiverse+test-mock-fixture:types/options.ts';
import type { FixtureContext, MockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';

export const nodeImportAndRunTestFixtureName = 'node-import-and-run-test';

/**
 * @see {@link nodeImportAndRunTestFixture}
 */
export type NodeImportAndRunTestFixture = MockFixture<typeof nodeImportAndRunTestFixtureName, FixtureContext<NodeImportAndRunTestFixtureOptions>>;

/**
 * @see {@link nodeImportAndRunTestFixture}
 */
export type NodeImportAndRunTestFixtureOptions = GlobalFixtureOptions & {
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
    runnerOptions?: Record<string, unknown>;
  };
};

/**
 * This fixture initializes the dummy root directory with an index file under
 * `src` (described by `initialVirtualFiles`) and then executes it. This file
 * should import and test the package under test.
 *
 * The index file must have a path matching the pattern `src/index${extension}`;
 * it can have any of the following extensions: `.js`, `.cjs`, `.mjs`, `.jsx`,
 * `.ts`, `.cts`, `.mts`, `.tsx`.
 */
export function nodeImportAndRunTestFixture(): NodeImportAndRunTestFixture {
  return {
    name: nodeImportAndRunTestFixtureName,
    description: 'setting up node import and runtime integration test',
    setup: async (context) => {
      const targetPath = Object.keys(context.virtualFiles).find((path) =>
        /^src\/index(\.test)?\.(((c|m)?js)|ts)x?$/.test(path)
      );

      if (!targetPath) {
        throw new Error(ErrorMessage.MissingVirtualFile('src/index.${validExtension}'));
      }

      await writeFile({
        path: `${context.root}/${targetPath}`,
        data: context.virtualFiles[targetPath],
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
        context.options.runWith?.runnerOptions ?? {}
      );

      context.treeOutput = await getTreeOutput(context);
      context.testResult = await runNoRejectOnBadExit(bin, [...args, targetPath], {
        cwd: context.root,
        ...options
      });
    }
  };
}
