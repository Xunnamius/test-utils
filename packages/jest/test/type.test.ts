// * These tests ensure the exported types under test function as expected.

import { describe, expect, it } from 'tstyche';

import { asMocked } from 'universe+jest';

type MyFunctionType = () => number;

describe('::asMocked', () => {
  it('returns deeply mocked type parameter T', async () => {
    expect(asMocked<MyFunctionType>()).type.toBe<jest.MaybeMockedDeep<MyFunctionType>>();
  });

  it('returns shallowly mocked type parameter T', async () => {
    expect(asMocked<MyFunctionType>({ shallow: true })).type.toBe<
      jest.MaybeMocked<MyFunctionType>
    >();
  });

  it('returns deeply mocked type parameter T', async () => {
    expect(asMocked(() => 5)).type.toBe<jest.MaybeMockedDeep<() => 5>>();
  });

  it('returns deeply mocked type parameter T', async () => {
    expect(asMocked(() => 5, { shallow: true })).type.toBe<jest.MaybeMocked<() => 5>>();
  });
});
