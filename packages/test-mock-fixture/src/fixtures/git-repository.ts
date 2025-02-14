import { simpleGit } from 'simple-git';

import type { SimpleGit } from 'simple-git';
import type { Promisable, Tagged } from 'type-fest';

import type {
  FixtureContext,
  MockFixture
} from 'universe+test-mock-fixture:types/fixtures.ts';

export const gitRepositoryFixtureName = 'git-repository';

/**
 * A {@link MockFixture} instantiation of this fixture.
 *
 * @see {@link gitRepositoryFixture}
 */
export type GitRepositoryFixture = MockFixture<
  typeof gitRepositoryFixtureName,
  FixtureContext<GitRepositoryFixtureOptions>
>;

/**
 * Contains any additional options properties this fixture expects or allows.
 *
 * This type is {@link Tagged} so that it can be differentiated from `XContext`
 * types provided by other fixtures, even when they contain the same keys (or no
 * keys).
 *
 * @see {@link gitRepositoryFixture}
 */
export type GitRepositoryFixtureOptions = Tagged<
  {
    /**
     * A function that, if provided, will be called in lieu of the default git
     * repository setup function. Useful if you require a very specific
     * repository state that the default setup makes hard to achieve.
     */
    setupGit?: (git: SimpleGit) => Promisable<void>;
  },
  typeof gitRepositoryFixtureName
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
 * @see {@link gitRepositoryFixture}
 */
export type GitRepositoryFixtureContext = Tagged<
  {
    /**
     * A {@link SimpleGit} instance initialized with the dummy root directory.
     *
     * This instance is passed to {@link GitRepositoryFixtureOptions.setupGit}
     * and as part of the context passed to the `test` function.
     */
    git: SimpleGit;
  },
  typeof gitRepositoryFixtureName
>;

/**
 * This fixture initializes the dummy root directory as a git repository.
 */
export function gitRepositoryFixture(): GitRepositoryFixture {
  return {
    name: gitRepositoryFixtureName,
    description: 'configuring fixture root to be a git repository',
    setup: async (context) => {
      const { root, debug, options } = context;
      context.git = simpleGit({ baseDir: root });

      if (options.setupGit) {
        debug('executing options.setupGit');
        await options.setupGit(context.git);
      } else {
        debug('no options.setupGit function found, initializing repo manually');
        await context.git
          .init()
          .addConfig('user.name', 'fake-user')
          .addConfig('user.email', 'fake@email')
          .addConfig('user.signingkey', '')
          .addConfig('commit.gpgsign', 'false')
          .addConfig('tag.gpgsign', 'false');
      }
    }
  };
}
