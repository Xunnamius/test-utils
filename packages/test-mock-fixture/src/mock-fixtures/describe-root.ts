export function describeRootFixture(): MockFixture {
  return {
    name: 'describe-root',
    description: 'outputting debug information about environment',
    setup: async (context) => {
      context.debug('test identifier: %O', context.testIdentifier);
      context.debug('root: %O', context.root);
      context.debug(context.treeOutput ?? (await getTreeOutput(context)));
      context.debug('per-file contents: %O', context.fileContents);
    }
  };
}
