import type { GlobalFixtureOptions } from 'multiverse+test-mock-fixture:types/options.ts';
import type { FixtureContext, MockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';

export const npmLinkSelfFixtureName = 'npm-link-self';

/**
 * @see {@link npmLinkSelfFixture}
 */
export type NpmLinkSelfFixture = MockFixture<typeof npmLinkSelfFixtureName, FixtureContext<NpmLinkSelfFixtureOptions>>;

/**
 * @see {@link npmLinkSelfFixture}
 */
export type NpmLinkSelfFixtureOptions = GlobalFixtureOptions;

/**
 * This fixture is similar to `npmCopySelf` except it makes a symbolic link
 * (soft link) in the dummy root directory's `node_modules` subdirectory
 * pointing to the package under test's `dist/` directory (which is typically
 * created by `dummyNpmPackage`).
 *
 * It is very similar to `npm link` but without any of the baggage.
 */
export function npmLinkSelfFixture(): NpmLinkSelfFixture {
  return {
    name: npmLinkSelfFixtureName,
    description:
      'soft-linking project repo into node_modules to emulate package installation',
    setup: async (context) => {
      await symlink({
        actualPath: toAbsolutePath(__dirname, '..'),
        linkPath: toAbsolutePath(context.root, 'node_modules', rootPackageJsonName),
        isDir: true,
        context
      });
    }
  };
}
