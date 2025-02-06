// @ts-check
// ! It is imperative that operations performed by this script are IDEMPOTENT!

import { mkdir, writeFile } from 'node:fs/promises';

import { toAbsolutePath, toPath } from '@-xun/fs';
import { glob as globAsync } from 'glob';
import { createGenericLogger } from 'rejoinder';

process.env.DEBUG_COLOR ??= 'true';

const root = toAbsolutePath(import.meta.dirname);
const log = createGenericLogger({
  namespace: `common-dummies:post-npm-install`
});

const repositoriesDir = toPath(root, 'dummies', 'repositories');
const goodHybridrepoDir = toPath(repositoriesDir, 'good-hybridrepo', '.git-ignored');

await Promise.all([
  globAsync(`${repositoriesDir}/*/`, {
    absolute: true,
    dot: true,
    windowsPathsNoEscape: true
  }).then(async (paths) => {
    await Promise.all(paths.map((path) => mkdir(`${path}/.git`, { recursive: true })));
    log('Created %O test fixture dummy .git directories', paths.length);
  }),

  mkdir(goodHybridrepoDir, {
    recursive: true
  }).then(async () => {
    await writeFile(toPath(goodHybridrepoDir, 'nope.md'), 'Nope!\n', {
      encoding: 'utf8'
    });

    log('Created .git-ignored dummy directory in good-hybridrepo');
  })
]);

log('✅');
