[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/webpack-test](../README.md) / WebpackTestFixtureOptions

# Type Alias: WebpackTestFixtureOptions

> **WebpackTestFixtureOptions**: `Tagged`\<\{ `fileUnderTest`: `string`; `webpackVersion`: `string`; \}, *typeof* [`webpackTestFixtureName`](../variables/webpackTestFixtureName.md)\>

Defined in: [fixtures/webpack-test.ts:36](https://github.com/Xunnamius/test-utils/blob/e96d066a8d31079cb061bc2dac285562fbf7b708/packages/test-mock-fixture/src/fixtures/webpack-test.ts#L36)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[webpackTestFixture](../functions/webpackTestFixture.md)
