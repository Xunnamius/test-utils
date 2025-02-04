[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/dummy-files](../README.md) / DummyFilesFixtureContext

# Type Alias: DummyFilesFixtureContext

> **DummyFilesFixtureContext**: `Tagged`\<`EmptyObject`, *typeof* [`dummyFilesFixtureName`](../variables/dummyFilesFixtureName.md)\>

Defined in: [fixtures/dummy-files.ts:51](https://github.com/Xunnamius/test-utils/blob/7f7e115f89b6524c00da237b9112899ec640d519/packages/test-mock-fixture/src/fixtures/dummy-files.ts#L51)

Contains any additional context properties this fixture makes available by
the time its `setup` function has successfully executed.

It is the sole responsibility of this fixture to ensure the context contains
the mentioned properties as described.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same properties
(or no properties).

## See

[dummyFilesFixture](../functions/dummyFilesFixture.md)
