[**@-xun/common-dummies**](../../README.md)

***

[@-xun/common-dummies](../../README.md) / [repositories](../README.md) / PackageMapDatum

# Type Alias: PackageMapDatum

> **PackageMapDatum** = `object`

Defined in: [repositories.ts:104](https://github.com/Xunnamius/test-utils/blob/49f9360c5310eaab3dc0f63437084aa2e9ce98c5/packages/common-dummies/src/repositories.ts#L104)

A type represents an object that will be expanded into a
[PackageMapEntry](PackageMapEntry.md).

## Properties

### attributes

> **attributes**: `WorkspacePackage`\[`"attributes"`\]

Defined in: [repositories.ts:113](https://github.com/Xunnamius/test-utils/blob/49f9360c5310eaab3dc0f63437084aa2e9ce98c5/packages/common-dummies/src/repositories.ts#L113)

***

### name

> **name**: `string`

Defined in: [repositories.ts:108](https://github.com/Xunnamius/test-utils/blob/49f9360c5310eaab3dc0f63437084aa2e9ce98c5/packages/common-dummies/src/repositories.ts#L108)

A package's name (for named packages) or its id (for unnamed packages).

***

### root

> **root**: `RelativePath` \| `string`

Defined in: [repositories.ts:112](https://github.com/Xunnamius/test-utils/blob/49f9360c5310eaab3dc0f63437084aa2e9ce98c5/packages/common-dummies/src/repositories.ts#L112)

A **relative** path to a dummy project root (will be made absolute later).
