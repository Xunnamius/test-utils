import type { GlobalFixtureOptions } from 'multiverse+test-mock-fixture:types/options.ts';
import type { FixtureContext, MockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';

export const dummyFilesFixtureName = 'dummy-files';

/**
 * @see {@link dummyFilesFixture}
 */
export type DummyFilesFixture = MockFixture<typeof dummyFilesFixtureName, FixtureContext<DummyFilesFixtureOptions>>;

/**
 * @see {@link dummyFilesFixture}
 */
export type DummyFilesFixtureOptions = Omit<GlobalFixtureOptions, 'initialVirtualFiles'> & Required<Pick<GlobalFixtureOptions, 'initialVirtualFiles'>>;

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
    setup: async (context) => {
      await Promise.all(
        Object.entries(context.virtualFiles).map(async ([path, contents]) => {
          const fullPath = `${context.root}/${path}`;
          await accessFile({ path: fullPath, context }).then(
            () => {
              context.debug(
                `skipped creating dummy file: file already exists at ${path}`
              );
            },
            async () => {
              context.virtualFiles[path] = contents;
              await writeFile({
                path: fullPath,
                data: context.virtualFiles[path],
                context
              });
            }
          );
        })
      );
    }
  };
}
