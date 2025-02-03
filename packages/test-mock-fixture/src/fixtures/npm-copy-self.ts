import type { EmptyObject } from 'type-fest';
import type { MockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';

const name = 'npm-copy-self';

/**
 * @see {@link npmCopySelfFixture}
 */
export type NpmCopySelfFixture = MockFixture<typeof name>;

/**
 * @see {@link npmCopySelfFixture}
 */
export type NpmCopySelfFixtureOptions = EmptyObject;

/**
 * This fixture is similar to `npmLinkSelf` except it copies all of the
 * distributables, identified by the package under test's `package.json` `files`
 * field, into the dummy `node_modules` directory created by a fixture like
 * `dummyNpmPackage`.
 */
export function npmCopySelfFixture(): NpmCopySelfFixture {
  return {
    name,
    description:
      'copying package.json `files` into node_modules to emulate package installation',
    setup: async (context) => {
      const root = toAbsolutePath(__dirname, '..');

      const { files: patterns } = (await import('rootverse:package.json')).default;

      const sourcePaths = patterns.flatMap((p: string) =>
        glob.sync(p, { cwd: root, root })
      );
      const destinationPath = toAbsolutePath(
        context.root,
        'node_modules',
        rootPackageJsonName
      );
      const destinationPackageJson = toAbsolutePath(destinationPath, 'package.json');

      await mkdir({ paths: [destinationPath], context });
      await copy({ sourcePaths, destinationPath, context });

      if (!destinationPackageJson) {
        throw new Error(`expected "${destinationPackageJson}" to exist`);
      }

      // TODO: only optionally remove peer dependencies from the install loop
      // TODO: (and by default they should NOT be removed, unlike below).
      // TODO: Same deal with dev dependencies (except removed by default).
      const {
        peerDependencies: _,
        devDependencies: __,
        ...dummyPackageJson
      } = JSON.parse(await readFile({ path: destinationPackageJson, context }));

      const installTargets = {
        ...dummyPackageJson.dependencies,
        ...Object.fromEntries(
          [context.options.npmInstall]
            .flat()
            .filter((r): r is string => Boolean(r))
            .map((packageString) => {
              const isScoped = packageString.startsWith('@');
              const packageSplit = (
                isScoped ? packageString.slice(1) : packageString
              ).split('@');

              const package_ = isScoped
                ? [`@${packageSplit[0]}`, packageSplit[1]]
                : packageSplit;

              return [package_[0], package_[1] || 'latest'];
            })
        )
      };

      await writeFile({
        path: destinationPackageJson,
        data: JSON.stringify(
          { ...dummyPackageJson, dependencies: installTargets },
          undefined,
          2
        ),
        context
      });

      await run(
        'npm',
        [
          'install',
          '--no-save',
          ...(context.options.runInstallScripts ? [] : ['--ignore-scripts']),
          '--omit=dev',
          '--force'
        ],
        {
          cwd: destinationPath,
          reject: true,
          env: { NODE_ENV: 'production', CI: 'true' }
        }
      );

      await rename({
        oldPath: `${context.root}/node_modules`,
        newPath: `${context.root}/node_modules_old`,
        context
      });

      await rename({
        oldPath: `${context.root}/node_modules_old/${rootPackageJsonName}/node_modules`,
        newPath: `${context.root}/node_modules`,
        context
      });

      await rename({
        oldPath: `${context.root}/node_modules_old/${rootPackageJsonName}`,
        newPath: `${context.root}/node_modules/${rootPackageJsonName}`,
        context
      });

      await remove({ paths: [`${context.root}/node_modules_old`], context });
    }
  };
}
