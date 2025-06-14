[**@-xun/common-dummies**](../../README.md)

***

[@-xun/common-dummies](../../README.md) / [packages](../README.md) / DummyPackageMetadata

# Type Alias: DummyPackageMetadata\<RequireObjectImports, RequireObjectExports\>

> **DummyPackageMetadata**\<`RequireObjectImports`, `RequireObjectExports`\> = `object`

Defined in: [packages.ts:29](https://github.com/Xunnamius/test-utils/blob/27307f4c6ac10e7904921f29f478c424bc1f6ff1/packages/common-dummies/src/packages.ts#L29)

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

Defined in: [packages.ts:34](https://github.com/Xunnamius/test-utils/blob/27307f4c6ac10e7904921f29f478c424bc1f6ff1/packages/common-dummies/src/packages.ts#L34)

***

### packageJson

> **packageJson**: `Merge`\<`XPackageJson`, \{ `exports`: `RequireObjectExports` *extends* `true` ? `Exclude`\<`XPackageJson`\[`"exports"`\], `string` \| `undefined` \| `null` \| `unknown`[]\> : `XPackageJson`\[`"exports"`\] \| `undefined`; `imports`: `RequireObjectImports` *extends* `true` ? `Exclude`\<`XPackageJson`\[`"imports"`\], `string` \| `undefined` \| `null` \| `unknown`[]\> : `XPackageJson`\[`"imports"`\] \| `undefined`; \}\>

Defined in: [packages.ts:35](https://github.com/Xunnamius/test-utils/blob/27307f4c6ac10e7904921f29f478c424bc1f6ff1/packages/common-dummies/src/packages.ts#L35)

***

### path

> **path**: `AbsolutePath`

Defined in: [packages.ts:33](https://github.com/Xunnamius/test-utils/blob/27307f4c6ac10e7904921f29f478c424bc1f6ff1/packages/common-dummies/src/packages.ts#L33)
