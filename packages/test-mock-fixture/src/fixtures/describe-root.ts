import { getTreeOutput } from 'universe+test-mock-fixture:util.ts';

import type { FixtureContext, MockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';
import type { GlobalFixtureOptions } from 'universe+test-mock-fixture:types/options.ts';

export const describeRootFixtureName = 'describe-root';

/**
 * @see {@link describeRootFixture}
 */
export type DescribeRootFixture = MockFixture<typeof describeRootFixtureName, FixtureContext<DescribeRootFixtureOptions>>;

/**
 * @see {@link describeRootFixture}
 */
export type DescribeRootFixtureOptions = GlobalFixtureOptions;

/**
 * This fixture outputs debug information describing the runtime environment.
 *
 * This fixture is treated specially in two ways:
 *
 * 1. If a fixture with the name `'describe-root'` is not included in the
 *    `fixtures` array parameter of `withMockedFixtures`, _this fixture will be
 *    automatically appended_ to said array.
 *
 * 2. _This fixture will always run_, even when an error occurs in an earlier
 *    fixture.
 */
export function describeRootFixture(): DescribeRootFixture {
  return {
    name: describeRootFixtureName,
    description: 'outputting debug information about environment',
    setup: async (context) => {
      context.debug('test identifier: %O', context.testIdentifier);
      context.debug('root: %O', context.root);
      context.debug(context.treeOutput ?? (await getTreeOutput(context)));
      context.debug('per-file contents: %O', context.virtualFiles);
    }
    // ! INVARIANT: this fixture should never have a teardown function defined
    // ! since there are edge cases where it might not be executed.
  };
}
