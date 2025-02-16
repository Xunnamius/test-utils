[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/webpack-test](../README.md) / webpackTestFixture

# Function: webpackTestFixture()

> **webpackTestFixture**(): [`WebpackTestFixture`](../type-aliases/WebpackTestFixture.md)

Defined in: [fixtures/webpack-test.ts:85](https://github.com/Xunnamius/test-utils/blob/ba2bb54f0f2d41708034e4076c72856c63c5167a/packages/test-mock-fixture/src/fixtures/webpack-test.ts#L85)

This fixture initializes the dummy root directory with an index file under
`src` and an optional `webpack.config.mjs` file (both described by
`initialVirtualFiles`), executes Webpack, and then attempts to run the
resultant file (described by `fileUnderTest`).

The index file must have a path matching the pattern `src/index${extension}`;
it can have any of the following extensions: `.js`, `.cjs`, `.mjs`, `.jsx`,
`.ts`, `.cts`, `.mts`, `.tsx`.

## Returns

[`WebpackTestFixture`](../type-aliases/WebpackTestFixture.md)
