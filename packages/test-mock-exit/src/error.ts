import { isNativeError } from 'node:util/types';

import { makeNamedError } from 'named-app-errors';

// TODO: replace all of this with the @-xun/error and @-xun/instance-of packages
const $type = Symbol.for('object-type-hint');
const $type_MockedExitError = Symbol.for('object-type-hint:MockedExitError');

// TODO: make-named-error should create and return this function automatically
export function isMockedExitError(parameter: unknown): parameter is MockedExitError {
  return (
    isNativeError(parameter) &&
    $type in parameter &&
    Array.isArray(parameter[$type]) &&
    parameter[$type].includes($type_MockedExitError)
  );
}

/**
 * Represents a call to `process.exit` when said function was mocked by
 * `withMockedExit`.
 */
export class MockedExitError extends Error {
  // TODO: this prop should be added by makeNamedError or whatever other fn
  [$type] = [$type_MockedExitError];
  /**
   * Represents a call to `process.exit` when said function was mocked by
   * `withMockedExit`.
   */
  constructor(code: string | number | null | undefined);
  /**
   * This constructor syntax is used by subclasses when calling this constructor
   * via `super`.
   */
  constructor(
    code: string | number | null | undefined,
    message: string,
    superOptions: ErrorOptions
  );
  constructor(
    /* istanbul ignore next */
    code: string | number | null | undefined = undefined,
    message: string | undefined = undefined,
    superOptions: ErrorOptions = {}
  ) {
    super(message ?? ExitErrorMessage.SuppressedExitAttempt(code), superOptions);
  }
}
makeNamedError(MockedExitError, 'MockedExitError');

/**
 * A collection of possible error and warning messages.
 */
/* istanbul ignore next */
export const ExitErrorMessage = {
  SuppressedExitAttempt(code: string | number | null | undefined) {
    return `process.exit(${
      code ?? ''
    }) was just called, but it was suppressed via withMockedExit`;
  }
};
