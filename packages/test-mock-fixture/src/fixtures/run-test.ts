import { runNoRejectOnBadExit } from '@-xun/run';

import type { RequiredDeep } from 'type-fest';
import type { GlobalFixtureOptions } from 'multiverse+test-mock-fixture:types/options.ts';
import type { NodeImportAndRunTestFixtureOptions } from 'universe+test-mock-fixture:fixtures/node-import-and-run-test.ts';
import type { FixtureContext, MockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';


export const runTestFixtureName = 'run-test';

/**
 * @see {@link runTestFixture}
 */
export type RunTestFixture = MockFixture<typeof runTestFixtureName, FixtureContext<RunTestFixtureOptions>>;

/**
 * @see {@link runTestFixture}
 */
export type RunTestFixtureOptions = GlobalFixtureOptions & RequiredDeep<Pick<NodeImportAndRunTestFixtureOptions, 'runWith'>>;

/**
 * This fixture executes a binary with the specified arguments.
 */
export function runTestFixture(): RunTestFixture {
  return {
    name: runTestFixtureName,
    description: 'setting up runtime integration test',
    setup: async (context) => {
      // TODO:
      const bin = context.options.runWith.binary;
      const args = context.options.runWith.args || [];
      const options = context.options.runWith.runnerOptions || {};

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
