/* eslint-disable unicorn/no-process-exit */
/* eslint-disable jest/unbound-method */
// * These tests ensure the exported interface under test functions as expected.

import {
  ExitErrorMessage,
  isMockedExitError,
  MockedExitError,
  withMockedExit
} from 'universe+test-mock-exit';

const originalExit = process.exit;
const mockedExit = () => {
  throw new Error('the original process.exit was called');
};

beforeEach(() => {
  process.exit = mockedExit;
});

afterEach(() => {
  process.exit = originalExit;
  process.exitCode = undefined;
});

describe('::withMockedExit', () => {
  it('captures process.exit and process.exitCode and restores them afterwards', async () => {
    expect.hasAssertions();

    await withMockedExit(async ({ exitSpy, getExitCode }) => {
      expect(() => process.exit(1)).toThrow(ExitErrorMessage.SuppressedExitAttempt(1));

      expect(exitSpy).toHaveBeenCalledWith(1);
      expect(getExitCode()).toBeUndefined();

      process.exitCode = 5;

      expect(exitSpy).toHaveBeenCalledOnce();
      expect(getExitCode()).toBe(5);
    });

    expect(() => process.exit(1)).toThrow('the original process.exit was called');
    expect(process.exitCode).toBeUndefined();
  });

  it('throws if process.exit is called and process.exitCode is set but the exit mock is not checked', async () => {
    expect.hasAssertions();

    await expect(
      withMockedExit(async ({ getExitCode }) => {
        process.exitCode = 6;
        expect(() => process.exit(2)).toThrow(ExitErrorMessage.SuppressedExitAttempt(2));

        expect(getExitCode()).toBe(6);
      })
    ).rejects.toMatchObject({
      message: expect.stringMatching(
        /"expected process\.exit calls": Array \[(.|\n)*?Array \[(.|\n)*?2,(?!(.|\n)*exitCode)/
      )
    });
  });

  it('throws if process.exit is called and process.exitCode is set but the exitCode mock is not checked', async () => {
    expect.hasAssertions();

    await expect(
      withMockedExit(async ({ exitSpy }) => {
        process.exitCode = 6;
        expect(() => process.exit(2)).toThrow(ExitErrorMessage.SuppressedExitAttempt(2));

        expect(exitSpy).toHaveBeenCalled();
      })
    ).rejects.toMatchObject({
      message: expect.not.stringContaining('process.exit calls')
    });

    await expect(
      withMockedExit(async ({ exitSpy }) => {
        // ? Non-error exit code
        process.exitCode = 0;
        expect(() => process.exit(2)).toThrow(ExitErrorMessage.SuppressedExitAttempt(2));

        expect(exitSpy).toHaveBeenCalled();
      })
    ).toResolve();
  });

  it('throws if process.exit is called and/or process.exitCode is set but neither mock is checked', async () => {
    expect.hasAssertions();

    await expect(
      withMockedExit(async () => {
        expect(() => process.exit(1)).toThrow(ExitErrorMessage.SuppressedExitAttempt(1));
      })
    ).rejects.toMatchObject({
      message: expect.stringMatching(
        /"expected process\.exit calls": Array \[(.|\n)*?Array \[(.|\n)*?1,/
      )
    });

    await expect(
      withMockedExit(async () => {
        process.exitCode = 5;
      })
    ).rejects.toMatchObject({
      message: expect.stringContaining('"expected process.exitCode value": 5')
    });

    await expect(
      withMockedExit(async () => {
        process.exitCode = 6;
        expect(() => process.exit(2)).toThrow(ExitErrorMessage.SuppressedExitAttempt(2));
      })
    ).rejects.toMatchObject({
      message: expect.stringMatching(
        /"expected process\.exit calls": Array \[(.|\n)*?Array \[(.|\n)*?2,(.|\n)*"expected process\.exitCode value": 6/
      )
    });
  });
});

describe('::isMockedExitError', () => {
  it('works as expected', async () => {
    expect.hasAssertions();

    expect(isMockedExitError(new Error('some-error'))).toBeFalse();
    expect(isMockedExitError(new MockedExitError(5))).toBeTrue();
  });
});
