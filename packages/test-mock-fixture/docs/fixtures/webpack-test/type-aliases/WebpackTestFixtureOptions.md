[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/webpack-test](../README.md) / WebpackTestFixtureOptions

# Type Alias: WebpackTestFixtureOptions

> **WebpackTestFixtureOptions** = `Tagged`\<\{ `fileUnderTest`: `string`; `webpackVersion`: `string`; \}, *typeof* [`webpackTestFixtureName`](../variables/webpackTestFixtureName.md)\>

Defined in: [fixtures/webpack-test.ts:36](https://github.com/Xunnamius/test-utils/blob/47f33d69abeb32464a6a4e66b6c89c313568151a/packages/test-mock-fixture/src/fixtures/webpack-test.ts#L36)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[webpackTestFixture](../functions/webpackTestFixture.md)
