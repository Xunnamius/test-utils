import { toAbsolutePath, type AbsolutePath } from '@-xun/fs';
import { TrialError } from 'named-app-errors';

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
  packageJson: XPackageJson;

  imports: RequireObjectImports extends true
    ? Exclude<XPackageJson['imports'], string | undefined | null | unknown[]>
    : XPackageJson['imports'] | undefined;

  exports: RequireObjectExports extends true
    ? Exclude<XPackageJson['exports'], string | undefined | null | unknown[]>
    : XPackageJson['exports'] | undefined;
};

/**
 * Return metadata about an available dummy package.
 */
export function getDummyPackage<
  RequireObjectImports extends boolean = false,
  RequireObjectExports extends boolean = false
>(
  id: PackageName,
  options?: {
    /**
     * If `true`, `imports` must be an object and not `null`, `undefined`,
     * `string`, or an array.
     *
     * @default false
     */
    requireObjectImports?: RequireObjectImports;
    /**
     * If `true`, `exports` must be an object and not `null`, `undefined`,
     * `string`, or an array.
     *
     * @default false
     */
    requireObjectExports?: RequireObjectExports;
  }
): DummyPackageMetadata<RequireObjectImports, RequireObjectExports> {
  const { requireObjectImports, requireObjectExports } = options ?? {};

  const package_ = {
    path: '',
    json: {} as XPackageJson
  };

  if (id === 'root') {
    package_.path = DUMMY_PACKAGE_DIR;
    package_.json = require(`${package_.path}/package.json`);
  } else {
    package_.path = `${DUMMY_PACKAGE_DIR}/node_modules/dummy-${id}-pkg`;
    package_.json = require(`${package_.path}/package.json`);
  }

  if (!package_.json.name) {
    throwNewError('package.json is missing "name" field');
  }

  if (
    requireObjectImports &&
    (!package_.json.imports ||
      typeof package_.json.imports === 'string' ||
      Array.isArray(package_.json.imports))
  ) {
    throwNewError('package.json has string, array, null, or undefined "imports" field');
  }

  if (
    requireObjectExports &&
    (!package_.json.exports ||
      typeof package_.json.exports === 'string' ||
      Array.isArray(package_.json.exports))
  ) {
    throwNewError('package.json has string, array, null, or undefined "exports" field');
  }

  return {
    path: package_.path,
    name: package_.json.name,
    imports: package_.json.imports,
    exports: package_.json.exports,
    packageJson: package_.json
  } as DummyPackageMetadata<RequireObjectImports, RequireObjectExports>;

  function throwNewError(error: string): never {
    throw new TrialError(`unable to get package "${id}": ${error}`);
  }
}
