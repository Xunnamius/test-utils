/**
 * A collection of possible error and warning messages.
 */
/* istanbul ignore next */
export const ErrorMessage = {
  DistributablesNotBuilt() {
    return 'must build distributables first (try `npm run build`)';
  },
  NoEntryPointsInPackageJson(packageName: string | undefined) {
    return `the package.json::exports field of ${packageName ? `package "${packageName}"` : 'an unnamed package'}" is invalid or empty`;
  },
  NoDefaultConditionInPackageJsonExport(packageName: string | undefined) {
    return `a package.json::exports field of ${packageName ? `package "${packageName}"` : 'an unnamed package'}" does not contain a valid non-empty "default" condition`;
  }
};
