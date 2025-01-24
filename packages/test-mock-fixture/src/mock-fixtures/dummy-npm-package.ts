export function dummyNpmPackageFixture(): MockFixture {
  return {
    name: 'dummy-npm-package',
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
