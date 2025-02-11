// * These tests ensure the exported interface under test functions as expected.

import { mockArgvFactory, withMockedArgv } from 'universe+test-mock-argv';

const originalArgv = process.argv;
const argvUpdates = ['a', 'b', 'c'];
const mockedArgv = [...originalArgv.slice(0, 2), ...argvUpdates];

beforeEach(() => {
  process.argv = [...originalArgv];
});

afterEach(() => {
  process.argv = originalArgv;
});

describe('::withMockedArgv', () => {
  it('mocks argv and returns it to its original state afterwards', async () => {
    expect.hasAssertions();

    expect(process.argv).not.toStrictEqual(mockedArgv);

    await withMockedArgv(async () => {
      expect(process.argv).toStrictEqual(mockedArgv);
    }, argvUpdates);

    expect(process.argv).not.toStrictEqual(mockedArgv);
  });

  it('respects replaceEntireArgv', async () => {
    expect.hasAssertions();

    expect(process.argv).not.toStrictEqual(mockedArgv);

    await withMockedArgv(
      async () => {
        expect(process.argv).toStrictEqual(mockedArgv);
      },
      argvUpdates,
      { replaceEntireArgv: false }
    );

    expect(process.argv).not.toStrictEqual(argvUpdates);
    expect(process.argv).not.toStrictEqual(mockedArgv);

    await withMockedArgv(
      async () => {
        expect(process.argv).toStrictEqual(argvUpdates);
      },
      argvUpdates,
      { replaceEntireArgv: true }
    );

    expect(process.argv).not.toStrictEqual(argvUpdates);
    expect(process.argv).not.toStrictEqual(mockedArgv);
  });

  it('returns argv to its original state after error', async () => {
    expect.hasAssertions();

    expect(process.argv).not.toStrictEqual(mockedArgv);

    await expect(() =>
      withMockedArgv(async () => {
        expect(process.argv).toStrictEqual(mockedArgv);
        throw new Error('bad!');
      }, argvUpdates)
    ).rejects.toMatchObject({ message: 'bad!' });

    expect(process.argv).not.toStrictEqual(mockedArgv);
  });
});

describe('::mockArgvFactory', () => {
  it('returns a pre-configured mocking function', async () => {
    expect.hasAssertions();

    const withGeneratedMockedArgv1 = mockArgvFactory(argvUpdates);
    const withGeneratedMockedArgv2 = mockArgvFactory(argvUpdates, {
      replaceEntireArgv: true
    });

    expect(process.argv).not.toStrictEqual(mockedArgv);

    await withGeneratedMockedArgv1(async () => {
      expect(process.argv).toStrictEqual(mockedArgv);
    });

    expect(process.argv).not.toStrictEqual(mockedArgv);

    await withGeneratedMockedArgv1(
      async () => {
        expect(process.argv).toStrictEqual(argvUpdates);
      },
      [],
      { replaceEntireArgv: true }
    );

    expect(process.argv).not.toStrictEqual(argvUpdates);
    expect(process.argv).not.toStrictEqual(mockedArgv);

    await withGeneratedMockedArgv2(async () => {
      expect(process.argv).toStrictEqual(argvUpdates);
    });

    expect(process.argv).not.toStrictEqual(argvUpdates);
    expect(process.argv).not.toStrictEqual(mockedArgv);
  });

  it('appends call site mock argv to factory mock argv', async () => {
    expect.hasAssertions();

    const withGeneratedMockedArgv1 = mockArgvFactory(argvUpdates);

    await withGeneratedMockedArgv1(async () => {
      expect(process.argv).toStrictEqual([...mockedArgv, ...argvUpdates]);
    }, argvUpdates);

    await withGeneratedMockedArgv1(
      async () => {
        expect(process.argv).toStrictEqual([...argvUpdates, ...argvUpdates]);
      },
      argvUpdates,
      { replaceEntireArgv: true }
    );
  });
});
