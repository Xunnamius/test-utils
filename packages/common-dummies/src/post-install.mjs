// @ts-check

// * Unpacks dummies.tar.gz in ./dist or errors if the tarball does not exist.
// * See README.md for usage instructions.

// ! It is imperative that operations performed by this script are IDEMPOTENT!

import { toAbsolutePath, toPath } from '@-xun/fs';
import { createGenericLogger } from 'rejoinder';
// {@symbiote/notExtraneous tar}
import { extract } from 'tar';

process.env.DEBUG_COLOR ??= 'true';

const root = toAbsolutePath(import.meta.dirname);
const log = createGenericLogger({
  namespace: `common-dummies:post-install`
});

const dummiesOutputDir = toPath(root, '..');
const dummiesInputFile = toPath(dummiesOutputDir, 'dummies.tar.gz');

log('Unpacking dummies from tarball at %O', dummiesInputFile);

await extract({
  cwd: dummiesOutputDir,
  file: dummiesInputFile
});

log('Output unpacked dummies to %O', toPath(dummiesOutputDir, 'dummies'));

log('✅');
