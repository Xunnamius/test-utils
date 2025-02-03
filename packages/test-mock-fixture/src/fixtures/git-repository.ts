import type { SimpleGit } from 'simple-git';
import type { Promisable } from 'type-fest';
import type { MockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';

const name = 'git-repository';

/**
 * @see {@link gitRepositoryFixture}
 */
export type GitRepositoryFixture = MockFixture<typeof name>;

/**
 * @see {@link gitRepositoryFixture}
 */
export type GitRepositoryFixtureOptions = {
  setupGit: (git: SimpleGit) => Promisable<void>;
};

/**
 * This fixture initializes the dummy root directory as a git repository.
 */
export function gitRepositoryFixture(): GitRepositoryFixture {
  return {
    name,
    description: 'configuring fixture root to be a git repository',
    setup: async (context) => {
      // TODO: these types of constructions can now be deleted
      // if (context.options.setupGit && typeof context.options.setupGit !== 'function') {
      //   throw new Error('invalid options.setupGit, expected function');
      // }

      context.git = simpleGit({ baseDir: context.root });

      await (context.options.setupGit
        ? context.options.setupGit(context.git)
        : context.git
            .init()
            .addConfig('user.name', 'fake-user')
            .addConfig('user.email', 'fake@email')
            .addConfig('user.signingkey', '')
            .addConfig('commit.gpgsign', 'false')
            .addConfig('tag.gpgsign', 'false'));
    }
  };
}
