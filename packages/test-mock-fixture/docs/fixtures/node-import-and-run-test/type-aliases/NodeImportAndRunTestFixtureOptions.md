[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/node-import-and-run-test](../README.md) / NodeImportAndRunTestFixtureOptions

# Type Alias: NodeImportAndRunTestFixtureOptions

> **NodeImportAndRunTestFixtureOptions** = `Tagged`\<\{ `runWith?`: \{ `args?`: `string`[]; `binary?`: `string`; `runnerOptions?`: `RunOptions`; `useIndexPath?`: `boolean`; \}; \}, *typeof* [`nodeImportAndRunTestFixtureName`](../variables/nodeImportAndRunTestFixtureName.md)\>

Defined in: [fixtures/node-import-and-run-test.ts:34](https://github.com/Xunnamius/test-utils/blob/092a311cd9c7e00a7eedfbb90eacd9e7f2fb0150/packages/test-mock-fixture/src/fixtures/node-import-and-run-test.ts#L34)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[nodeImportAndRunTestFixture](../functions/nodeImportAndRunTestFixture.md)
