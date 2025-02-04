[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / npmCopyPackageFixture

# Function: npmCopyPackageFixture()

> **npmCopyPackageFixture**(): [`NpmCopyPackageFixture`](../type-aliases/NpmCopyPackageFixture.md)

Defined in: packages/test-mock-fixture/dist/packages/test-mock-fixture/src/fixtures/npm-copy-package.d.ts:98

This fixture is similar to `npmLinkPackage` except it copies all of the
distributables, identified by the package under test's `package.json` `files`
field, into the dummy `node_modules` directory created by a fixture like
`dummyNpmPackage`.

## Returns

[`NpmCopyPackageFixture`](../type-aliases/NpmCopyPackageFixture.md)
