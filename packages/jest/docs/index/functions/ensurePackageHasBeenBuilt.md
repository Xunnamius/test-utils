[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / ensurePackageHasBeenBuilt

# Function: ensurePackageHasBeenBuilt()

> **ensurePackageHasBeenBuilt**(`packageRoot`, `packageName`, `packageExports`): `Promise`\<`void`\>

Defined in: [packages/jest/src/index.ts:313](https://github.com/Xunnamius/test-utils/blob/ddc98d6724564c6aa1b8c427a63c41e54d5d77d6/packages/jest/src/index.ts#L313)

This function will throw if at least one of `packageName`'s entry points
(relative to `packageRoot` and as defined in `packageExports`, are
inaccessible. If this package has no entry points, this function becomes a
no-op.

## Parameters

### packageRoot

`AbsolutePath`

### packageName

`undefined` | `string`

### packageExports

`undefined` | `Exports`

## Returns

`Promise`\<`void`\>
