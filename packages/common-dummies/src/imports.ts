import { toAbsolutePath, toPath } from '@-xun/fs';

import type { AbsolutePath } from '@-xun/fs';

const DUMMY_IMPORT_DIR = toAbsolutePath(__dirname, '..', 'dummies', 'imports');

/**
 * A type representing the name of an available dummy file containing various
 * imports.
 */
export type ImportFileName = 'cjs' | 'cts' | 'js' | 'jsx' | 'mjs' | 'mts' | 'ts' | 'tsx';

/**
 * Return a path to an importable dummy file.
 */
export function getDummyImportPath(id: ImportFileName): AbsolutePath {
  return toPath(DUMMY_IMPORT_DIR, `${id}.${id}`);
}
