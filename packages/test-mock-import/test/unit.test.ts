// * These tests ensure the exported interface under test functions as expected.

import { toAbsolutePath, toPath } from '@-xun/fs';

import {
  isolatedImport,
  protectedImportFactory,
  type AsDefault
} from 'universe+test-mock-import';

const fixturesDir = toAbsolutePath(__dirname, 'fixtures');
const fixture = toPath(fixturesDir, 'import.js');
const fixtureEsm = toPath(fixturesDir, 'import-esm.js');
const exit = toPath(fixturesDir, 'exit.js');
const exitCode = toPath(fixturesDir, 'exitCode.js');
const exitAndExitCode = toPath(fixturesDir, 'exitAndExitCode.js');

type Fixture = { default: () => number };

describe('::isolatedImport', () => {
  it('performs isolated imports', async () => {
    expect.hasAssertions();

    expect(require(fixture).default()).toBe(1);
    expect(require(fixture).default()).toBe(2);

    expect(isolatedImport<Fixture>(fixture).default()).toBe(1);
    expect(isolatedImport<Fixture>(fixture).default()).toBe(1);

    expect(require(fixtureEsm).default()).toBe(1);
    expect(require(fixtureEsm).default()).toBe(2);

    expect(isolatedImport<AsDefault<Fixture>>(fixtureEsm)()).toBe(1);
    expect(isolatedImport<AsDefault<Fixture>>(fixtureEsm)()).toBe(1);
  });

  it('respects reduceToDefault', async () => {
    expect.hasAssertions();

    expect(isolatedImport<AsDefault<Fixture>>(fixtureEsm)()).toBe(1);

    expect(
      isolatedImport<Fixture>(fixtureEsm, { reduceToDefault: false }).default()
    ).toBe(1);

    expect(
      isolatedImport<AsDefault<Fixture>>(fixtureEsm, { reduceToDefault: true })()
    ).toBe(1);

    expect(
      isolatedImport<AsDefault<Fixture>>(fixture, { reduceToDefault: true })()
    ).toBe(1);
  });

  it('rethrows non-MockedExit errors', async () => {
    expect.hasAssertions();

    expect(() => isolatedImport(toPath(fixturesDir, 'error.js'))).toThrow(
      'bad things happened!'
    );
  });
});

describe('::protectedImportFactory', () => {
  it('returns pre-configured mocking function', async () => {
    expect.hasAssertions();

    const isolatedImportExit = protectedImportFactory(exit);
    const isolatedImportExitCode = protectedImportFactory(exitCode);
    const isolatedImportExitAndExitCode = protectedImportFactory(exitAndExitCode);

    await expect(isolatedImportExit()).rejects.toMatchObject({
      message: expect.stringContaining('process.exit(5)')
    });

    await expect(isolatedImportExitCode()).rejects.toMatchObject({
      message: expect.stringContaining('"expected process.exitCode value": 2')
    });

    await expect(isolatedImportExitAndExitCode()).rejects.toMatchObject({
      message: expect.stringContaining('process.exit(5)')
    });

    await expect(isolatedImportExit({ expectedExitCode: 5 })).resolves.toBeUndefined();
    await expect(isolatedImportExitCode({ expectedExitCode: 2 })).resolves.toBe(10);

    await expect(
      isolatedImportExitAndExitCode({ expectedExitCode: 5 })
    ).rejects.toMatchObject({ message: expect.stringMatching(/Expected:.*?5.*?\n/) });
  });

  it('respects reduceToDefault', async () => {
    expect.hasAssertions();

    {
      const isolatedImportFixture = protectedImportFactory(fixture);

      expect((await isolatedImportFixture<Fixture>()).default()).toBe(1);
      expect((await isolatedImportFixture<Fixture>()).default()).toBe(1);

      expect(
        (await isolatedImportFixture<AsDefault<Fixture>>({ reduceToDefault: true }))()
      ).toBe(1);
      expect(
        (await isolatedImportFixture<AsDefault<Fixture>>({ reduceToDefault: true }))()
      ).toBe(1);
    }

    {
      const isolatedImportFixture = protectedImportFactory<AsDefault<Fixture>>(fixture, {
        reduceToDefault: true
      });

      expect((await isolatedImportFixture())()).toBe(1);
      expect((await isolatedImportFixture())()).toBe(1);
    }
  });

  it('rethrows non-MockedExit errors', async () => {
    expect.hasAssertions();

    const isolatedImportError = protectedImportFactory(toPath(fixturesDir, 'error.js'));

    await expect(isolatedImportError()).rejects.toMatchObject({
      message: 'bad things happened!'
    });
  });
});
