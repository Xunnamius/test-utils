[**@-xun/common-dummies**](../../README.md)

***

[@-xun/common-dummies](../../README.md) / [repositories](../README.md) / PackageMapDatum

# Type Alias: PackageMapDatum

> **PackageMapDatum**: `object`

Defined in: [repositories.ts:101](https://github.com/Xunnamius/test-utils/blob/a81934d0157921b7a8f294e8a816544125dfa250/packages/common-dummies/src/repositories.ts#L101)

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
