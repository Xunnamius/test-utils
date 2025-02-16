import { runNoRejectOnBadExit } from '@-xun/run';

import { findIndexVirtualPath } from 'universe+test-mock-fixture:util.ts';

import type { RunOptions, RunReturnType } from '@-xun/run';
import type { Tagged } from 'type-fest';

import type {
  FixtureContext,
  MockFixture
} from 'universe+test-mock-fixture:types/fixtures.ts';

export const nodeImportAndRunTestFixtureName = 'node-import-and-run-test';

/**
 * A {@link MockFixture} instantiation of this fixture.
 *
 * @see {@link nodeImportAndRunTestFixture}
 */
export type NodeImportAndRunTestFixture = MockFixture<
  typeof nodeImportAndRunTestFixtureName,
  FixtureContext<NodeImportAndRunTestFixtureOptions>
>;

/**
 * Contains any additional options properties this fixture expects or allows.
 *
 * This type is {@link Tagged} so that it can be differentiated from `XContext`
 * types provided by other fixtures, even when they contain the same keys (or no
 * keys).
 *
 * @see {@link nodeImportAndRunTestFixture}
 */
export type NodeImportAndRunTestFixtureOptions = Tagged<
  {
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
       *
       * By default, the runner is invoked with the `NODE_NO_WARNINGS=1`,
       * `NO_COLOR=true`, and `DEBUG_COLORS=false` environment variables, among
       * other options.
       */
      runnerOptions?: RunOptions;
    };
  },
  typeof nodeImportAndRunTestFixtureName
>;

/**
 * Contains any additional context properties this fixture makes available by
 * the time its `setup` function has successfully executed.
 *
 * It is the sole responsibility of this fixture to ensure the context contains
 * the mentioned properties as described.
 *
 * This type is {@link Tagged} so that it can be differentiated from `XContext`
 * types provided by other fixtures, even when they contain the same properties
 * (or no properties).
 *
 * @see {@link nodeImportAndRunTestFixture}
 */
export type NodeImportAndRunTestFixtureContext = Tagged<
  {
    /**
     * The test result returned by `@-xun/run`.
     */
    testResult: RunReturnType;
  },
  typeof nodeImportAndRunTestFixtureName
>;

/**
 * This fixture initializes the dummy root directory with an index file under
 * `src` (described by `initialVirtualFiles`) and then executes it using node
 * (by default). It is expected that this file import and test the package under
 * test.
 *
 * The index file must have a path matching the pattern `src/index${extension}`
 * or `src/index.test${extension}`; it can have any of the following extensions:
 * `.js`, `.cjs`, `.mjs`, `.jsx`, `.ts`, `.cts`, `.mts`, `.tsx`.
 */
export function nodeImportAndRunTestFixture(): NodeImportAndRunTestFixture {
  return {
    name: nodeImportAndRunTestFixtureName,
    description: 'setting up and executing node import runtime test',
    setup: async (context) => {
      const { root, fs, virtualFiles, options, debug } = context;
      const indexPath = findIndexVirtualPath(virtualFiles);
      const indexContents = virtualFiles[indexPath] || '';

      if (!indexContents) {
        debug.warn('%O is empty in virtualFiles', indexContents);
      }

      await fs.writeFile(indexPath, indexContents);

      const {
        binary = 'node',
        args = [
          '--no-warnings',
          '--experimental-json-modules',
          '--experimental-vm-modules'
        ],
        runnerOptions
      } = options.runWith || {};

      context.testResult = await runNoRejectOnBadExit(binary, [...args, indexPath], {
        cwd: root,
        ...(runnerOptions as RunOptions),
        env: {
          NO_COLOR: 'true',
          DEBUG_COLORS: 'false',
          NODE_NO_WARNINGS: '1',
          ...runnerOptions?.env
        }
      });
    }
  };
}
