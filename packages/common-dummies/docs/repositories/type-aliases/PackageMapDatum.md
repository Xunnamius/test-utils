[**@-xun/common-dummies**](../../README.md)

***

[@-xun/common-dummies](../../README.md) / [repositories](../README.md) / PackageMapDatum

# Type Alias: PackageMapDatum

> **PackageMapDatum** = `object`

Defined in: [repositories.ts:105](https://github.com/Xunnamius/test-utils/blob/3b435a2b1221c04401a80fa8bae8755ff8a9fcb3/packages/common-dummies/src/repositories.ts#L105)

A type represents an object that will be expanded into a
[PackageMapEntry](PackageMapEntry.md).

## Properties

### attributes

> **attributes**: `WorkspacePackage`\[`"attributes"`\]

Defined in: [repositories.ts:114](https://github.com/Xunnamius/test-utils/blob/3b435a2b1221c04401a80fa8bae8755ff8a9fcb3/packages/common-dummies/src/repositories.ts#L114)

***

### name

> **name**: `string`

Defined in: [repositories.ts:109](https://github.com/Xunnamius/test-utils/blob/3b435a2b1221c04401a80fa8bae8755ff8a9fcb3/packages/common-dummies/src/repositories.ts#L109)

A package's name (for named packages) or its id (for unnamed packages).

***

### root

> **root**: `RelativePath` \| `string`

Defined in: [repositories.ts:113](https://github.com/Xunnamius/test-utils/blob/3b435a2b1221c04401a80fa8bae8755ff8a9fcb3/packages/common-dummies/src/repositories.ts#L113)

A **relative** path to a dummy project root (will be made absolute later).
