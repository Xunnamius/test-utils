import { toPath } from '@-xun/fs';

import { ErrorMessage } from 'universe+test-mock-fixture:error.ts';

import type { GenericPackage } from '@-xun/project-types';
import type { EmptyObject, Tagged } from 'type-fest';

import type {
  FixtureContext,
  MockFixture
} from 'universe+test-mock-fixture:types/fixtures.ts';

export const npmLinkPackageFixtureName = 'npm-link-package';

/**
 * A {@link MockFixture} instantiation of this fixture.
 *
 * @see {@link npmLinkPackageFixture}
 */
export type NpmLinkPackageFixture = MockFixture<
  typeof npmLinkPackageFixtureName,
  FixtureContext<NpmLinkPackageFixtureOptions>
>;

/**
 * Contains any additional options properties this fixture expects or allows.
 *
 * This type is {@link Tagged} so that it can be differentiated from `XContext`
 * types provided by other fixtures, even when they contain the same keys (or no
 * keys).
 *
 * @see {@link npmLinkPackageFixture}
 */
export type NpmLinkPackageFixtureOptions = Tagged<
  {
    /**
     * The {@link GenericPackage} instance representing the package under test.
     */
    packageUnderTest: Omit<GenericPackage, 'projectMetadata'>;
  },
  typeof npmLinkPackageFixtureName
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
 * @see {@link npmLinkPackageFixture}
 */
export type NpmLinkPackageFixtureContext = Tagged<
  EmptyObject,
  typeof npmLinkPackageFixtureName
>;

/**
 * This fixture is similar to `npmCopyPackage` except it makes a symbolic link
 * (soft link) in the dummy root directory's `node_modules` subdirectory
 * pointing to the package under test's `dist/` directory (which is typically
 * created by `dummyNpmPackage`).
 *
 * It is very similar to `npm link` but without any of the baggage.
 */
export function npmLinkPackageFixture(): NpmLinkPackageFixture {
  return {
    name: npmLinkPackageFixtureName,
    description:
      'soft-linking project repo into node_modules to emulate package installation',
    setup: async ({ fs, options }) => {
      const {
        root: packageRoot,
        json: { name: packageName }
      } = options.packageUnderTest;

      if (!packageName) {
        throw new TypeError(ErrorMessage.PackageMissingField('name'));
      }

      await fs.symlink(packageRoot, toPath('node_modules', packageName), 'junction');
    }
  };
}
