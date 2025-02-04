import type { GlobalFixtureOptions } from 'multiverse+test-mock-fixture:types/options.ts';
import type { FixtureContext, MockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';

export const dummyNpmPackageFixtureName = 'dummy-npm-package';

/**
 * @see {@link dummyNpmPackageFixture}
 */
export type DummyNpmPackageFixture = MockFixture<typeof dummyNpmPackageFixtureName, FixtureContext<DummyNpmPackageFixtureOptions>>;

/**
 * @see {@link dummyNpmPackageFixture}
 */
export type DummyNpmPackageFixtureOptions = GlobalFixtureOptions;

/**
 * This fixture initializes the dummy root directory as a NPM package with a
 * package.json file (optionally described by `initialVirtualFiles`) and
 * node_modules subdirectory.
 *
 * If the package under test is namespaced (e.g. "@-xun/symbiote"), an empty
 * directory will be created using the namespace as its name (e.g.
 * `node_modules/@-xun`).
 */
export function dummyNpmPackageFixture(): DummyNpmPackageFixture {
  return {
    name: dummyNpmPackageFixtureName,
    description: 'creating package.json file and node_modules subdirectory',
    setup: async (context) => {
      context.virtualFiles['package.json'] ||= '{"name":"dummy-pkg"}';

      await Promise.all([
        mkdir({ paths: [toAbsolutePath(context.root, 'node_modules')], context }),
        writeFile({
          path: toAbsolutePath(context.root, 'package.json'),
          data: context.virtualFiles['package.json'],
          context
        })
      ]);

      if (rootPackageJsonName.includes('/')) {
        await mkdir({
          paths: [
            toAbsolutePath(
              context.root,
              'node_modules',
              rootPackageJsonName.split('/')[0]
            )
          ],
          context
        });
      }
    }
  };
}
