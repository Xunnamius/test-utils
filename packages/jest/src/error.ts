/**
 * A collection of possible error and warning messages.
 */

/* istanbul ignore next */
export const ErrorMessage = {
  DistributableNotBuilt(target: string) {
    return `entry point target not accessible: ${target}\n\nMust build distributables first (try \`npm run build\`)`;
  },
  NoEntryPointsInPackageJson(packageName: string | undefined) {
    return `the package.json::exports field of ${packageName ? `package "${packageName}"` : 'an unnamed package'}" is invalid or empty`;
  },
  ExceptionDidNotOccur(index: number, message: string) {
    return `an exception did not occur for spec element at index #${index}\n\nExpected error message: ${message}`;
  }
};
