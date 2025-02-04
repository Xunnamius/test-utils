/**
 * A collection of possible error and warning messages.
 */
/* istanbul ignore next */
export const ErrorMessage = {
  SuppressedExitAttempt(code: string | number | null | undefined) {
    return `process.exit(${
      code ?? ''
    }) was just called, but it was suppressed via withMockedExit`;
  }
};
