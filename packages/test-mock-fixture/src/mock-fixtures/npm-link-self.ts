export function npmLinkSelfFixture(): MockFixture {
  return {
    name: 'npm-link-self',
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
