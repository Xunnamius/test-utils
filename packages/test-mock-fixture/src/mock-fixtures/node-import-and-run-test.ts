export interface NodeImportAndRunTestFixtureOptions {
  npmInstall?: string | string[];
  runInstallScripts?: boolean;
  runWith?: {
    binary?: string;
    args?: string[];
    opts?: Record<string, unknown>;
  };
}

export function nodeImportAndRunTestFixture(): MockFixture {
  return {
    name: 'node-import-and-run-test',
    description: 'setting up node import and runtime integration test',
    setup: async (context) => {
      const targetPath = Object.keys(context.fileContents).find((path) =>
        /^src\/index(\.test)?\.(((c|m)?js)|ts)x?$/.test(path)
      );

      if (!targetPath) {
        throw new Error('could not find initial contents for src/index test file');
      }

      await writeFile({
        path: `${context.root}/${targetPath}`,
        data: context.fileContents[targetPath],
        context
      });

      const bin = context.options.runWith?.binary ?? 'node';

      const args = context.options.runWith?.args ?? [
        '--no-warnings',
        '--experimental-json-modules'
      ];

      const options = Object.assign(
        { env: { DEBUG_COLORS: 'false' } },
        context.options.runWith?.opts ?? {}
      );

      context.treeOutput = await getTreeOutput(context);
      context.testResult = await run(bin, ['--no-warnings', ...args, targetPath], {
        cwd: context.root,
        ...options
      });
    }
  };
}
