import { toPath, toRelativePath } from '@-xun/fs';
import { run } from '@-xun/run';

import type { GenericPackage } from '@-xun/project-types';
import type { EmptyObject, Tagged } from 'type-fest';

import type {
  FixtureContext,
  MockFixture
} from 'universe+test-mock-fixture:types/fixtures.ts';

export const dummyNpmPackageFixtureName = 'dummy-npm-package';

/**
 * A {@link MockFixture} instantiation of this fixture.
 *
 * @see {@link dummyNpmPackageFixture}
 */
export type DummyNpmPackageFixture = MockFixture<
  typeof dummyNpmPackageFixtureName,
  FixtureContext<DummyNpmPackageFixtureOptions>
>;

/**
 * Contains any additional options properties this fixture expects or allows.
 *
 * This type is {@link Tagged} so that it can be differentiated from `XContext`
 * types provided by other fixtures, even when they contain the same keys (or no
 * keys).
 *
 * @see {@link dummyNpmPackageFixture}
 */
export type DummyNpmPackageFixtureOptions = Tagged<
  {
    /**
     * The {@link GenericPackage} instance representing the package under test.
     */
    packageUnderTest?: Omit<GenericPackage, 'projectMetadata'>;
    /**
     * Additional packages to install.
     *
     * Syntax: `package-name@semver-version`
     *
     * @default []
     */
    additionalPackagesToInstall?: string | string[];
    /**
     * Which NPM install mode to use.
     *
     * @default 'install'
     */
    installCommand?: 'ci' | 'install';
    /**
     * If `false`, `--ignore-scripts` will be passed to NPM during installation.
     *
     * @default true
     */
    runInstallScripts?: boolean;
  },
  typeof dummyNpmPackageFixtureName
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
 * @see {@link dummyNpmPackageFixture}
 */
export type DummyNpmPackageFixtureContext = Tagged<
  EmptyObject,
  typeof dummyNpmPackageFixtureName
>;

/**
 * This fixture initializes the dummy root directory as a NPM package with a
 * `package.json` file (optionally described by `initialVirtualFiles`) and
 * node_modules subdirectory. If said `package.json` file contains any
 * dependencies, they will be installed courtesy of `npm install`. Additional
 * packages can also be installed via
 * {@link DummyNpmPackageFixtureOptions.additionalPackagesToInstall}.
 *
 * All packages are always installed with `--force`.
 *
 * If a `packageUnderTest` is provided, and it is namespaced (e.g.
 * "@-xun/symbiote"), an empty directory will be created using the namespace as
 * its name (e.g. `node_modules/@-xun`).
 */
export function dummyNpmPackageFixture(): DummyNpmPackageFixture {
  return {
    name: dummyNpmPackageFixtureName,
    description: 'creating package.json file and node_modules subdirectory',
    setup: async ({ root, fs, virtualFiles, options, debug }) => {
      const packageJsonPath = toRelativePath('package.json');

      virtualFiles[packageJsonPath] ||= JSON.stringify({
        name: 'dummy-pkg'
      });

      await Promise.all([
        fs.mkdir('node_modules', { recursive: true }),
        fs.writeFile('package.json', virtualFiles[packageJsonPath])
      ]);

      const { name: nameUnderTest } = options.packageUnderTest?.json || {};

      if (!nameUnderTest) {
        debug.warn('packageUnderTest.json.name is undefined/empty');
      }

      const npmInstallArgs: string[] = [options.installCommand || 'install', '--force'];

      if (options.runInstallScripts === false) {
        npmInstallArgs.push('--ignore-scripts');
      }

      if (options.additionalPackagesToInstall) {
        npmInstallArgs.push(...[options.additionalPackagesToInstall].flat());
      }

      debug('npmInstallArgs: %O', npmInstallArgs);

      await run('npm', npmInstallArgs, {
        cwd: root,
        env: { NODE_ENV: 'production', CI: 'true' }
      });

      if (nameUnderTest?.includes('/')) {
        await fs.mkdir(toPath('node_modules', nameUnderTest.split('/')[0]!), {
          recursive: true
        });
      }
    }
  };
}
