[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/npm-link-package](../README.md) / npmLinkPackageFixture

# Function: npmLinkPackageFixture()

> **npmLinkPackageFixture**(): [`NpmLinkPackageFixture`](../type-aliases/NpmLinkPackageFixture.md)

Defined in: [fixtures/npm-link-package.ts:76](https://github.com/Xunnamius/test-utils/blob/e96d066a8d31079cb061bc2dac285562fbf7b708/packages/test-mock-fixture/src/fixtures/npm-link-package.ts#L76)

This fixture is similar to `npmCopyPackage` except it makes a symbolic link
(soft link) in the dummy root directory's `node_modules` subdirectory
pointing to the package under test's `dist/` directory (which is typically
created by `dummyNpmPackage`).

It is also very similar to the `npm link` command but without any of the
baggage.

**This fixture should be preferred over `npmCopyPackage` whenever the package
under test has peer dependencies.** Using `npmCopyPackage` with a package
that has peer dependencies could manifest something akin to the dual package
hazard.

## Returns

[`NpmLinkPackageFixture`](../type-aliases/NpmLinkPackageFixture.md)
