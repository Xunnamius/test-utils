[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / ensurePackageHasBeenBuilt

# Function: ensurePackageHasBeenBuilt()

> **ensurePackageHasBeenBuilt**(`packageRoot`, `packageName`, `packageExports`): `Promise`\<`void`\>

Defined in: [packages/jest/src/index.ts:309](https://github.com/Xunnamius/test-utils/blob/857d913bff2cd7208e2ce9325872641b4d92d7ca/packages/jest/src/index.ts#L309)

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
