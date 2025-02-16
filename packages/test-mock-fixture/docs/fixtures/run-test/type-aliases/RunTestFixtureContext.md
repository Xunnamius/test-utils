[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/run-test](../README.md) / RunTestFixtureContext

# Type Alias: RunTestFixtureContext

> **RunTestFixtureContext**: `Tagged`\<\{ `testResult`: `RunReturnType`; \}, *typeof* [`runTestFixtureName`](../variables/runTestFixtureName.md)\>

Defined in: [fixtures/run-test.ts:58](https://github.com/Xunnamius/test-utils/blob/c1219168b725e263abb557d96549b7b98bdb4b4c/packages/test-mock-fixture/src/fixtures/run-test.ts#L58)

Contains any additional context properties this fixture makes available by
the time its `setup` function has successfully executed.

It is the sole responsibility of this fixture to ensure the context contains
the mentioned properties as described.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same properties
(or no properties).

## See

[runTestFixture](../functions/runTestFixture.md)
