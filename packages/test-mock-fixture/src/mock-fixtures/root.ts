export function rootFixture(): MockFixture {
  return {
    name: 'root', // ? If first isn't named root, root used automatically
    description: (context) =>
      `creating a unique root directory${
        context.options.performCleanup
          ? ' (will be deleted after all tests complete)'
          : ''
      }`,
    setup: async (context) => {
      // TODO: add the tmpdir suffix to all related debug outputs
      context.root = uniqueFilename(tmpdir(), context.testIdentifier);

      await mkdir({ paths: [toAbsolutePath(context.root, 'src')], context });
    },
    teardown: async (context) => {
      if (context.options.performCleanup) {
        await remove({ paths: [context.root], context });
      }
    }
  };
}
