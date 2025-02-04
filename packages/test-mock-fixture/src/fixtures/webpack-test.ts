import { ErrorMessage } from 'universe+test-mock-fixture:error.ts';

import type { GlobalFixtureOptions } from 'multiverse+test-mock-fixture:types/options.ts';
import type { FixtureContext, MockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';

export const webpackTestFixtureName = 'webpack-test';

/**
 * @see {@link webpackTestFixture}
 */
export type WebpackTestFixture = MockFixture<typeof webpackTestFixtureName, FixtureContext<WebpackTestFixtureOptions>>;

/**
 * @see {@link webpackTestFixture}
 */
export type WebpackTestFixtureOptions = GlobalFixtureOptions & {
  /**
   * The semver Webpack version to pull from the NPM registry before executing
   * any tests.
   */
  webpackVersion: string;
};

/**
 * This fixture initializes the dummy root directory with an index file under
 * `src` (described by `initialVirtualFiles`) and then executes Webpack. The
 * index file should import and test the package under test or otherwise trigger the desired Webpack functionality.
 *
 * The index file must have a path matching the pattern `src/index${extension}`;
 * it can have any of the following extensions: `.js`, `.cjs`, `.mjs`, `.jsx`,
 * `.ts`, `.cts`, `.mts`, `.tsx`.
 */
export function webpackTestFixture(): WebpackTestFixture {
  return {
    name: webpackTestFixtureName,
    description: 'setting up webpack jest integration test',
    setup: async (context) => {
      if (typeof context.options.webpackVersion !== 'string') {
        throw new TypeError(
          'invalid or missing options.webpackVersion, expected string'
        );
      }

      const indexPath = Object.keys(context.virtualFiles).find((path) => {
        return /^src\/index\.(((c|m)?js)|ts)x?$/.test(path);
      });

      if (!indexPath) {throw new Error(
          ErrorMessage.MissingVirtualFile('src/index.${validExtension}')
        );
      }

      if (!context.virtualFiles[webpackConfigProjectBase]) {
        throw new Error(
          ErrorMessage.MissingVirtualFile(webpackConfigProjectBase)
        );
      }

      await Promise.all([
        writeFile({
          path: `${context.root}/${indexPath}`,
          data: context.virtualFiles[indexPath],
          context
        }),
        writeFile({
          path: `${context.root}/${webpackConfigProjectBase}`,
          data: context.virtualFiles[webpackConfigProjectBase],
          context
        })
      ]);

      context.treeOutput = await getTreeOutput(context);

      await run(
        'npm',
        [
          'install',
          '--no-save',
          `webpack@${context.options.webpackVersion}`,
          'webpack-cli'
        ],
        {
          cwd: context.root,
          reject: true
        }
      );

      await run('npx', ['webpack'], { cwd: context.root, reject: true });

      context.testResult = await run('node', [
        '--no-warnings',
        `${context.root}/dist/index.js`
      ]);
    }
  };
}
