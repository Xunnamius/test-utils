[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/dummy-npm-package](../README.md) / DummyNpmPackageFixtureOptions

# Type Alias: DummyNpmPackageFixtureOptions

> **DummyNpmPackageFixtureOptions** = `Tagged`\<\{ `additionalPackagesToInstall?`: `string` \| `string`[]; `installCommand?`: `"ci"` \| `"install"`; `packageUnderTest?`: `Omit`\<`GenericPackage`, `"projectMetadata"`\>; `runInstallScripts?`: `boolean`; \}, *typeof* [`dummyNpmPackageFixtureName`](../variables/dummyNpmPackageFixtureName.md)\>

Defined in: [fixtures/dummy-npm-package.ts:33](https://github.com/Xunnamius/test-utils/blob/99c8b308dc0d050ece89ef0ebf19be4e45b535dc/packages/test-mock-fixture/src/fixtures/dummy-npm-package.ts#L33)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[dummyNpmPackageFixture](../functions/dummyNpmPackageFixture.md)
