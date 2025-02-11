/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { toAbsolutePath, toPath, toRelativePath } from '@-xun/fs';

import { ErrorMessage } from 'universe+common-dummies:error.ts';

import type { AbsolutePath, RelativePath } from '@-xun/fs';

const DUMMY_LOADER_DIR = toAbsolutePath(__dirname, '..', 'dummies', 'loaders');

/**
 * A type representing the name of an available dummy loader.
 */
export type LoaderName = 'reflective';

/**
 * Return a path to Node.js-compatible loader file.
 */
export function getDummyLoaderPath(id: LoaderName): AbsolutePath {
  return toPath(DUMMY_LOADER_DIR, loaderNameToFilename(id));
}

function loaderNameToFilename(id: LoaderName): RelativePath {
  switch (id) {
    case 'reflective': {
      return toRelativePath('reflective.mjs');
    }

    default: {
      throw new TypeError(ErrorMessage.UnknownLoader(id));
    }
  }
}
