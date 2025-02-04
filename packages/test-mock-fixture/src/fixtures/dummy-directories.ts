import type { RelativePath } from '@-xun/fs';
import type { EmptyObject, Tagged } from 'type-fest';

import type {
  FixtureContext,
  MockFixture
} from 'universe+test-mock-fixture:types/fixtures.ts';

export const dummyDirectoriesFixtureName = 'dummy-directories';

/**
 * A {@link MockFixture} instantiation of this fixture.
 *
 * @see {@link dummyDirectoriesFixture}
 */
export type DummyDirectoriesFixture = MockFixture<
  typeof dummyDirectoriesFixtureName,
  FixtureContext<DummyDirectoriesFixtureOptions>
>;

/**
 * Contains any additional options properties this fixture expects or allows.
 *
 * This type is {@link Tagged} so that it can be differentiated from `XContext`
 * types provided by other fixtures, even when they contain the same keys (or no
 * keys).
 *
 * @see {@link dummyDirectoriesFixture}
 */
export type DummyDirectoriesFixtureOptions = Tagged<
  {
    /**
     * An array of {@link RelativePath}s describing directories to be written out
     * to the filesystem by {@link dummyDirectoriesFixture}.
     */
    directoryPaths: RelativePath[];
  },
  typeof dummyDirectoriesFixtureName
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
 * @see {@link dummyDirectoriesFixture}
 */
export type DummyDirectoriesFixtureContext = Tagged<
  EmptyObject,
  typeof dummyDirectoriesFixtureName
>;

/**
 * This fixture writes out the directories described by `initialDirectories` to
 * the filesystem. Subdirectory paths of any depth are allowed, any non-existent
 * path components will be created if they do not already exist, and any
 * existing components will be ignored. This is similar to the behavior of
 * `mkdir -p` on Linux.
 */
export function dummyDirectoriesFixture(): DummyDirectoriesFixture {
  return {
    name: dummyDirectoriesFixtureName,
    description: 'creating dummy directories under fixture root',
    setup: async ({ fs, options }) => {
      await Promise.all(
        options.directoryPaths.map((path) => {
          return fs.mkdir(path, { recursive: true });
        })
      );
    }
  };
}
