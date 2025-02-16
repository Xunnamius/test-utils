[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/webpack-test](../README.md) / webpackTestFixture

# Function: webpackTestFixture()

> **webpackTestFixture**(): [`WebpackTestFixture`](../type-aliases/WebpackTestFixture.md)

Defined in: [fixtures/webpack-test.ts:89](https://github.com/Xunnamius/test-utils/blob/c1219168b725e263abb557d96549b7b98bdb4b4c/packages/test-mock-fixture/src/fixtures/webpack-test.ts#L89)

This fixture initializes the dummy root directory with an index file under
`src` and an optional `webpack.config.mjs` file (both described by
`initialVirtualFiles`), executes Webpack, and then attempts to run the
resultant file (described by `fileUnderTest`) using Node.js.

Node.js is invoked with the `NODE_NO_WARNINGS=1`, `NO_COLOR=true`, and
`DEBUG_COLORS=false` environment variables.

The index file must have a path matching the pattern `src/index${extension}`;
it can have any of the following extensions: `.js`, `.cjs`, `.mjs`, `.jsx`,
`.ts`, `.cts`, `.mts`, `.tsx`.

## Returns

[`WebpackTestFixture`](../type-aliases/WebpackTestFixture.md)
