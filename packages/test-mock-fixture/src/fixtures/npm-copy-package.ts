import { basename } from 'node:path';

import { toPath } from '@-xun/fs';
import { run } from '@-xun/run';
import { glob } from 'glob';

import { ErrorMessage } from 'universe+test-mock-fixture:error.ts';

import type { GenericPackage } from '@-xun/project-types';
import type { EmptyObject, Tagged } from 'type-fest';
import type { NodeImportAndRunTestFixtureOptions } from 'universe+test-mock-fixture:fixtures/node-import-and-run-test.ts';

import type {
  FixtureContext,
  MockFixture
} from 'universe+test-mock-fixture:types/fixtures.ts';

export const npmCopyPackageFixtureName = 'npm-copy-package';

/**
 * A {@link MockFixture} instantiation of this fixture.
 *
 * @see {@link npmCopyPackageFixture}
 */
export type NpmCopyPackageFixture = MockFixture<
  typeof npmCopyPackageFixtureName,
  FixtureContext<NpmCopyPackageFixtureOptions>
>;

/**
 * Contains any additional options properties this fixture expects or allows.
 *
 * This type is {@link Tagged} so that it can be differentiated from `XContext`
 * types provided by other fixtures, even when they contain the same keys (or no
 * keys).
 *
 * @see {@link npmCopyPackageFixture}
 */
export type NpmCopyPackageFixtureOptions = Tagged<
  {
    /**
     * The {@link GenericPackage} instance representing the package under test.
     */
    packageUnderTest: Omit<GenericPackage, 'projectMetadata'>;
    /**
     * When installing dependencies from `packageUnderTest`'s `package.json`
     * file, this mapping determines which kinds of packages will be installed
     * (`false` or undefined) and which will be ignored (`true`).
     *
     * By default, `devDependencies` and `peerDependenciesMeta` are ignored.
     */
    ignorePackageDependencies?: {
      /**
       * If `true`, this field will be omitted when installing
       * `packageUnderTest`'s dependencies.
       *
       * @default false
       */
      dependencies?: boolean;
      /**
       * If `true`, this field will be omitted when installing
       * `packageUnderTest`'s dependencies.
       *
       * @default true
       */
      devDependencies?: boolean;
      /**
       * If `true`, this field will be omitted when installing
       * `packageUnderTest`'s dependencies.
       *
       * @default false
       */
      optionalDependencies?: boolean;
      /**
       * If `true`, this field will be omitted when installing
       * `packageUnderTest`'s dependencies.
       *
       * @default false
       */
      peerDependencies?: boolean;
      /**
       * If `true`, this field will be omitted when installing
       * `packageUnderTest`'s dependencies.
       *
       * @default true
       */
      peerDependenciesMeta?: boolean;
      /**
       * If `true`, this field will be omitted when installing
       * `packageUnderTest`'s dependencies.
       *
       * @default false
       */
      bundledDependencies?: boolean;
    };
  } & Pick<NodeImportAndRunTestFixtureOptions, 'npmInstall' | 'runInstallScripts'>,
  typeof npmCopyPackageFixtureName
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
 * @see {@link npmCopyPackageFixture}
 */
export type NpmCopyPackageFixtureContext = Tagged<
  EmptyObject,
  typeof npmCopyPackageFixtureName
>;

/**
 * This fixture is similar to `npmLinkPackage` except it copies all of the
 * distributables, identified by the package under test's `package.json` `files`
 * field, into the dummy `node_modules` directory created by a fixture like
 * `dummyNpmPackage`.
 *
 * This fixture should be preferred over `npmLinkPackage` **only if the package
 * under test does _not_ have peer dependencies.** If said package _does_ have
 * peer dependencies, then using this fixture could manifest something akin to
 * the dual package hazard.
 */
export function npmCopyPackageFixture(): NpmCopyPackageFixture {
  return {
    name: npmCopyPackageFixtureName,
    description:
      'copying package.json `files` into node_modules to emulate package installation',
    setup: async ({ root, options, fs, debug }) => {
      const { root: packageRoot, json: packageJson } = options.packageUnderTest;
      const { name: packageName, files: packageFiles } = packageJson;

      if (!packageName) {
        throw new TypeError(ErrorMessage.PackageMissingField('name'));
      }

      const sourcePaths = (
        await Promise.all(
          (packageFiles || []).map((path) =>
            glob(path, { cwd: root, root, absolute: true })
          )
        )
      ).flat();

      if (!sourcePaths.length) {
        throw new TypeError(ErrorMessage.PackageMissingField('files'));
      }

      const destinationPath = toPath(root, 'node_modules', packageName);
      const destinationPackageJsonPath = toPath(destinationPath, 'package.json');

      debug('packageRoot: %O', packageRoot);
      debug('packageName: %O', packageName);
      debug('packageFiles: %O', packageFiles);
      debug('sourcePaths: %O', sourcePaths);
      debug('destinationPath: %O', destinationPath);
      debug('destinationPackageJsonPath: %O', destinationPackageJsonPath);

      await fs.mkdir(destinationPath, { recursive: true });
      await Promise.all(
        sourcePaths.map((sourcePath) => {
          return fs.cp(sourcePath, toPath(destinationPath, basename(sourcePath)), {
            force: true,
            recursive: true
          });
        })
      );

      const ignoredPackageJsonFields = Object.fromEntries(
        Object.entries(options.ignorePackageDependencies || {})
          .map(([field, isIgnored]) => (isIgnored ? [field, undefined] : undefined))
          .filter((entry): entry is NonNullable<typeof entry> => !!entry)
      );

      const installTargets = {
        ...(options.ignorePackageDependencies?.dependencies
          ? {}
          : packageJson.dependencies),
        ...Object.fromEntries(
          [options.npmInstall]
            .flat()
            .filter((target): target is string => !!target)
            .map((target) => {
              const isTargetScoped = target.startsWith('@');
              const targetSplit = (isTargetScoped ? target.slice(1) : target).split(
                '@',
                2
              );

              const nameAndVersion = (
                isTargetScoped ? [`@${targetSplit[0]}`, targetSplit[1]] : targetSplit
              ) as [name: string, version: string];

              return [nameAndVersion[0], nameAndVersion[1] || 'latest'];
            })
        )
      };

      debug('installTargets: %O', installTargets);

      await fs.writeFile(
        destinationPackageJsonPath,
        JSON.stringify(
          { ...packageJson, ...ignoredPackageJsonFields, dependencies: installTargets },
          undefined,
          2
        )
      );

      await run(
        'npm',
        [
          'install',
          '--no-save',
          ...(options.runInstallScripts ? [] : ['--ignore-scripts']),
          '--force'
        ],
        {
          cwd: destinationPath,
          reject: true,
          env: { NODE_ENV: 'production', CI: 'true' }
        }
      );

      await fs.rename('node_modules', 'node_modules_old');

      await fs.rename(
        toPath('node_modules_old', packageName, 'node_modules'),
        'node_modules'
      );

      await fs.rename(
        toPath('node_modules_old', packageName),
        toPath('node_modules', packageName)
      );

      await fs.rm('node_modules_old', {
        force: true,
        recursive: true,
        maxRetries: 10,
        retryDelay: 250
      });
    }
  };
}
