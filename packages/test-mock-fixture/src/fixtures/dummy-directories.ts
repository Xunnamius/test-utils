import { toAbsolutePath, type RelativePath } from '@-xun/fs';

import type { MockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';

const name = 'dummy-directories';

/**
 * @see {@link dummyDirectoriesFixture}
 */
export type DummyDirectoriesFixture = MockFixture<typeof name>;

/**
 * @see {@link dummyDirectoriesFixture}
 */
export type DummyDirectoriesFixtureOptions = {
  /**
   * An array of {@link RelativePath}s describing directories to be written out
   * to the filesystem by {@link dummyDirectoriesFixture}.
   */
  directoryPaths: RelativePath[];
};

/**
 * This fixture writes out the directories described by `initialDirectories` to
 * the filesystem. Subdirectory paths of any depth are allowed, any non-existent
 * path components will be created if they do not already exist, and any
 * existing components will be ignored. This is similar to the behavior of
 * `mkdir -p` on Linux.
 */
export function dummyDirectoriesFixture(): DummyDirectoriesFixture {
  return {
    name,
    description: 'creating dummy directories under fixture root',
    setup: async (context) => {
      if (!Array.isArray(context.options.directoryPaths)) {
        throw new TypeError('invalid or missing options.directoryPaths, expected array');
      }

      await Promise.all(
        context.options.directoryPaths.map((path) => {
          const dir = toAbsolutePath(context.root, path);
          return mkdir({ paths: [dir], context });
        })
      );
    }
  };
}
