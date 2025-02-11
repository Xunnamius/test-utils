import { toAbsolutePath, toPath, toRelativePath } from '@-xun/fs';

import { ErrorMessage } from 'universe+common-dummies:error.ts';

import type { AbsolutePath, RelativePath } from '@-xun/fs';

const DUMMY_PSEUDODECORATOR_DIR = toAbsolutePath(
  __dirname,
  '..',
  'dummies',
  'pseudodecorators'
);

/**
 * A type representing the name of an available dummy file containing
 * pseudodecorators.
 */
export type PseudodecoratorFileName =
  | 'extensionless'
  | 'js'
  | 'json'
  | 'md'
  | 'ts'
  | 'yml';

/**
 * Return a path to an analyzable file containing one or more pseudodecorators.
 */
export function getDummyDecoratedPath(id: PseudodecoratorFileName): AbsolutePath {
  return toPath(DUMMY_PSEUDODECORATOR_DIR, pseudodecoratedNameToFilename(id));
}

function pseudodecoratedNameToFilename(id: PseudodecoratorFileName): RelativePath {
  switch (id) {
    case 'extensionless': {
      return toRelativePath('extensionless');
    }

    case 'js': {
      return toRelativePath('js.js');
    }

    case 'json': {
      return toRelativePath('json.json');
    }

    case 'md': {
      return toRelativePath('md.md');
    }

    case 'ts': {
      return toRelativePath('ts.ts');
    }

    case 'yml': {
      return toRelativePath('yml.yml');
    }

    default: {
      throw new TypeError(ErrorMessage.UnknownPseudodecorator(id));
    }
  }
}
