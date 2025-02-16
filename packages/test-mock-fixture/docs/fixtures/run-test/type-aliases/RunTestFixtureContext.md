[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/run-test](../README.md) / RunTestFixtureContext

# Type Alias: RunTestFixtureContext

> **RunTestFixtureContext**: `Tagged`\<\{ `testResult`: `RunReturnType`; \}, *typeof* [`runTestFixtureName`](../variables/runTestFixtureName.md)\>

Defined in: [fixtures/run-test.ts:56](https://github.com/Xunnamius/test-utils/blob/ba2bb54f0f2d41708034e4076c72856c63c5167a/packages/test-mock-fixture/src/fixtures/run-test.ts#L56)

Contains any additional context properties this fixture makes available by
the time its `setup` function has successfully executed.

It is the sole responsibility of this fixture to ensure the context contains
the mentioned properties as described.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same properties
(or no properties).

## See

[runTestFixture](../functions/runTestFixture.md)
