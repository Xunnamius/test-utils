[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / ensurePackageHasBeenBuilt

# Function: ensurePackageHasBeenBuilt()

> **ensurePackageHasBeenBuilt**(`packageRoot`, `packageName`, `packageExports`): `Promise`\<`void`\>

Defined in: [jest/src/index.ts:313](https://github.com/Xunnamius/test-utils/blob/83a06ce4487c15236c9766b3cfc9da0179151fe4/packages/jest/src/index.ts#L313)

This function will throw if at least one of `packageName`'s entry points
(relative to `packageRoot` and as defined in `packageExports`, are
inaccessible. If this package has no entry points, this function becomes a
no-op.

## Parameters

### packageRoot

`AbsolutePath`

### packageName

`string` \| `undefined`

### packageExports

`Exports` \| `undefined`

## Returns

`Promise`\<`void`\>
