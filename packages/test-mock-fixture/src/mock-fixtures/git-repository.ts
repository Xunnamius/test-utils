export interface GitRepositoryFixtureOptions {
  setupGit?: (git: SimpleGit) => Promisable<void>;
}

export function gitRepositoryFixture(): MockFixture {
  return {
    name: 'git-repository',
    description: 'configuring fixture root to be a git repository',
    setup: async (context) => {
      if (context.options.setupGit && typeof context.options.setupGit !== 'function') {
        throw new Error('invalid options.setupGit, expected function');
      }

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
