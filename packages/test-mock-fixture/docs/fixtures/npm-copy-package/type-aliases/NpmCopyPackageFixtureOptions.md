[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/npm-copy-package](../README.md) / NpmCopyPackageFixtureOptions

# Type Alias: NpmCopyPackageFixtureOptions

> **NpmCopyPackageFixtureOptions**: `Tagged`\<`object` & `Pick`\<[`NodeImportAndRunTestFixtureOptions`](../../node-import-and-run-test/type-aliases/NodeImportAndRunTestFixtureOptions.md), `"npmInstall"` \| `"runInstallScripts"`\>, *typeof* [`npmCopyPackageFixtureName`](../variables/npmCopyPackageFixtureName.md)\>

Defined in: [fixtures/npm-copy-package.ts:39](https://github.com/Xunnamius/test-utils/blob/7f7e115f89b6524c00da237b9112899ec640d519/packages/test-mock-fixture/src/fixtures/npm-copy-package.ts#L39)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[npmCopyPackageFixture](../functions/npmCopyPackageFixture.md)
