[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/node-import-and-run-test](../README.md) / nodeImportAndRunTestFixture

# Function: nodeImportAndRunTestFixture()

> **nodeImportAndRunTestFixture**(): [`NodeImportAndRunTestFixture`](../type-aliases/NodeImportAndRunTestFixture.md)

Defined in: [fixtures/node-import-and-run-test.ts:114](https://github.com/Xunnamius/test-utils/blob/3c079421bf89bc52feb9a33221326ac6f32a13b7/packages/test-mock-fixture/src/fixtures/node-import-and-run-test.ts#L114)

This fixture initializes the dummy root directory with an index file under
`src` (described by `initialVirtualFiles`) and then executes it using node
(by default). It is expected that this file imports and tests the package
under test.

The index file must have a path matching the pattern `src/index${extension}`
or `src/index.test${extension}`; it can have any of the following extensions:
`.js`, `.cjs`, `.mjs`, `.jsx`, `.ts`, `.cts`, `.mts`, `.tsx`.

## Returns

[`NodeImportAndRunTestFixture`](../type-aliases/NodeImportAndRunTestFixture.md)
