import { toAbsolutePath, toPath, type AbsolutePath } from '@-xun/fs';
import { TrialError } from 'named-app-errors';
import { type Merge } from 'type-fest';

import type { XPackageJson } from '@-xun/project-types';

const DUMMY_PACKAGE_DIR = toAbsolutePath(__dirname, '..', 'dummies', 'packages');

/**
 * A type representing the name of an available dummy package.
 */
export type PackageName =
  | 'root'
  | 'simple'
  | 'complex'
  | 'sugared'
  | 'unlimited'
  | 'defaults';

/**
 * Represents the dummy package metadata returned by the `getDummyPackage`
 * function.
 */
export type DummyPackageMetadata<
  RequireObjectImports extends boolean = false,
  RequireObjectExports extends boolean = false
> = {
  path: AbsolutePath;
  name: string;
  packageJson: Merge<
    XPackageJson,
    {
      imports: RequireObjectImports extends true
        ? Exclude<XPackageJson['imports'], string | undefined | null | unknown[]>
        : XPackageJson['imports'] | undefined;
      exports: RequireObjectExports extends true
        ? Exclude<XPackageJson['exports'], string | undefined | null | unknown[]>
        : XPackageJson['exports'] | undefined;
    }
  >;
};

/**
 * Return metadata about an available dummy package.
 */
export function getDummyPackage(
  id: PackageName,
  {
    requireObjectImports = false,
    requireObjectExports = false
  }: {
    /**
     * If `true`, `imports` must be an object and not `null`, `undefined`,
     * `string`, or an array.
     *
     * @default false
     */
    requireObjectImports?: boolean;
    /**
     * If `true`, `exports` must be an object and not `null`, `undefined`,
     * `string`, or an array.
     *
     * @default false
     */
    requireObjectExports?: boolean;
  } = {}
): DummyPackageMetadata<typeof requireObjectImports, typeof requireObjectExports> {
  // eslint-disable-next-line unicorn/prevent-abbreviations
  const pkg = {} as DummyPackageMetadata<
    typeof requireObjectImports,
    typeof requireObjectExports
  >;

  if (id === 'root') {
    pkg.path = DUMMY_PACKAGE_DIR;
    pkg.packageJson = require(`${pkg.path}/package.json`);
  } else {
    pkg.path = toPath(DUMMY_PACKAGE_DIR, 'node_modules', `dummy-${id}-pkg`);
    pkg.packageJson = require(`${pkg.path}/package.json`);
  }

  if (!pkg.packageJson.name) {
    throw makeDummyPackageError('packageJson is missing "name" field');
  }

  pkg.name = pkg.packageJson.name;

  if (
    requireObjectImports &&
    (!pkg.packageJson.imports ||
      typeof pkg.packageJson.imports === 'string' ||
      Array.isArray(pkg.packageJson.imports))
  ) {
    throw makeDummyPackageError(
      'packageJson has string, array, null, or undefined "imports" field'
    );
  }

  if (
    requireObjectExports &&
    (!pkg.packageJson.exports ||
      typeof pkg.packageJson.exports === 'string' ||
      Array.isArray(pkg.packageJson.exports))
  ) {
    throw makeDummyPackageError(
      'packageJson has string, array, null, or undefined "exports" field'
    );
  }

  return pkg;

  function makeDummyPackageError(error: string) {
    return new TrialError(`unable to get package "${id}": ${error}`);
  }
}
