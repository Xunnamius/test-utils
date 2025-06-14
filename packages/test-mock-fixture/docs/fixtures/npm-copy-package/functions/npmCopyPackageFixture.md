[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/npm-copy-package](../README.md) / npmCopyPackageFixture

# Function: npmCopyPackageFixture()

> **npmCopyPackageFixture**(): [`NpmCopyPackageFixture`](../type-aliases/NpmCopyPackageFixture.md)

Defined in: [fixtures/npm-copy-package.ts:140](https://github.com/Xunnamius/test-utils/blob/ab2596fc4d6717a0af0b4c54a57434e0e2fb3420/packages/test-mock-fixture/src/fixtures/npm-copy-package.ts#L140)

This fixture is similar to `npmLinkPackage` except it copies all of the
distributables, identified by the package under test's `package.json` `files`
field, into the dummy `node_modules` directory created by a fixture like
`dummyNpmPackage`.

Also unlike `npmLinkPackage`, this fixture will install all of the package
under test's dependencies (with respect to
[NpmCopyPackageFixtureOptions.ignorePackageDependencies](../type-aliases/NpmCopyPackageFixtureOptions.md)) into the
dummy `node_modules` as well.

This fixture should be preferred over `npmLinkPackage` **only if the package
under test does _not_ have peer dependencies.** If said package _does_ have
peer dependencies, then using this fixture could manifest something akin to
the dual package hazard.

## Returns

[`NpmCopyPackageFixture`](../type-aliases/NpmCopyPackageFixture.md)
