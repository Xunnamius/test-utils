import { getTreeOutput } from 'universe+test-mock-fixture:util.ts';

import type { EmptyObject, Tagged } from 'type-fest';

import type {
  FixtureContext,
  MockFixture
} from 'universe+test-mock-fixture:types/fixtures.ts';

export const describeRootFixtureName = 'describe-root';

/**
 * A {@link MockFixture} instantiation of this fixture.
 *
 * @see {@link describeRootFixture}
 */
export type DescribeRootFixture = MockFixture<
  typeof describeRootFixtureName,
  FixtureContext<DescribeRootFixtureOptions>
>;

/**
 * Contains any additional options properties this fixture expects or allows.
 *
 * This type is {@link Tagged} so that it can be differentiated from `XContext`
 * types provided by other fixtures, even when they contain the same keys (or no
 * keys).
 *
 * @see {@link describeRootFixture}
 */
export type DescribeRootFixtureOptions = Tagged<
  EmptyObject,
  typeof describeRootFixtureName
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
 * @see {@link describeRootFixture}
 */
export type DescribeRootFixtureContext = Tagged<
  EmptyObject,
  typeof describeRootFixtureName
>;

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
    setup: async ({ root, options, virtualFiles, debug }) => {
      debug('test identifier: %O', options.identifier);
      debug('root path: %O', root);
      debug('virtual files: %O', virtualFiles);
      debug(`root structure:\n\n${await getTreeOutput(root)}\n`);
    }
    // ! INVARIANT: this fixture should never have a teardown function defined
    // ! since there are edge cases where it might not be executed.
  };
}
