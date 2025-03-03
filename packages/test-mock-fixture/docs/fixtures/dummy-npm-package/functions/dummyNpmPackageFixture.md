[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/dummy-npm-package](../README.md) / dummyNpmPackageFixture

# Function: dummyNpmPackageFixture()

> **dummyNpmPackageFixture**(): [`DummyNpmPackageFixture`](../type-aliases/DummyNpmPackageFixture.md)

Defined in: [packages/test-mock-fixture/src/fixtures/dummy-npm-package.ts:98](https://github.com/Xunnamius/test-utils/blob/fbb0e2e25a6b2830b1b2ac319e054df42247cc53/packages/test-mock-fixture/src/fixtures/dummy-npm-package.ts#L98)

This fixture initializes the dummy root directory as a NPM package with a
`package.json` file (optionally described by `initialVirtualFiles`) and
node_modules subdirectory. If said `package.json` file contains any
dependencies, they will be installed courtesy of `npm install`. Additional
packages can also be installed via
DummyNpmPackageFixtureOptions.additionalPackagesToInstall.

All packages are always installed with `--force`.

If a `packageUnderTest` is provided, and it is namespaced (e.g.
"@-xun/symbiote"), an empty directory will be created using the namespace as
its name (e.g. `node_modules/@-xun`).

Note that the `packageUnderTest` is not the same thing as the dummy root NPM
package; the latter typically imports/tests the former.

## Returns

[`DummyNpmPackageFixture`](../type-aliases/DummyNpmPackageFixture.md)
