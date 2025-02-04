[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/npm-copy-package](../README.md) / npmCopyPackageFixture

# Function: npmCopyPackageFixture()

> **npmCopyPackageFixture**(): [`NpmCopyPackageFixture`](../type-aliases/NpmCopyPackageFixture.md)

Defined in: [fixtures/npm-copy-package.ts:124](https://github.com/Xunnamius/test-utils/blob/7f7e115f89b6524c00da237b9112899ec640d519/packages/test-mock-fixture/src/fixtures/npm-copy-package.ts#L124)

This fixture is similar to `npmLinkPackage` except it copies all of the
distributables, identified by the package under test's `package.json` `files`
field, into the dummy `node_modules` directory created by a fixture like
`dummyNpmPackage`.

## Returns

[`NpmCopyPackageFixture`](../type-aliases/NpmCopyPackageFixture.md)
