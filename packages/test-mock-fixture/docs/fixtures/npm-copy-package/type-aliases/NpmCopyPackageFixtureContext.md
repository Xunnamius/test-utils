[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/npm-copy-package](../README.md) / NpmCopyPackageFixtureContext

# Type Alias: NpmCopyPackageFixtureContext

> **NpmCopyPackageFixtureContext**: `Tagged`\<`EmptyObject`, *typeof* [`npmCopyPackageFixtureName`](../variables/npmCopyPackageFixtureName.md)\>

Defined in: [fixtures/npm-copy-package.ts:113](https://github.com/Xunnamius/test-utils/blob/7f7e115f89b6524c00da237b9112899ec640d519/packages/test-mock-fixture/src/fixtures/npm-copy-package.ts#L113)

Contains any additional context properties this fixture makes available by
the time its `setup` function has successfully executed.

It is the sole responsibility of this fixture to ensure the context contains
the mentioned properties as described.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same properties
(or no properties).

## See

[npmCopyPackageFixture](../functions/npmCopyPackageFixture.md)
