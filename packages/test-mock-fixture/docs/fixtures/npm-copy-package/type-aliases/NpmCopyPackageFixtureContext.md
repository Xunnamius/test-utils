[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/npm-copy-package](../README.md) / NpmCopyPackageFixtureContext

# Type Alias: NpmCopyPackageFixtureContext

> **NpmCopyPackageFixtureContext** = `Tagged`\<`EmptyObject`, *typeof* [`npmCopyPackageFixtureName`](../variables/npmCopyPackageFixtureName.md)\>

Defined in: [fixtures/npm-copy-package.ts:119](https://github.com/Xunnamius/test-utils/blob/ab2596fc4d6717a0af0b4c54a57434e0e2fb3420/packages/test-mock-fixture/src/fixtures/npm-copy-package.ts#L119)

Contains any additional context properties this fixture makes available by
the time its `setup` function has successfully executed.

It is the sole responsibility of this fixture to ensure the context contains
the mentioned properties as described.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same properties
(or no properties).

## See

[npmCopyPackageFixture](../functions/npmCopyPackageFixture.md)
