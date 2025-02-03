import type { NodeImportAndRunTestFixtureOptions } from 'universe+test-mock-fixture:fixtures/node-import-and-run-test.ts';
import type { MockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';

const name = 'run-test';

/**
 * @see {@link runTestFixture}
 */
export type RunTestFixture = MockFixture<typeof name>;

/**
 * @see {@link runTestFixture}
 */
export type RunTestFixtureOptions = NodeImportAndRunTestFixtureOptions['runWith'];

/**
 * This fixture executes a binary with the specified arguments.
 */
export function runTestFixture(): RunTestFixture {
  return {
    name,
    description: 'setting up runtime integration test',
    setup: async (context) => {
      // TODO:
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
