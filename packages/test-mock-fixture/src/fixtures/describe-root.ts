import { getTreeOutput } from 'multiverse+test-mock-fixture:util.ts';

import type { EmptyObject } from 'type-fest';
import type { MockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';

const name = 'describe-root';

/**
 * @see {@link describeRootFixture}
 */
export type DescribeRootFixture = MockFixture<typeof name>;

/**
 * @see {@link describeRootFixture}
 */
export type DescribeRootFixtureOptions = EmptyObject;

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
    name,
    description: 'outputting debug information about environment',
    setup: async (context) => {
      context.debug('test identifier: %O', context.testIdentifier);
      context.debug('root: %O', context.root);
      context.debug(context.treeOutput ?? (await getTreeOutput(context)));
      context.debug('per-file contents: %O', context.fileContents);
    }
  };
}
