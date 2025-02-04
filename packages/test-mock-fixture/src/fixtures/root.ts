import type { GenericFixtureContext, MockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';

export const rootFixtureName = 'root';

/**
 * @see {@link rootFixture}
 */
export type RootFixture = MockFixture<typeof rootFixtureName, GenericFixtureContext>;

/**
 * This fixture creates the dummy root directory. It is perhaps the most
 * important fixture.
 *
 * If the first fixture in the array of fixtures passed to the `fixtures`
 * parameter of `withMockedFixtures` is not this fixture, then this fixture is
 * prepended to `fixtures`.
 *
 * If this fixture appears anywhere else in `fixtures` other than as the first
 * element, it will be ignored entirely.
 */
export function rootFixture(): RootFixture {
  return {
    name: rootFixtureName,
    description: (context) =>
      `creating a unique root directory${
        context.options.performCleanup
          ? ' (will be deleted after all tests complete)'
          : ''
      }`,
    setup: async (context) => {
      // TODO: add the tmpdir suffix to all related debug outputs
      context.root = uniqueFilename(tmpdir(), context.testIdentifier);

      await mkdir({ paths: [toAbsolutePath(context.root, 'src')], context });
    },
    teardown: async (context) => {
      if (context.options.performCleanup) {
        await remove({ paths: [context.root], context });
      }
    }
  };
}
