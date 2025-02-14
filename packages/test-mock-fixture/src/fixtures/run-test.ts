import { runNoRejectOnBadExit } from '@-xun/run';

import type { RunOptions, RunReturnType } from '@-xun/run';
import type { RequiredDeep, SetRequired, Tagged } from 'type-fest';
import type { NodeImportAndRunTestFixtureOptions } from 'universe+test-mock-fixture:fixtures/node-import-and-run-test.ts';

import type {
  FixtureContext,
  MockFixture
} from 'universe+test-mock-fixture:types/fixtures.ts';

export const runTestFixtureName = 'run-test';

/**
 * A {@link MockFixture} instantiation of this fixture.
 *
 * @see {@link runTestFixture}
 */
export type RunTestFixture = MockFixture<
  typeof runTestFixtureName,
  FixtureContext<RunTestFixtureOptions>
>;

/**
 * Contains any additional options properties this fixture expects or allows.
 *
 * This type is {@link Tagged} so that it can be differentiated from `XContext`
 * types provided by other fixtures, even when they contain the same keys (or no
 * keys).
 *
 * @see {@link runTestFixture}
 */
export type RunTestFixtureOptions = Tagged<
  {
    runWith: SetRequired<
      NonNullable<NodeImportAndRunTestFixtureOptions['runWith']>,
      'binary'
    >;
  },
  typeof runTestFixtureName
>;

/**
 * Contains any additional context properties this fixture makes available by
 * the time its `setup` function has successfully executed.
 *
 * It is the sole responsibility of this fixture to ensure the context contains
 * the mentioned properties as described.
 *
 * This type is {@link Tagged} so that it can be differentiated from `XContext`
 * types provided by other fixtures, even when they contain the same properties
 * (or no properties).
 *
 * @see {@link runTestFixture}
 */
export type RunTestFixtureContext = Tagged<
  {
    /**
     * The test result returned by `@-xun/run`.
     */
    testResult: RunReturnType;
  },
  typeof runTestFixtureName
>;

/**
 * This fixture executes a binary with the specified arguments.
 */
export function runTestFixture(): RunTestFixture {
  return {
    name: runTestFixtureName,
    description: 'executing runtime test',
    setup: async (context) => {
      const { root, options } = context;
      const { binary, args = [], runnerOptions = {} } = options.runWith;

      context.testResult = await runNoRejectOnBadExit(binary, [...args], {
        cwd: root,
        ...(runnerOptions as RunOptions),
        env: {
          DEBUG_COLORS: 'false',
          ...runnerOptions.env
        }
      });
    }
  };
}
