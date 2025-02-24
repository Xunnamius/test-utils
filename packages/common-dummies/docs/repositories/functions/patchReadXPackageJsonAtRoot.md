[**@-xun/common-dummies**](../../README.md)

***

[@-xun/common-dummies](../../README.md) / [repositories](../README.md) / patchReadXPackageJsonAtRoot

# Function: patchReadXPackageJsonAtRoot()

> **patchReadXPackageJsonAtRoot**(`spec`, `options`?): `Record`\<`string`, `undefined` \| `XPackageJson`\>

Defined in: [repositories.ts:211](https://github.com/Xunnamius/test-utils/blob/a81934d0157921b7a8f294e8a816544125dfa250/packages/common-dummies/src/repositories.ts#L211)

Apply one or more patches to the per-`root` (AbsolutePath)
`package.json` file content returned by fs.readXPackageJsonAtRoot,
both sync and async.

Note that (1) successive calls to this function overwrite previous calls and
(2) patches are not cached. The real `package.json` read results _are_ cached
(depending on `useCached`); however, these results are not directly visible
to the caller as the patch is re-applied on every invocation, **meaning a new
object is always returned**.

## Parameters

### spec

The `package.json` patches to apply per `root` AbsolutePath. When
`root` is equal to `"*"`, it will be used to patch all `package.json`
imports but can be overwritten by a more specific `root` in the same
`spec`.

#### *?

`XPackageJson`

### options?

Options that influence the patching process.

#### replace?

`boolean`

Whether to add _missing_ keys from the patch to the result but not
overwrite any existing keys (`false`), _completely_ replace the entire
result with the patch (`true`), or `Object.assign` the patch on top of
the result (`undefined`).

Note that XPackageJson objects must always have a `name` property
defined.

**Default**

```ts
undefined
```

## Returns

`Record`\<`string`, `undefined` \| `XPackageJson`\>

`spec`
