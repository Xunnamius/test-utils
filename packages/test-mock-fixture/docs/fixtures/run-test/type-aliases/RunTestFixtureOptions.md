[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/run-test](../README.md) / RunTestFixtureOptions

# Type Alias: RunTestFixtureOptions

> **RunTestFixtureOptions**: `Tagged`\<\{ `runWith`: \{ `args`: `string`[]; `binary`: `string`; `runnerOptions`: `RunOptions`; \}; \}, *typeof* [`runTestFixtureName`](../variables/runTestFixtureName.md)\>

Defined in: [fixtures/run-test.ts:32](https://github.com/Xunnamius/test-utils/blob/e96d066a8d31079cb061bc2dac285562fbf7b708/packages/test-mock-fixture/src/fixtures/run-test.ts#L32)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[runTestFixture](../functions/runTestFixture.md)
