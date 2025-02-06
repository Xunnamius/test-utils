[**@-xun/common-dummies**](../../README.md)

***

[@-xun/common-dummies](../../README.md) / [repositories](../README.md) / patchReadXPackageJsonAtRoot

# Function: patchReadXPackageJsonAtRoot()

> **patchReadXPackageJsonAtRoot**(`spec`, `options`?): `object`

Defined in: [repositories.ts:201](https://github.com/Xunnamius/test-utils/blob/5ff40c77a98ed0a1d0df44772fe12318f1efb439/packages/common-dummies/src/repositories.ts#L201)

Patch the package.json data returned by fs.readXPackageJsonAtRoot or
the sync version before attempting to read in package data from a dummy
repository.

Successive calls to this function overwrite previous calls.

## Parameters

### spec

The `package.json` patches to apply per root path. When `root` is equal to
`"*"`, it will be used to patch all `package.json` imports but can be
overwritten by a more specific `root` string.

### options?

Options that influence the patching process.

#### replace

`boolean`

Whether to merely patch the actual package.json contents (`undefined`),
completely replace them (`true`), or only overwrite them if they don't
already exist (`false`).

**Default**

```ts
undefined
```

## Returns

`object`
