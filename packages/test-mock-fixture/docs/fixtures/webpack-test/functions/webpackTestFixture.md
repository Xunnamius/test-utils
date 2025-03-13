[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/webpack-test](../README.md) / webpackTestFixture

# Function: webpackTestFixture()

> **webpackTestFixture**(): [`WebpackTestFixture`](../type-aliases/WebpackTestFixture.md)

Defined in: [fixtures/webpack-test.ts:92](https://github.com/Xunnamius/test-utils/blob/d96a64d2a590f310ff9665ced169fcb337fa2189/packages/test-mock-fixture/src/fixtures/webpack-test.ts#L92)

This fixture initializes the dummy root directory with an index file under
`src` and an optional `webpack.config.mjs` file (both described by
`initialVirtualFiles`), executes Webpack, and then attempts to run the
resultant file (described by `fileUnderTest`) using Node.js.

Node.js is invoked with the `FORCE_COLOR=false`, `NO_COLOR=true`, and
`DEBUG_COLORS=false` environment variables (among other options) as well as
the `--no-warnings`, `--experimental-json-modules`, and
`--experimental-vm-modules` flags.

The index file must have a path matching the pattern `src/index${extension}`;
it can have any of the following extensions: `.js`, `.cjs`, `.mjs`, `.jsx`,
`.ts`, `.cts`, `.mts`, `.tsx`.

## Returns

[`WebpackTestFixture`](../type-aliases/WebpackTestFixture.md)
