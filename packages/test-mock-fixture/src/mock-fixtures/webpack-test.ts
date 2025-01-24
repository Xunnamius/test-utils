export interface WebpackTestFixtureOptions {
  webpackVersion?: string;
}

export function webpackTestFixture(): MockFixture {
  return {
    name: 'webpack-test',
    description: 'setting up webpack jest integration test',
    setup: async (context) => {
      if (typeof context.options.webpackVersion !== 'string') {
        throw new TypeError(
          'invalid or missing options.webpackVersion, expected string'
        );
      }

      const indexPath = Object.keys(context.fileContents).find((path) => {
        return /^src\/index\.(((c|m)?js)|ts)x?$/.test(path);
      });

      if (!indexPath) {
        throw new Error('could not find initial contents for src/index file');
      }

      if (!context.fileContents[webpackConfigProjectBase]) {
        throw new Error(
          `could not find initial contents for ${webpackConfigProjectBase} file`
        );
      }

      await Promise.all([
        writeFile({
          path: `${context.root}/${indexPath}`,
          data: context.fileContents[indexPath],
          context
        }),
        writeFile({
          path: `${context.root}/${webpackConfigProjectBase}`,
          data: context.fileContents[webpackConfigProjectBase],
          context
        })
      ]);

      context.treeOutput = await getTreeOutput(context);

      await run(
        'npm',
        [
          'install',
          '--no-save',
          `webpack@${context.options.webpackVersion}`,
          'webpack-cli'
        ],
        {
          cwd: context.root,
          reject: true
        }
      );

      await run('npx', ['webpack'], { cwd: context.root, reject: true });

      context.testResult = await run('node', [
        '--no-warnings',
        `${context.root}/dist/index.js`
      ]);
    }
  };
}
