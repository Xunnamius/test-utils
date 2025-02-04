/**
 * A collection of possible error and warning messages.
 */
/* istanbul ignore next */
export const ErrorMessage = {
  UnknownLoader(id: string) {
    return `unknown loader name "${id}"`;
  },
  PackageMissingField(field: string) {
    return `packageJson is missing "${field}" field`;
  },
  PackageInvalidImportExportField(field: string) {
    return `packageJson has string, array, null, or undefined "${field}" field`;
  },
  PackageUnresolvable(id: string, error: unknown) {
    return `unable to get package "${id}": ${String(error)}`;
  },
  PackageInvalid(packageName: string, repositoryName: string) {
    return `"${packageName}" is not a valid package in dummy repository "${
      repositoryName
    }"`;
  },
  UnknownPseudodecorator(id: string) {
    return `unknown pseudo-decorated identifier "${id}"`;
  }
};
