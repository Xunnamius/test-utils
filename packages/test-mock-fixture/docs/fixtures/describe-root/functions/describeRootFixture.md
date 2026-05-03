[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/describe-root](../README.md) / describeRootFixture

# Function: describeRootFixture()

> **describeRootFixture**(): [`DescribeRootFixture`](../type-aliases/DescribeRootFixture.md)

Defined in: [fixtures/describe-root.ts:66](https://github.com/Xunnamius/test-utils/blob/74ed4d5c3f18a628799d58c386ad59679412771a/packages/test-mock-fixture/src/fixtures/describe-root.ts#L66)

This fixture outputs debug information describing the runtime environment.

This fixture is treated specially in two ways:

1. If a fixture with the name `'describe-root'` is not included in the
   `fixtures` array parameter of `withMockedFixtures`, _this fixture will be
   automatically appended_ to said array.

2. _This fixture will always run_, even when an error occurs in an earlier
   fixture.

## Returns

[`DescribeRootFixture`](../type-aliases/DescribeRootFixture.md)
