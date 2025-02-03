import type { RelativePath } from '@-xun/fs';
import type { MockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';

const name = 'dummy-files';

/**
 * @see {@link dummyFilesFixture}
 */
export type DummyFilesFixture = MockFixture<typeof name>;

/**
 * @see {@link dummyFilesFixture}
 */
export type DummyFilesFixtureOptions = {
  /**
   * An object describing "virtual files" represented by mappings between
   * non-existent {@link RelativePath}s and their theoretical contents. These
   * paths are relative to the dummy root directory.
   *
   * Some fixtures use the `initialFileContents` option to lookup certain
   * values, such as picking out keys from a virtual `package.json` file.
   *
   * **These virtual files are not created on the filesystem automatically!**
   *
   * To have the virtual files described in `initialFileContents` actually
   * written out to the filesystem (relative to the dummy root directory), you
   * must use {@link dummyFilesFixture}.
   *
   * Consider also `dummyDirectoriesFixture` for writing out directories to the
   * filesystem using the `initialDirectories` option.
   */
  initialFileContents: { [filePath: RelativePath | string]: string };
};

/**
 * This fixture writes out the files described by `initialFileContents` to the
 * filesystem. Paths of any depth are allowed, any non-existent path components
 * (directories) will be created if they do not already exist, and any existing
 * components will be ignored.
 *
 * This is similar to the behavior of `mkdir -p $(dirname filepath) && echo
 * "contents" > filepath` on Linux.
 */
export function dummyFilesFixture(): DummyFilesFixture {
  return {
    name,
    description: 'creating dummy files under fixture root',
    setup: async (context) => {
      await Promise.all(
        Object.entries(context.fileContents).map(async ([path, contents]) => {
          const fullPath = `${context.root}/${path}`;
          await accessFile({ path: fullPath, context }).then(
            () => {
              context.debug(
                `skipped creating dummy file: file already exists at ${path}`
              );
            },
            async () => {
              context.fileContents[path] = contents;
              await writeFile({
                path: fullPath,
                data: context.fileContents[path],
                context
              });
            }
          );
        })
      );
    }
  };
}
