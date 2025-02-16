[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/root](../README.md) / rootFixture

# Function: rootFixture()

> **rootFixture**(): [`RootFixture`](../type-aliases/RootFixture.md)

Defined in: [fixtures/root.ts:31](https://github.com/Xunnamius/test-utils/blob/e96d066a8d31079cb061bc2dac285562fbf7b708/packages/test-mock-fixture/src/fixtures/root.ts#L31)

This fixture creates the dummy root directory as well as the `src/`
subdirectory. It is perhaps the most important fixture.

If the first fixture in the array of fixtures passed to the `fixtures`
parameter of `withMockedFixtures` is not this fixture, then this fixture is
prepended to `fixtures`.

If this fixture appears anywhere else in `fixtures` other than as the first
element, it will be ignored entirely.

## Returns

[`RootFixture`](../type-aliases/RootFixture.md)
