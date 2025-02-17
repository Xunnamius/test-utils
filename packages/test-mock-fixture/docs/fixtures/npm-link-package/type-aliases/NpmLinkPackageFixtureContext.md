[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/npm-link-package](../README.md) / NpmLinkPackageFixtureContext

# Type Alias: NpmLinkPackageFixtureContext

> **NpmLinkPackageFixtureContext**: `Tagged`\<`EmptyObject`, *typeof* [`npmLinkPackageFixtureName`](../variables/npmLinkPackageFixtureName.md)\>

Defined in: [fixtures/npm-link-package.ts:57](https://github.com/Xunnamius/test-utils/blob/43516fe131cd8b7116ce91a3b07930504b016979/packages/test-mock-fixture/src/fixtures/npm-link-package.ts#L57)

Contains any additional context properties this fixture makes available by
the time its `setup` function has successfully executed.

It is the sole responsibility of this fixture to ensure the context contains
the mentioned properties as described.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same properties
(or no properties).

## See

[npmLinkPackageFixture](../functions/npmLinkPackageFixture.md)
