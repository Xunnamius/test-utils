[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / ensurePackageHasBeenBuilt

# Function: ensurePackageHasBeenBuilt()

> **ensurePackageHasBeenBuilt**(`packageRoot`, `packageName`, `packageExports`): `Promise`\<`void`\>

Defined in: [packages/jest/src/index.ts:309](https://github.com/Xunnamius/test-utils/blob/ce054a33ff4bdd3f0de76d4683eddd8c8b67bfb2/packages/jest/src/index.ts#L309)

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
