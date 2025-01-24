export interface DummyDirectoriesFixtureOptions {
  directoryPaths?: string[];
}

export function dummyDirectoriesFixture(): MockFixture {
  return {
    name: 'dummy-directories',
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
