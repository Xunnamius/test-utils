export function nodeRunTestFixture(): MockFixture {
  return {
    name: 'node-run-test',
    description: 'setting up runtime integration test',
    setup: async (context) => {
      const bin = context.options.runWith?.binary;
      const args = context.options.runWith?.args || [];
      const options = context.options.runWith?.opts || {};

      context.treeOutput = await getTreeOutput(context);

      if (!bin) {
        throw new Error('missing `runWith` binary');
      }

      const { exitCode, stdout, stderr } = await runNoRejectOnBadExit(bin, args, {
        cwd: context.root,
        ...options
      });

      context.testResult = {
        code: exitCode ?? -1,
        stdout,
        stderr
      };
    }
  };
}
