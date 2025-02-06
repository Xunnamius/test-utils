// @ts-check

// * This script is run automatically as part of this package's build script,
// * i.e. `npm run build`. Its purpose is to pack the dummies into a tarball.
// * We do this because NPM's somewhat arcane publishing process will mangle
// * certain files in scantly-documented ways that we don't feel like reasoning
// * about.
// *
// * This script runs before symbiote's build process runs. To unpack the
// * archive as a user of this library, `@-xun/common-dummies/post-install` must
// * be invoked at least once. See README.md for further usage details.

// ! It is imperative that operations performed by this script are IDEMPOTENT!

import { toAbsolutePath, toPath } from '@-xun/fs';
import { createGenericLogger } from 'rejoinder';
// {@symbiote/notExtraneous tar}
import { create } from 'tar';

process.env.DEBUG_COLOR ??= 'true';

const root = toAbsolutePath(import.meta.dirname);
const log = createGenericLogger({
  namespace: `common-dummies:pre-build`
});

const dummiesInputDir = 'dummies';
const dummiesOutputFile = toPath(root, 'dummies.tar.gz');

log('Packing dummies into tarball at %O', toPath(root, dummiesInputDir));

await create(
  {
    cwd: root,
    gzip: true,
    portable: true,
    file: dummiesOutputFile
  },
  [dummiesInputDir]
);

log('Output packed dummies tarball to %O', dummiesOutputFile);

log('✅');
