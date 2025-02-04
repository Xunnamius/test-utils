import { toDirname } from '@-xun/fs';

import type { EmptyObject, Tagged } from 'type-fest';

import type {
  FixtureContext,
  MockFixture
} from 'universe+test-mock-fixture:types/fixtures.ts';

import type { GlobalFixtureOptions } from 'universe+test-mock-fixture:types/options.ts';

export const dummyFilesFixtureName = 'dummy-files';

/**
 * A {@link MockFixture} instantiation of this fixture.
 *
 * @see {@link dummyFilesFixture}
 */
export type DummyFilesFixture = MockFixture<
  typeof dummyFilesFixtureName,
  FixtureContext<DummyFilesFixtureOptions>
>;

/**
 * Contains any additional options properties this fixture expects or allows.
 *
 * This type is {@link Tagged} so that it can be differentiated from `XContext`
 * types provided by other fixtures, even when they contain the same keys (or no
 * keys).
 *
 * @see {@link dummyFilesFixture}
 */
export type DummyFilesFixtureOptions = Tagged<
  Required<Pick<GlobalFixtureOptions, 'initialVirtualFiles'>>,
  typeof dummyFilesFixtureName
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
 * @see {@link dummyFilesFixture}
 */
export type DummyFilesFixtureContext = Tagged<EmptyObject, typeof dummyFilesFixtureName>;

/**
 * This fixture writes out the files described by `initialVirtualFiles` to the
 * filesystem. Paths of any depth are allowed, any non-existent path components
 * (directories) will be created if they do not already exist, and any existing
 * components will be ignored.
 *
 * This is similar to the behavior of `mkdir -p $(dirname filepath) && echo
 * "contents" > filepath` on Linux.
 */
export function dummyFilesFixture(): DummyFilesFixture {
  return {
    name: dummyFilesFixtureName,
    description: 'creating dummy files under fixture root',
    setup: async ({ fs, virtualFiles, debug }) => {
      await Promise.all(
        Object.entries(virtualFiles).map(async ([path, contents]) => {
          if (await fs.isAccessible(path)) {
            debug('skipped creating dummy file since it already exists: %O', path);
          } else {
            await fs.mkdir(toDirname(path), { recursive: true });
            await fs.writeFile(path, contents);
          }
        })
      );
    }
  };
}
