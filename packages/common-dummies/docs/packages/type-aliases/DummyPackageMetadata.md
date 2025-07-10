[**@-xun/common-dummies**](../../README.md)

***

[@-xun/common-dummies](../../README.md) / [packages](../README.md) / DummyPackageMetadata

# Type Alias: DummyPackageMetadata\<RequireObjectImports, RequireObjectExports\>

> **DummyPackageMetadata**\<`RequireObjectImports`, `RequireObjectExports`\> = `object`

Defined in: [packages.ts:28](https://github.com/Xunnamius/test-utils/blob/072a29182b2d1e59efc0afb784fe4e6ee9b39e4f/packages/common-dummies/src/packages.ts#L28)

Represents the dummy package metadata returned by the `getDummyPackage`
function.

## Type Parameters

### RequireObjectImports

`RequireObjectImports` *extends* `boolean` = `false`

### RequireObjectExports

`RequireObjectExports` *extends* `boolean` = `false`

## Properties

### name

> **name**: `string`

Defined in: [packages.ts:33](https://github.com/Xunnamius/test-utils/blob/072a29182b2d1e59efc0afb784fe4e6ee9b39e4f/packages/common-dummies/src/packages.ts#L33)

***

### packageJson

> **packageJson**: `Merge`\<`XPackageJson`, \{ `exports`: `RequireObjectExports` *extends* `true` ? `Exclude`\<`XPackageJson`\[`"exports"`\], `string` \| `undefined` \| `null` \| `unknown`[]\> : `XPackageJson`\[`"exports"`\] \| `undefined`; `imports`: `RequireObjectImports` *extends* `true` ? `Exclude`\<`XPackageJson`\[`"imports"`\], `string` \| `undefined` \| `null` \| `unknown`[]\> : `XPackageJson`\[`"imports"`\] \| `undefined`; \}\>

Defined in: [packages.ts:34](https://github.com/Xunnamius/test-utils/blob/072a29182b2d1e59efc0afb784fe4e6ee9b39e4f/packages/common-dummies/src/packages.ts#L34)

***

### path

> **path**: `AbsolutePath`

Defined in: [packages.ts:32](https://github.com/Xunnamius/test-utils/blob/072a29182b2d1e59efc0afb784fe4e6ee9b39e4f/packages/common-dummies/src/packages.ts#L32)
