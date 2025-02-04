[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/dummy-npm-package](../README.md) / DummyNpmPackageFixtureOptions

# Type Alias: DummyNpmPackageFixtureOptions

> **DummyNpmPackageFixtureOptions**: `Tagged`\<\{ `packageUnderTest`: `Omit`\<`GenericPackage`, `"projectMetadata"`\>; \}, *typeof* [`dummyNpmPackageFixtureName`](../variables/dummyNpmPackageFixtureName.md)\>

Defined in: [fixtures/dummy-npm-package.ts:32](https://github.com/Xunnamius/test-utils/blob/7f7e115f89b6524c00da237b9112899ec640d519/packages/test-mock-fixture/src/fixtures/dummy-npm-package.ts#L32)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[dummyNpmPackageFixture](../functions/dummyNpmPackageFixture.md)
