[**@-xun/common-dummies**](../../README.md)

***

[@-xun/common-dummies](../../README.md) / [repositories](../README.md) / PackageMapDatum

# Type Alias: PackageMapDatum

> **PackageMapDatum**: `object`

Defined in: [repositories.ts:97](https://github.com/Xunnamius/test-utils/blob/5ff40c77a98ed0a1d0df44772fe12318f1efb439/packages/common-dummies/src/repositories.ts#L97)

A type represents an object that will be expanded into a
[PackageMapEntry](PackageMapEntry.md).

## Type declaration

### attributes

> **attributes**: `WorkspacePackage`\[`"attributes"`\]

### name

> **name**: `string`

A package's name (for named packages) or its id (for unnamed packages).

### root

> **root**: `RelativePath` \| `string`

A **relative** path to a dummy project root (will be made absolute later).
