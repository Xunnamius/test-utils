[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / ensurePackageHasBeenBuilt

# Function: ensurePackageHasBeenBuilt()

> **ensurePackageHasBeenBuilt**(`packageRoot`, `packageName`, `packageExports`): `Promise`\<`void`\>

Defined in: [packages/jest/src/index.ts:302](https://github.com/Xunnamius/test-utils/blob/05a8da2ba98451988365d5297a9261e32bd0d8dd/packages/jest/src/index.ts#L302)

This function will throw if `packageName` (at `packageRoot`) has one or more
inaccessible entry points defined in `packageExports`.

## Parameters

### packageRoot

`AbsolutePath`

### packageName

`undefined` | `string`

### packageExports

`undefined` | `Exports`

## Returns

`Promise`\<`void`\>
