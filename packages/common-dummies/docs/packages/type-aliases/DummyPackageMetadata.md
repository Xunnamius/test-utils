[**@-xun/common-dummies**](../../README.md)

***

[@-xun/common-dummies](../../README.md) / [packages](../README.md) / DummyPackageMetadata

# Type Alias: DummyPackageMetadata\<RequireObjectImports, RequireObjectExports\>

> **DummyPackageMetadata**\<`RequireObjectImports`, `RequireObjectExports`\>: `object`

Defined in: [packages.ts:29](https://github.com/Xunnamius/test-utils/blob/11f98199f9fbc8df663d33cd2be8dfcd0eac52c4/packages/common-dummies/src/packages.ts#L29)

Represents the dummy package metadata returned by the `getDummyPackage`
function.

## Type Parameters

• **RequireObjectImports** *extends* `boolean` = `false`

• **RequireObjectExports** *extends* `boolean` = `false`

## Type declaration

### name

> **name**: `string`

### packageJson

> **packageJson**: `Merge`\<`XPackageJson`, \{ `exports`: `RequireObjectExports` *extends* `true` ? `Exclude`\<`XPackageJson`\[`"exports"`\], `string` \| `undefined` \| `null` \| `unknown`[]\> : `XPackageJson`\[`"exports"`\] \| `undefined`; `imports`: `RequireObjectImports` *extends* `true` ? `Exclude`\<`XPackageJson`\[`"imports"`\], `string` \| `undefined` \| `null` \| `unknown`[]\> : `XPackageJson`\[`"imports"`\] \| `undefined`; \}\>

### path

> **path**: `AbsolutePath`
