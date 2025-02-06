import { toAbsolutePath, toPath, type AbsolutePath } from '@-xun/fs';
import { TrialError } from 'named-app-errors';
import { type Merge } from 'type-fest';

import { ErrorMessage } from 'universe+common-dummies:error.ts';

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
export function getDummyPackage<
  RequireObjectImports extends boolean = false,
  RequireObjectExports extends boolean = false
>(
  id: PackageName,
  options: {
    /**
     * If `true`, `imports` must be an object and not `undefined`, `null`,
     * `string`, or an array.
     *
     * @default false
     */
    requireObjectImports?: RequireObjectImports;
    /**
     * If `true`, `exports` must be an object and not `undefined`, `null`,
     * `string`, or an array.
     *
     * @default false
     */
    requireObjectExports?: RequireObjectExports;
  } = {}
): DummyPackageMetadata<RequireObjectImports, RequireObjectExports> {
  // eslint-disable-next-line unicorn/prevent-abbreviations
  const pkg = {} as DummyPackageMetadata<RequireObjectImports, RequireObjectExports>;

  if (id === 'root') {
    pkg.path = DUMMY_PACKAGE_DIR;
    pkg.packageJson = require(`${pkg.path}/package.json`);
  } else {
    pkg.path = toPath(DUMMY_PACKAGE_DIR, 'node_modules', `dummy-${id}-pkg`);
    pkg.packageJson = require(`${pkg.path}/package.json`);
  }

  if (!pkg.packageJson.name) {
    throw makeDummyPackageError(ErrorMessage.PackageMissingField('name'));
  }

  pkg.name = pkg.packageJson.name;

  if (
    options.requireObjectImports &&
    (!pkg.packageJson.imports ||
      typeof pkg.packageJson.imports === 'string' ||
      Array.isArray(pkg.packageJson.imports))
  ) {
    throw makeDummyPackageError(ErrorMessage.PackageInvalidImportExportField('imports'));
  }

  if (
    options.requireObjectExports &&
    (!pkg.packageJson.exports ||
      typeof pkg.packageJson.exports === 'string' ||
      Array.isArray(pkg.packageJson.exports))
  ) {
    throw makeDummyPackageError(ErrorMessage.PackageInvalidImportExportField('exports'));
  }

  return pkg;

  function makeDummyPackageError(error: string) {
    return new TrialError(ErrorMessage.PackageUnresolvable(id, error));
  }
}
