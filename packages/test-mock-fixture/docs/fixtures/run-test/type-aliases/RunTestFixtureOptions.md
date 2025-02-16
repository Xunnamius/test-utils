[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/run-test](../README.md) / RunTestFixtureOptions

# Type Alias: RunTestFixtureOptions

> **RunTestFixtureOptions**: `Tagged`\<`Pick`\<[`NodeImportAndRunTestFixtureOptions`](../../node-import-and-run-test/type-aliases/NodeImportAndRunTestFixtureOptions.md), `"runWith"`\> & `object`, *typeof* [`runTestFixtureName`](../variables/runTestFixtureName.md)\>

Defined in: [fixtures/run-test.ts:33](https://github.com/Xunnamius/test-utils/blob/c1219168b725e263abb557d96549b7b98bdb4b4c/packages/test-mock-fixture/src/fixtures/run-test.ts#L33)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[runTestFixture](../functions/runTestFixture.md)
