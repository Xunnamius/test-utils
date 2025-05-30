[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/describe-root](../README.md) / DescribeRootFixtureOptions

# Type Alias: DescribeRootFixtureOptions

> **DescribeRootFixtureOptions** = `Tagged`\<`EmptyObject`, *typeof* [`describeRootFixtureName`](../variables/describeRootFixtureName.md)\>

Defined in: [fixtures/describe-root.ts:31](https://github.com/Xunnamius/test-utils/blob/f98e631c6c1119fbde0ae47dd357cfe62eae579b/packages/test-mock-fixture/src/fixtures/describe-root.ts#L31)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[describeRootFixture](../functions/describeRootFixture.md)
