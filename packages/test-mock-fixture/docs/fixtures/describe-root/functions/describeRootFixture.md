[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/describe-root](../README.md) / describeRootFixture

# Function: describeRootFixture()

> **describeRootFixture**(): [`DescribeRootFixture`](../type-aliases/DescribeRootFixture.md)

Defined in: [packages/test-mock-fixture/src/fixtures/describe-root.ts:66](https://github.com/Xunnamius/test-utils/blob/fbb0e2e25a6b2830b1b2ac319e054df42247cc53/packages/test-mock-fixture/src/fixtures/describe-root.ts#L66)

This fixture outputs debug information describing the runtime environment.

This fixture is treated specially in two ways:

1. If a fixture with the name `'describe-root'` is not included in the
   `fixtures` array parameter of `withMockedFixtures`, _this fixture will be
   automatically appended_ to said array.

2. _This fixture will always run_, even when an error occurs in an earlier
   fixture.

## Returns

[`DescribeRootFixture`](../type-aliases/DescribeRootFixture.md)
