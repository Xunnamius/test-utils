[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/node-import-and-run-test](../README.md) / NodeImportAndRunTestFixtureContext

# Type Alias: NodeImportAndRunTestFixtureContext

> **NodeImportAndRunTestFixtureContext** = `Tagged`\<\{ `testResult`: `RunReturnType`\<`RunOptions`\>; \}, *typeof* [`nodeImportAndRunTestFixtureName`](../variables/nodeImportAndRunTestFixtureName.md)\>

Defined in: [fixtures/node-import-and-run-test.ts:94](https://github.com/Xunnamius/test-utils/blob/092a311cd9c7e00a7eedfbb90eacd9e7f2fb0150/packages/test-mock-fixture/src/fixtures/node-import-and-run-test.ts#L94)

Contains any additional context properties this fixture makes available by
the time its `setup` function has successfully executed.

It is the sole responsibility of this fixture to ensure the context contains
the mentioned properties as described.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same properties
(or no properties).

## See

[nodeImportAndRunTestFixture](../functions/nodeImportAndRunTestFixture.md)
