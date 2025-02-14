/**
 * A collection of possible error and warning messages.
 */

import { rootFixtureName } from 'universe+test-mock-fixture:fixtures/root.ts';

/* istanbul ignore next */
export const ErrorMessage = {
  RootAccessedTooEarly() {
    return `fixture "${rootFixtureName}" has not set context.root yet`;
  },
  ExpectedPathDoesNotExist(expectedPath: string) {
    return `expected "${expectedPath}" to exist and be accessible but it is not`;
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
