/**
 * A collection of possible error and warning messages.
 */

// ? We'll allow it since rootFixtureName is accessed lazily
// eslint-disable-next-line import/no-cycle
import { rootFixtureName } from 'universe+test-mock-fixture:fixtures/root.ts';

/* istanbul ignore next */
export const ErrorMessage = {
  RootAccessedTooEarly() {
    return `fixture "${rootFixtureName}" has not set context.root yet`;
  },
  AggregateErrors(errors: unknown[], dummyRoot: string | undefined) {
    const hasMultipleErrors = errors.length > 1;
    return `${
      hasMultipleErrors ? 'one or more errors' : 'an error'
    } occurred during fixture execution${dummyRoot ? ` (at ${dummyRoot})` : ''}:${
      hasMultipleErrors ? '\n\n' : ' '
    }${errors
      .map(
        (error, index) =>
          `${hasMultipleErrors ? `${index + 1}. ` : ''}${capitalize(
            Error.isError(error) ? error.message : String(error)
          )}`
      )
      .join('\n\n')}`;
  },
  ExpectedPathDoesNotExist(expectedPath: string) {
    return `expected "${expectedPath}" to exist and be accessible but it is not`;
  },
  CleanupNotPerformed() {
    return 'performCleanup is currently set to "false". This is a reminder to set it back to "true" 🙃';
  },
  GuruMeditation() {
    return 'an impossible scenario occurred';
  },
  MissingVirtualFile(key: string) {
    return `could not find virtual file: ${key}`;
  },
  NonAlphaNumericIdentifier(key: string, invalidValue: unknown) {
    return `"${key}" must be an alphanumeric (including hyphens and underscores) string of length >=1, saw: ${String(invalidValue)}`;
  },
  PackageMissingField(field: string) {
    return `package.json (under test) is missing a "${field}" field, or it is empty/invalid`;
  }
};

/**
 * Capitalize the first character in a string.
 *
 * Taken from Black Flag.
 */
export function capitalize(str: string) {
  /* istanbul ignore next */
  return (str.at(0)?.toUpperCase() || '') + str.slice(1);
}
