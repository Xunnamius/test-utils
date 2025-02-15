[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/npm-copy-package](../README.md) / NpmCopyPackageFixtureOptions

# Type Alias: NpmCopyPackageFixtureOptions

> **NpmCopyPackageFixtureOptions**: `Tagged`\<\{ `ignorePackageDependencies`: \{ `bundledDependencies`: `boolean`; `dependencies`: `boolean`; `devDependencies`: `boolean`; `optionalDependencies`: `boolean`; `peerDependencies`: `boolean`; `peerDependenciesMeta`: `boolean`; \}; `packageUnderTest`: `Omit`\<`GenericPackage`, `"projectMetadata"`\>; `runInstallScripts`: `boolean`; \}, *typeof* [`npmCopyPackageFixtureName`](../variables/npmCopyPackageFixtureName.md)\>

Defined in: [fixtures/npm-copy-package.ts:36](https://github.com/Xunnamius/test-utils/blob/4d9800c324b9a83f9e55d66c6e4ccd83762bef71/packages/test-mock-fixture/src/fixtures/npm-copy-package.ts#L36)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[npmCopyPackageFixture](../functions/npmCopyPackageFixture.md)
