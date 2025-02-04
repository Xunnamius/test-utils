[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/webpack-test](../README.md) / webpackTestFixture

# Function: webpackTestFixture()

> **webpackTestFixture**(): [`WebpackTestFixture`](../type-aliases/WebpackTestFixture.md)

Defined in: [fixtures/webpack-test.ts:77](https://github.com/Xunnamius/test-utils/blob/7f7e115f89b6524c00da237b9112899ec640d519/packages/test-mock-fixture/src/fixtures/webpack-test.ts#L77)

This fixture initializes the dummy root directory with an index file under
`src` (described by `initialVirtualFiles`) and then executes Webpack. The
index file should import and test the package under test or otherwise trigger the desired Webpack functionality.

The index file must have a path matching the pattern `src/index${extension}`;
it can have any of the following extensions: `.js`, `.cjs`, `.mjs`, `.jsx`,
`.ts`, `.cts`, `.mts`, `.tsx`.

## Returns

[`WebpackTestFixture`](../type-aliases/WebpackTestFixture.md)
