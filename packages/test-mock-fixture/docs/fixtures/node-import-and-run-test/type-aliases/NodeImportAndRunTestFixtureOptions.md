[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/node-import-and-run-test](../README.md) / NodeImportAndRunTestFixtureOptions

# Type Alias: NodeImportAndRunTestFixtureOptions

> **NodeImportAndRunTestFixtureOptions** = `Tagged`\<\{ `runWith?`: \{ `args?`: `string`[]; `binary?`: `string`; `runnerOptions?`: `RunOptions`; \}; \}, *typeof* [`nodeImportAndRunTestFixtureName`](../variables/nodeImportAndRunTestFixtureName.md)\>

Defined in: [fixtures/node-import-and-run-test.ts:34](https://github.com/Xunnamius/test-utils/blob/f98e631c6c1119fbde0ae47dd357cfe62eae579b/packages/test-mock-fixture/src/fixtures/node-import-and-run-test.ts#L34)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[nodeImportAndRunTestFixture](../functions/nodeImportAndRunTestFixture.md)
