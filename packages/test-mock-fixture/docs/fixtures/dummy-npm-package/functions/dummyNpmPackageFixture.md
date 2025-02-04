[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/dummy-npm-package](../README.md) / dummyNpmPackageFixture

# Function: dummyNpmPackageFixture()

> **dummyNpmPackageFixture**(): [`DummyNpmPackageFixture`](../type-aliases/DummyNpmPackageFixture.md)

Defined in: [fixtures/dummy-npm-package.ts:69](https://github.com/Xunnamius/test-utils/blob/7f7e115f89b6524c00da237b9112899ec640d519/packages/test-mock-fixture/src/fixtures/dummy-npm-package.ts#L69)

This fixture initializes the dummy root directory as a NPM package with a
package.json file (optionally described by `initialVirtualFiles`) and
node_modules subdirectory.

If a `packageUnderTest` is provided, and it is namespaced (e.g.
"@-xun/symbiote"), an empty directory will be created using the namespace as
its name (e.g. `node_modules/@-xun`).

## Returns

[`DummyNpmPackageFixture`](../type-aliases/DummyNpmPackageFixture.md)
