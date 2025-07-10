import { makeNamedError } from '@-xun/error';

export const { MockedExitError } = makeNamedError(
  class MockedExitError extends Error {
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
  },
  'MockedExitError'
);

/**
 * Represents a call to `process.exit` when said function was mocked by
 * `withMockedExit`.
 */
export type MockedExitError = InstanceType<typeof MockedExitError>;

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
