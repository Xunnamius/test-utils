[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/npm-link-package](../README.md) / NpmLinkPackageFixtureOptions

# Type Alias: NpmLinkPackageFixtureOptions

> **NpmLinkPackageFixtureOptions**: `Tagged`\<\{ `packageUnderTest`: `Omit`\<`GenericPackage`, `"projectMetadata"`\>; \}, *typeof* [`npmLinkPackageFixtureName`](../variables/npmLinkPackageFixtureName.md)\>

Defined in: [fixtures/npm-link-package.ts:34](https://github.com/Xunnamius/test-utils/blob/7f7e115f89b6524c00da237b9112899ec640d519/packages/test-mock-fixture/src/fixtures/npm-link-package.ts#L34)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[npmLinkPackageFixture](../functions/npmLinkPackageFixture.md)
