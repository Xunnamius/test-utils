[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/dummy-npm-package](../README.md) / DummyNpmPackageFixtureContext

# Type Alias: DummyNpmPackageFixtureContext

> **DummyNpmPackageFixtureContext** = `Tagged`\<`EmptyObject`, *typeof* [`dummyNpmPackageFixtureName`](../variables/dummyNpmPackageFixtureName.md)\>

Defined in: [fixtures/dummy-npm-package.ts:76](https://github.com/Xunnamius/test-utils/blob/47f33d69abeb32464a6a4e66b6c89c313568151a/packages/test-mock-fixture/src/fixtures/dummy-npm-package.ts#L76)

Contains any additional context properties this fixture makes available by
the time its `setup` function has successfully executed.

It is the sole responsibility of this fixture to ensure the context contains
the mentioned properties as described.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same properties
(or no properties).

## See

[dummyNpmPackageFixture](../functions/dummyNpmPackageFixture.md)
