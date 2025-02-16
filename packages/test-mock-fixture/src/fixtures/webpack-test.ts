import { toRelativePath } from '@-xun/fs';
import { run, runNoRejectOnBadExit } from '@-xun/run';

import { findIndexVirtualPath } from 'universe+test-mock-fixture:util.ts';

import type { RelativePath } from '@-xun/fs';
import type { RunReturnType } from '@-xun/run';
import type { Tagged } from 'type-fest';

import type {
  FixtureContext,
  MockFixture
} from 'universe+test-mock-fixture:types/fixtures.ts';

export const webpackTestFixtureName = 'webpack-test';

/**
 * A {@link MockFixture} instantiation of this fixture.
 *
 * @see {@link webpackTestFixture}
 */
export type WebpackTestFixture = MockFixture<
  typeof webpackTestFixtureName,
  FixtureContext<WebpackTestFixtureOptions>
>;

/**
 * Contains any additional options properties this fixture expects or allows.
 *
 * This type is {@link Tagged} so that it can be differentiated from `XContext`
 * types provided by other fixtures, even when they contain the same keys (or no
 * keys).
 *
 * @see {@link webpackTestFixture}
 */
export type WebpackTestFixtureOptions = Tagged<
  {
    /**
     * The semver Webpack version to pull from the NPM registry before executing
     * any tests.
     */
    webpackVersion: string;
    /**
     * The file output by webpack that will be executed by node at the end of
     * the test, generating a {@link WebpackTestFixtureContext.testResult}.
     */
    fileUnderTest: string;
  },
  // TODO: & Pick<NodeImportAndRunTestFixtureOptions, 'runWith'>,
  typeof webpackTestFixtureName
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
 * @see {@link webpackTestFixture}
 */
export type WebpackTestFixtureContext = Tagged<
  {
    /**
     * The test result returned by `@-xun/run`.
     */
    testResult: RunReturnType;
  },
  typeof webpackTestFixtureName
>;

/**
 * This fixture initializes the dummy root directory with an index file under
 * `src` and an optional `webpack.config.mjs` file (both described by
 * `initialVirtualFiles`), executes Webpack, and then attempts to run the
 * resultant file (described by `fileUnderTest`) using Node.js.
 *
 * Node.js is invoked with the `NODE_NO_WARNINGS=1`, `NO_COLOR=true`, and
 * `DEBUG_COLORS=false` environment variables.
 *
 * The index file must have a path matching the pattern `src/index${extension}`;
 * it can have any of the following extensions: `.js`, `.cjs`, `.mjs`, `.jsx`,
 * `.ts`, `.cts`, `.mts`, `.tsx`.
 */
export function webpackTestFixture(): WebpackTestFixture {
  return {
    name: webpackTestFixtureName,
    description: 'setting up and executing webpack runtime test',
    setup: async (context) => {
      const { root, fs, virtualFiles, options, debug } = context;
      const indexPath = findIndexVirtualPath(virtualFiles);
      const webpackConfigPath = toRelativePath('webpack.config.mjs');
      const webpackConfigContents =
        virtualFiles['webpack.config.mjs' as RelativePath] || '';
      const indexContents = virtualFiles[indexPath] || '';

      if (!webpackConfigContents) {
        debug.warn('%O is empty in virtualFiles', webpackConfigContents);
      }

      if (!indexContents) {
        debug.warn('%O is empty in virtualFiles', indexContents);
      }

      await Promise.all([
        fs.writeFile(indexPath, indexContents),
        fs.writeFile(webpackConfigPath, webpackConfigContents)
      ]);

      await run(
        'npm',
        ['install', '--no-save', `webpack@${options.webpackVersion}`, 'webpack-cli'],
        { cwd: root }
      );

      await run('npx', ['webpack'], { cwd: root });

      context.testResult = await runNoRejectOnBadExit(
        'node',
        ['--no-warnings', options.fileUnderTest],
        {
          cwd: root,
          env: { NO_COLOR: 'true', DEBUG_COLORS: 'false', NODE_NO_WARNINGS: '1' }
        }
      );
    }
  };
}
