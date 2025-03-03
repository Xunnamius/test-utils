[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/dummy-npm-package](../README.md) / DummyNpmPackageFixtureOptions

# Type Alias: DummyNpmPackageFixtureOptions

> **DummyNpmPackageFixtureOptions**: `Tagged`\<\{ `additionalPackagesToInstall`: `string` \| `string`[]; `installCommand`: `"ci"` \| `"install"`; `packageUnderTest`: `Omit`\<`GenericPackage`, `"projectMetadata"`\>; `runInstallScripts`: `boolean`; \}, *typeof* [`dummyNpmPackageFixtureName`](../variables/dummyNpmPackageFixtureName.md)\>

Defined in: [packages/test-mock-fixture/src/fixtures/dummy-npm-package.ts:33](https://github.com/Xunnamius/test-utils/blob/fbb0e2e25a6b2830b1b2ac319e054df42247cc53/packages/test-mock-fixture/src/fixtures/dummy-npm-package.ts#L33)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[dummyNpmPackageFixture](../functions/dummyNpmPackageFixture.md)
