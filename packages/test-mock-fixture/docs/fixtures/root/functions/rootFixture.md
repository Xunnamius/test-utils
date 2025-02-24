[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/root](../README.md) / rootFixture

# Function: rootFixture()

> **rootFixture**(): [`RootFixture`](../type-aliases/RootFixture.md)

Defined in: [fixtures/root.ts:35](https://github.com/Xunnamius/test-utils/blob/00edde0e2bf95c365dcb6b1757d59a8b79b87194/packages/test-mock-fixture/src/fixtures/root.ts#L35)

This fixture creates the dummy root directory as well as the `src/`
subdirectory. It is perhaps the most important fixture.

If the first fixture in the array of fixtures passed to the `fixtures`
parameter of `withMockedFixtures` is not this fixture, then this fixture is
prepended to `fixtures`.

If this fixture appears anywhere else in `fixtures` other than as the first
element, it will be ignored entirely.

## Returns

[`RootFixture`](../type-aliases/RootFixture.md)
