[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/dummy-npm-package](../README.md) / dummyNpmPackageFixture

# Function: dummyNpmPackageFixture()

> **dummyNpmPackageFixture**(): [`DummyNpmPackageFixture`](../type-aliases/DummyNpmPackageFixture.md)

Defined in: [fixtures/dummy-npm-package.ts:98](https://github.com/Xunnamius/test-utils/blob/99c8b308dc0d050ece89ef0ebf19be4e45b535dc/packages/test-mock-fixture/src/fixtures/dummy-npm-package.ts#L98)

This fixture initializes the dummy root directory as a NPM package with a
`package.json` file (optionally described by `initialVirtualFiles`) and
node_modules subdirectory. If said `package.json` file contains any
dependencies, they will be installed courtesy of `npm install`. Additional
packages can also be installed via
[DummyNpmPackageFixtureOptions.additionalPackagesToInstall](../type-aliases/DummyNpmPackageFixtureOptions.md).

All packages are always installed with `--force`.

If a `packageUnderTest` is provided, and it is namespaced (e.g.
"@-xun/symbiote"), an empty directory will be created using the namespace as
its name (e.g. `node_modules/@-xun`).

Note that the `packageUnderTest` is not the same thing as the dummy root NPM
package; the latter typically imports/tests the former.

## Returns

[`DummyNpmPackageFixture`](../type-aliases/DummyNpmPackageFixture.md)
