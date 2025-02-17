[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/describe-root](../README.md) / DescribeRootFixtureContext

# Type Alias: DescribeRootFixtureContext

> **DescribeRootFixtureContext**: `Tagged`\<`EmptyObject`, *typeof* [`describeRootFixtureName`](../variables/describeRootFixtureName.md)\>

Defined in: [fixtures/describe-root.ts:49](https://github.com/Xunnamius/test-utils/blob/43516fe131cd8b7116ce91a3b07930504b016979/packages/test-mock-fixture/src/fixtures/describe-root.ts#L49)

Contains any additional context properties this fixture makes available by
the time its `setup` function has successfully executed.

It is the sole responsibility of this fixture to ensure the context contains
the mentioned properties as described.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same properties
(or no properties).

## See

[describeRootFixture](../functions/describeRootFixture.md)
