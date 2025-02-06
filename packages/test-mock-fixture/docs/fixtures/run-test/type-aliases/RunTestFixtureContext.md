[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/run-test](../README.md) / RunTestFixtureContext

# Type Alias: RunTestFixtureContext

> **RunTestFixtureContext**: `Tagged`\<\{ `testResult`: `RunReturnType`; \}, *typeof* [`runTestFixtureName`](../variables/runTestFixtureName.md)\>

Defined in: [fixtures/run-test.ts:50](https://github.com/Xunnamius/test-utils/blob/14b8913d5f48373a9eb174660cf655c3dfccb324/packages/test-mock-fixture/src/fixtures/run-test.ts#L50)

Contains any additional context properties this fixture makes available by
the time its `setup` function has successfully executed.

It is the sole responsibility of this fixture to ensure the context contains
the mentioned properties as described.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same properties
(or no properties).

## See

[runTestFixture](../functions/runTestFixture.md)
