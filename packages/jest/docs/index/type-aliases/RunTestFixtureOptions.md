[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / RunTestFixtureOptions

# Type Alias: RunTestFixtureOptions

> **RunTestFixtureOptions** = `Tagged`\<\{ `runWith`: \{ `args?`: `string`[]; `binary`: `string`; `runnerOptions?`: `RunOptions`; \}; \}, *typeof* [`runTestFixtureName`](../variables/runTestFixtureName.md)\>

Defined in: packages/test-mock-fixture/dist/packages/test-mock-fixture/src/fixtures/run-test.d.ts:20

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[runTestFixture](../functions/runTestFixture.md)
