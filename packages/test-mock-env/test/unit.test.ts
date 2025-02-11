// * These tests ensure the exported interface under test functions as expected.

import { mockEnvFactory, withMockedEnv } from 'universe+test-mock-env';

const originalEnv = process.env;
const envUpdates = { a: '1', b: '2', c: '3' };
const mockedEnv = { ...envUpdates, DEBUG: 'fake-namespace', DEBUG_COLORS: 'false' };

beforeEach(() => {
  process.env = { ...originalEnv, DEBUG: 'fake-namespace', DEBUG_COLORS: 'false' };
});

afterEach(() => {
  process.env = originalEnv;
});

describe('::withMockedEnv', () => {
  it('mocks env and returns it to its original state afterwards', async () => {
    expect.hasAssertions();

    expect(process.env).not.toStrictEqual(mockedEnv);

    await withMockedEnv(async () => {
      expect(process.env).toStrictEqual(mockedEnv);
    }, envUpdates);

    expect(process.env).not.toStrictEqual(mockedEnv);
  });

  it('respects replaceEntireEnv', async () => {
    expect.hasAssertions();

    expect(process.env).not.toStrictEqual(mockedEnv);

    await withMockedEnv(
      async () => {
        expect(process.env).toStrictEqual(mockedEnv);
      },
      envUpdates,
      { replaceEntireEnv: undefined }
    );

    expect(process.env).not.toStrictEqual(envUpdates);
    expect(process.env).not.toStrictEqual(mockedEnv);

    await withMockedEnv(
      async () => {
        expect(process.env).toStrictEqual({ ...process.env, ...mockedEnv });
      },
      envUpdates,
      { replaceEntireEnv: false }
    );

    expect(process.env).not.toStrictEqual(envUpdates);
    expect(process.env).not.toStrictEqual(mockedEnv);

    await withMockedEnv(
      async () => {
        expect(process.env).toStrictEqual({ ...envUpdates, DEBUG: 'fake-namespace' });
      },
      envUpdates,
      { replaceEntireEnv: true }
    );

    expect(process.env).not.toStrictEqual(envUpdates);
    expect(process.env).not.toStrictEqual(mockedEnv);
  });

  it('respects passthroughDebugEnv', async () => {
    expect.hasAssertions();

    expect(process.env).not.toStrictEqual(mockedEnv);

    await withMockedEnv(
      async () => {
        expect(process.env).toStrictEqual(mockedEnv);
      },
      envUpdates,
      { passthroughDebugEnv: true }
    );

    const { DEBUG: _, ...partialMockedEnv } = mockedEnv;

    expect(process.env).not.toStrictEqual(partialMockedEnv);
    expect(process.env).not.toStrictEqual(mockedEnv);

    await withMockedEnv(
      async () => {
        expect(process.env).toStrictEqual(partialMockedEnv);
      },
      envUpdates,
      { passthroughDebugEnv: false }
    );

    expect(process.env).not.toStrictEqual(partialMockedEnv);
    expect(process.env).not.toStrictEqual(mockedEnv);
  });

  it('replaces entire env without exception if replaceEntireEnv is true and passthroughDebugEnv is false', async () => {
    expect.hasAssertions();

    await withMockedEnv(
      async () => {
        expect(process.env).toStrictEqual(envUpdates);
      },
      envUpdates,
      { passthroughDebugEnv: false, replaceEntireEnv: true }
    );
  });

  it('returns env to its original state after error', async () => {
    expect.hasAssertions();

    expect(process.env).not.toStrictEqual(mockedEnv);

    await expect(() =>
      withMockedEnv(async () => {
        expect(process.env).toStrictEqual(mockedEnv);
        throw new Error('bad!');
      }, envUpdates)
    ).rejects.toMatchObject({ message: 'bad!' });

    expect(process.env).not.toStrictEqual(mockedEnv);
  });
});

describe('::mockEnvFactory', () => {
  it('returns a pre-configured mocking function', async () => {
    expect.hasAssertions();

    const withGeneratedMockedEnv1 = mockEnvFactory(envUpdates);
    const withGeneratedMockedEnv2 = mockEnvFactory(envUpdates, {
      replaceEntireEnv: true,
      passthroughDebugEnv: false
    });

    expect(process.env).not.toStrictEqual(mockedEnv);

    await withGeneratedMockedEnv1(async () => {
      expect(process.env).toStrictEqual(mockedEnv);
    });

    expect(process.env).not.toStrictEqual(mockedEnv);

    await withGeneratedMockedEnv1(
      async () => {
        expect(process.env).toStrictEqual(envUpdates);
      },
      {},
      { replaceEntireEnv: true, passthroughDebugEnv: false }
    );

    expect(process.env).not.toStrictEqual(envUpdates);
    expect(process.env).not.toStrictEqual(mockedEnv);

    await withGeneratedMockedEnv2(async () => {
      expect(process.env).toStrictEqual(envUpdates);
    });

    expect(process.env).not.toStrictEqual(envUpdates);
    expect(process.env).not.toStrictEqual(mockedEnv);
  });

  it('merges call site mock env onto factory mock env', async () => {
    expect.hasAssertions();

    const withGeneratedMockedEnv1 = mockEnvFactory(envUpdates);

    await withGeneratedMockedEnv1(async () => {
      expect(process.env).toStrictEqual({ ...mockedEnv, ...envUpdates });
    }, envUpdates);

    await withGeneratedMockedEnv1(
      async () => {
        expect(process.env).toStrictEqual({
          ...envUpdates,
          d: '4',
          e: '5',
          f: '6',
          DEBUG: 'fake-namespace'
        });
      },
      { d: '4', e: '5', f: '6' },
      { replaceEntireEnv: true, passthroughDebugEnv: true }
    );
  });
});
