[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/run-test](../README.md) / RunTestFixtureOptions

# Type Alias: RunTestFixtureOptions

> **RunTestFixtureOptions**: `Tagged`\<`RequiredDeep`\<`Pick`\<[`NodeImportAndRunTestFixtureOptions`](../../node-import-and-run-test/type-aliases/NodeImportAndRunTestFixtureOptions.md), `"runWith"`\>\>, *typeof* [`runTestFixtureName`](../variables/runTestFixtureName.md)\>

Defined in: [fixtures/run-test.ts:32](https://github.com/Xunnamius/test-utils/blob/7f7e115f89b6524c00da237b9112899ec640d519/packages/test-mock-fixture/src/fixtures/run-test.ts#L32)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[runTestFixture](../functions/runTestFixture.md)
