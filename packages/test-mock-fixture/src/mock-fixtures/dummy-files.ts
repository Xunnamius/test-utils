export function dummyFilesFixture(): MockFixture {
  return {
    name: 'dummy-files',
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
