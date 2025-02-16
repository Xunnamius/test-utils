[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/describe-root](../README.md) / DescribeRootFixtureContext

# Type Alias: DescribeRootFixtureContext

> **DescribeRootFixtureContext**: `Tagged`\<`EmptyObject`, *typeof* [`describeRootFixtureName`](../variables/describeRootFixtureName.md)\>

Defined in: [fixtures/describe-root.ts:49](https://github.com/Xunnamius/test-utils/blob/beb85e0df50e813590ae799295cdbfb96ea92ab4/packages/test-mock-fixture/src/fixtures/describe-root.ts#L49)

Contains any additional context properties this fixture makes available by
the time its `setup` function has successfully executed.

It is the sole responsibility of this fixture to ensure the context contains
the mentioned properties as described.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same properties
(or no properties).

## See

[describeRootFixture](../functions/describeRootFixture.md)
