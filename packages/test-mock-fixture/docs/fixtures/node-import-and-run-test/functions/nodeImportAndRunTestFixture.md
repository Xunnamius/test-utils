[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/node-import-and-run-test](../README.md) / nodeImportAndRunTestFixture

# Function: nodeImportAndRunTestFixture()

> **nodeImportAndRunTestFixture**(): [`NodeImportAndRunTestFixture`](../type-aliases/NodeImportAndRunTestFixture.md)

Defined in: [fixtures/node-import-and-run-test.ts:103](https://github.com/Xunnamius/test-utils/blob/47f33d69abeb32464a6a4e66b6c89c313568151a/packages/test-mock-fixture/src/fixtures/node-import-and-run-test.ts#L103)

This fixture initializes the dummy root directory with an index file under
`src` (described by `initialVirtualFiles`) and then executes it using node
(by default). It is expected that this file imports and tests the package
under test.

The index file must have a path matching the pattern `src/index${extension}`
or `src/index.test${extension}`; it can have any of the following extensions:
`.js`, `.cjs`, `.mjs`, `.jsx`, `.ts`, `.cts`, `.mts`, `.tsx`.

## Returns

[`NodeImportAndRunTestFixture`](../type-aliases/NodeImportAndRunTestFixture.md)
