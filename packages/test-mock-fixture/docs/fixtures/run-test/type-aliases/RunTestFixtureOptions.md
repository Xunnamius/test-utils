[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/run-test](../README.md) / RunTestFixtureOptions

# Type Alias: RunTestFixtureOptions

> **RunTestFixtureOptions**: `Tagged`\<\{ `runWith`: `SetRequired`\<`NonNullable`\<[`NodeImportAndRunTestFixtureOptions`](../../node-import-and-run-test/type-aliases/NodeImportAndRunTestFixtureOptions.md)\[`"runWith"`\]\>, `"binary"`\>; \}, *typeof* [`runTestFixtureName`](../variables/runTestFixtureName.md)\>

Defined in: [fixtures/run-test.ts:33](https://github.com/Xunnamius/test-utils/blob/ba2bb54f0f2d41708034e4076c72856c63c5167a/packages/test-mock-fixture/src/fixtures/run-test.ts#L33)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[runTestFixture](../functions/runTestFixture.md)
