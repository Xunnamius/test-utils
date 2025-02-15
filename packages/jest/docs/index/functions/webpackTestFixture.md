[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / webpackTestFixture

# Function: webpackTestFixture()

> **webpackTestFixture**(): [`WebpackTestFixture`](../type-aliases/WebpackTestFixture.md)

Defined in: packages/test-mock-fixture/dist/packages/test-mock-fixture/src/fixtures/webpack-test.d.ts:61

This fixture initializes the dummy root directory with an index file under
`src` and an optional `webpack.config.mjs` file (both described by
`initialVirtualFiles`), executes Webpack, and then attempts to run the
resultant file (described by `fileUnderTest`).

The index file must have a path matching the pattern `src/index${extension}`;
it can have any of the following extensions: `.js`, `.cjs`, `.mjs`, `.jsx`,
`.ts`, `.cts`, `.mts`, `.tsx`.

## Returns

[`WebpackTestFixture`](../type-aliases/WebpackTestFixture.md)
