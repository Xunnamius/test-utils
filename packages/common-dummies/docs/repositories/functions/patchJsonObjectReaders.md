[**@-xun/common-dummies**](../../README.md)

***

[@-xun/common-dummies](../../README.md) / [repositories](../README.md) / patchJsonObjectReaders

# Function: patchJsonObjectReaders()

> **patchJsonObjectReaders**(`spec`, `options?`): `Record`\<`string`, `JsonObject` \| `undefined`\>

Defined in: [repositories.ts:221](https://github.com/Xunnamius/test-utils/blob/3b435a2b1221c04401a80fa8bae8755ff8a9fcb3/packages/common-dummies/src/repositories.ts#L221)

Apply one or more patches to the per-`filePath` (AbsolutePath) JSON
file content returned by the sync and async forms of
fs.readXPackageJsonAtRoot, fs.readJson, and
fs.readJsonc.

Note that (1) successive calls to this function overwrite previous calls and
(2) patches are not cached. The real JSON read results _are_ cached
(depending on `useCached`); however, these results are not directly visible
to the caller as the patch is re-applied on every invocation, **meaning a new
object is always returned**.

Also note that this function only works with files containing a _root JSON
object_. Attempting to use this function with files containing some other
JSON type at its root, like an array or primitive, will result in undefined
behavior.

## Parameters

### spec

The JSON patches to apply per `filePath` AbsolutePath. When
`filePath` is equal to `"*"`, it will be used to patch all JSON
imports but can be overwritten by a more specific `filePath` in the same
`spec`.

#### *?

`JsonObject`

### options?

Options that influence the patching process.

#### replace?

`boolean`

Whether to add _missing_ keys from the patch to the result but not
overwrite any existing keys (`false`), _completely_ replace the entire
result with the patch (`true`), or `Object.assign` the patch on top of
the result (`undefined`).

Note that valid XPackageJson objects must always have a `name`
property defined.

**Default**

```ts
undefined
```

## Returns

`Record`\<`string`, `JsonObject` \| `undefined`\>

`spec`
