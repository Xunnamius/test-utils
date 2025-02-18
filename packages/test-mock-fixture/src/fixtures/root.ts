import { tmpdir } from 'node:os';

import { toAbsolutePath, toPath } from '@-xun/fs';
import uniqueFilename from 'unique-filename';

// ? We'll allow it since ErrorMessage is accessed lazily
// eslint-disable-next-line import/no-cycle
import { ErrorMessage } from 'universe+test-mock-fixture:error.ts';

import type {
  GenericFixtureContext,
  MockFixture
} from 'universe+test-mock-fixture:types/fixtures.ts';

export const rootFixtureName = 'root';

/**
 * A {@link MockFixture} instantiation of this fixture.
 *
 * @see {@link rootFixture}
 */
export type RootFixture = MockFixture<typeof rootFixtureName, GenericFixtureContext>;

/**
 * This fixture creates the dummy root directory as well as the `src/`
 * subdirectory. It is perhaps the most important fixture.
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
    description: 'creating unique dummy root directory',
    setup: async (context) => {
      const { fs, options } = context;

      context.root = toAbsolutePath(uniqueFilename(tmpdir(), options.identifier));
      await fs.mkdir(toPath(context.root, 'src'), { recursive: true });
    },
    teardown: async ({ fs, options, root, debug }) => {
      if (options.performCleanup) {
        debug.message('deleting dummy root directory: %O', root);
        await fs.rm(root, {
          force: true,
          recursive: true,
          maxRetries: 10,
          retryDelay: 250
        });
      } else {
        throw new Error(ErrorMessage.CleanupNotPerformed());
      }
    }
  };
}
