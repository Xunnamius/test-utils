[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/describe-root](../README.md) / DescribeRootFixtureContext

# Type Alias: DescribeRootFixtureContext

> **DescribeRootFixtureContext** = `Tagged`\<`EmptyObject`, *typeof* [`describeRootFixtureName`](../variables/describeRootFixtureName.md)\>

Defined in: [fixtures/describe-root.ts:49](https://github.com/Xunnamius/test-utils/blob/4d43cc0c19fc37167d33e672c88c9d1391d7bdfe/packages/test-mock-fixture/src/fixtures/describe-root.ts#L49)

Contains any additional context properties this fixture makes available by
the time its `setup` function has successfully executed.

It is the sole responsibility of this fixture to ensure the context contains
the mentioned properties as described.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same properties
(or no properties).

## See

[describeRootFixture](../functions/describeRootFixture.md)
