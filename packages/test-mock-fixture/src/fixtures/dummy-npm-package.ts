import type { EmptyObject } from 'type-fest';
import type { MockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';

const name = 'dummy-npm-package';

/**
 * @see {@link dummyNpmPackageFixture}
 */
export type DummyNpmPackageFixture = MockFixture<typeof name>;

/**
 * @see {@link dummyNpmPackageFixture}
 */
export type DummyNpmPackageFixtureOptions = EmptyObject;

/**
 * This fixture initializes the dummy root directory as a NPM package with a
 * package.json file (optionally described by `initialFileContents`) and
 * node_modules subdirectory.
 *
 * If the package under test is namespaced (e.g. "@-xun/symbiote"), an empty
 * directory will be created using the namespace as its name (e.g.
 * `node_modules/@-xun`).
 */
export function dummyNpmPackageFixture(): DummyNpmPackageFixture {
  return {
    name,
    description: 'creating package.json file and node_modules subdirectory',
    setup: async (context) => {
      context.fileContents['package.json'] ||= '{"name":"dummy-pkg"}';

      await Promise.all([
        mkdir({ paths: [toAbsolutePath(context.root, 'node_modules')], context }),
        writeFile({
          path: toAbsolutePath(context.root, 'package.json'),
          data: context.fileContents['package.json'],
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
