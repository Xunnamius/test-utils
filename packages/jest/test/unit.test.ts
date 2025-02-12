/* eslint-disable no-console */
// * These tests ensure the exported interfaces under test function as expected.

import { basename } from 'node:path';

import { toAbsolutePath } from '@-xun/fs';

import {
  describe as originalDescribe,
  it as originalIt,
  test as originalTest
} from '@jest/globals';

import {
  asMocked,
  ensurePackageHasBeenBuilt,
  reconfigureJestGlobalsToSkipTestsInThisFileIfRequested,
  withMocks
} from 'universe+jest';

import { ErrorMessage } from 'universe+jest:error.ts';

const fakeEntryPoint = './fake/exports';
const thisParentPath = toAbsolutePath(__dirname);
const thisFilePath = './' + basename(__filename);
const originalSkipSlowEnv = process.env.SYMBIOTE_TEST_JEST_SKIP_SLOW_TESTS;

beforeEach(() => {
  globalThis.describe = originalDescribe as typeof globalThis.describe;
  globalThis.it = originalIt as typeof globalThis.it;
  globalThis.test = originalTest as typeof globalThis.test;

  delete process.env.SYMBIOTE_TEST_JEST_SKIP_SLOW_TESTS;
});

afterEach(() => {
  process.env.SYMBIOTE_TEST_JEST_SKIP_SLOW_TESTS = originalSkipSlowEnv;
});

describe('::asMocked', () => {
  it('returns a mock function or the passed-in function', async () => {
    expect.hasAssertions();

    expect(jest.isMockFunction(asMocked())).toBeTrue();
    expect(jest.isMockFunction(asMocked({ shallow: true }))).toBeTrue();
    expect(asMocked(() => 5)()).toBe(5);
    expect(asMocked({ fn: () => 5 }).fn()).toBe(5);
  });
});

describe('::reconfigureJestGlobalsToSkipTestsInThisFileIfRequested', () => {
  it('makes noskip available on describe, it, and test', async () => {
    expect.hasAssertions();

    reconfigureJestGlobalsToSkipTestsInThisFileIfRequested();

    expect(globalThis.describe.noskip).toBe(originalDescribe);
    expect(globalThis.it.noskip).toBe(originalIt);
    expect(globalThis.test.noskip).toBe(originalTest);
  });

  it('replaces global describe with skip function wrt process.env', async () => {
    expect.hasAssertions();

    process.env.SYMBIOTE_TEST_JEST_SKIP_SLOW_TESTS = '0';
    reconfigureJestGlobalsToSkipTestsInThisFileIfRequested();

    expect(globalThis.describe).toBe(originalDescribe);
    expect(globalThis.it).toBe(originalIt);
    expect(globalThis.test).toBe(originalTest);

    process.env.SYMBIOTE_TEST_JEST_SKIP_SLOW_TESTS = '1';
    reconfigureJestGlobalsToSkipTestsInThisFileIfRequested();

    expect(globalThis.describe).toBe(originalDescribe.skip);
    expect(globalThis.it).toBe(originalIt);
    expect(globalThis.test).toBe(originalTest);
  });

  it('replaces globals with skip functions with respect to targets option wrt process.env', async () => {
    expect.hasAssertions();

    process.env.SYMBIOTE_TEST_JEST_SKIP_SLOW_TESTS = '0';
    reconfigureJestGlobalsToSkipTestsInThisFileIfRequested({
      describe: false,
      it: true,
      test: true
    });

    expect(globalThis.describe).toBe(originalDescribe);
    expect(globalThis.it).toBe(originalIt);
    expect(globalThis.test).toBe(originalTest);

    process.env.SYMBIOTE_TEST_JEST_SKIP_SLOW_TESTS = '1';
    reconfigureJestGlobalsToSkipTestsInThisFileIfRequested({
      describe: false,
      it: true,
      test: true
    });

    expect(globalThis.describe).toBe(originalDescribe);
    expect(globalThis.it).toBe(originalIt.skip);
    expect(globalThis.test).toBe(originalTest.skip);
  });

  it('respects process.env.SYMBIOTE_TEST_JEST_SKIP_SLOW_TESTS > 1', async () => {
    expect.hasAssertions();

    process.env.SYMBIOTE_TEST_JEST_SKIP_SLOW_TESTS = '2';
    reconfigureJestGlobalsToSkipTestsInThisFileIfRequested({
      describe: false,
      it: true,
      test: true
    });

    expect(globalThis.describe).toBe(originalDescribe);
    expect(globalThis.it).toBe(originalIt.skip);
    expect(globalThis.test).toBe(originalTest.skip);
  });
});

describe('::withMocks', () => {
  it('combines argv, env, exit, and output mocks', async () => {
    expect.hasAssertions();

    await withMocks(async ({ getExitCode }) => {
      process.exitCode = 11;
      expect(getExitCode()).toBe(11);
    });

    let callCount = 0;
    const originalConsoleLog = console.log;
    console.log = () => (callCount += 1);

    process.env.MOCK_BAD_VALUE = '10';

    try {
      await withMocks(
        async ({ logSpy, exitSpy }) => {
          console.log(process.env.MOCK_VALUE);

          try {
            // eslint-disable-next-line unicorn/no-process-exit
            process.exit(process.argv[0]);
          } catch {}

          expect(logSpy).toHaveBeenCalledExactlyOnceWith('1');
          expect(exitSpy).toHaveBeenCalledExactlyOnceWith('5');
        },
        {
          simulatedArgv: ['5'],
          simulatedEnv: { MOCK_VALUE: '1' },
          options: {
            passthrough: ['log'],
            replaceEntireArgv: true,
            replaceEntireEnv: true
          }
        }
      );
    } finally {
      console.log = originalConsoleLog;
      delete process.env.MOCK_BAD_VALUE;
    }

    expect(callCount).toBe(1);
  });
});

describe('::ensurePackageHasBeenBuilt', () => {
  it('throws on inaccessible entry point strings, arrays, and objects', async () => {
    expect.hasAssertions();

    await expect(
      ensurePackageHasBeenBuilt(thisParentPath, 'fake-package', {
        '.': thisFilePath,
        fake: fakeEntryPoint
      })
    ).rejects.toMatchObject({
      message: ErrorMessage.DistributableNotBuilt(fakeEntryPoint)
    });

    await expect(
      ensurePackageHasBeenBuilt(thisParentPath, 'fake-package', {
        '.': thisFilePath,
        fake: fakeEntryPoint
      })
    ).rejects.toMatchObject({
      message: ErrorMessage.DistributableNotBuilt(fakeEntryPoint)
    });

    await expect(
      ensurePackageHasBeenBuilt(thisParentPath, 'fake-package', {
        '.': thisFilePath,
        fake: fakeEntryPoint
      })
    ).rejects.toMatchObject({
      message: ErrorMessage.DistributableNotBuilt(fakeEntryPoint)
    });

    await expect(
      ensurePackageHasBeenBuilt(thisParentPath, 'fake-package', {
        '.': thisFilePath,
        fake: { import: thisFilePath, default: fakeEntryPoint }
      })
    ).rejects.toMatchObject({
      message: ErrorMessage.DistributableNotBuilt(fakeEntryPoint)
    });

    await expect(
      ensurePackageHasBeenBuilt(thisParentPath, 'fake-package', {
        '.': thisFilePath,
        fake: { import: fakeEntryPoint, default: thisFilePath }
      })
    ).rejects.toMatchObject({
      message: ErrorMessage.DistributableNotBuilt(fakeEntryPoint)
    });
  });

  it('does not throw on dead, null, or invalid fallback conditions', async () => {
    expect.hasAssertions();

    await expect(
      ensurePackageHasBeenBuilt(thisParentPath, 'fake-package', {
        '.': thisFilePath,
        // ? Dead
        fake: { default: thisFilePath, import: fakeEntryPoint }
      })
    ).resolves.toBeUndefined();

    await expect(
      ensurePackageHasBeenBuilt(thisParentPath, 'fake-package', {
        '.': thisFilePath,
        // ? Null
        fake: null
      })
    ).resolves.toBeUndefined();

    await expect(
      ensurePackageHasBeenBuilt(thisParentPath, 'fake-package', {
        '.': [
          thisFilePath,
          // ? Ignored fallback
          fakeEntryPoint
        ]
      })
    ).resolves.toBeUndefined();
  });

  it('throws if packageExports is undefined', async () => {
    expect.hasAssertions();

    await expect(
      ensurePackageHasBeenBuilt(thisParentPath, 'fake-package', undefined)
    ).rejects.toMatchObject({
      message: ErrorMessage.NoEntryPointsInPackageJson('fake-package')
    });
  });
});
