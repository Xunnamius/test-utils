[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/dummy-npm-package](../README.md) / dummyNpmPackageFixture

# Function: dummyNpmPackageFixture()

> **dummyNpmPackageFixture**(): [`DummyNpmPackageFixture`](../type-aliases/DummyNpmPackageFixture.md)

Defined in: [fixtures/dummy-npm-package.ts:95](https://github.com/Xunnamius/test-utils/blob/8adc4cb1f8839cdbfc73127a9281eecce47527fb/packages/test-mock-fixture/src/fixtures/dummy-npm-package.ts#L95)

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

## Returns

[`DummyNpmPackageFixture`](../type-aliases/DummyNpmPackageFixture.md)
