[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [types/fixtures](../README.md) / FixtureFs

# Type Alias: FixtureFs

> **FixtureFs**: `object` & `Omit`\<*typeof* `fs`, `"constants"` \| `"glob"`\>

Defined in: [types/fixtures.ts:188](https://github.com/Xunnamius/test-utils/blob/7f7e115f89b6524c00da237b9112899ec640d519/packages/test-mock-fixture/src/types/fixtures.ts#L188)

Context-sensitive asynchronous wrappers for `node:fs/promises` functions
(excluding fs.glob) with in-build debugging and exception handling.

Note that all relative `PathLike` parameters are considered local to `root`,
not the current working directory, and will be translated into
AbsolutePaths as such.

## Type declaration

### isAccessible()

> **isAccessible**: (...`args`) => `Promise`\<`boolean`\>

Identical to fs.access except it returns a boolean indicating
accessibility.

#### Parameters

##### args

...`Parameters`\<*typeof* `fs.access`\>

#### Returns

`Promise`\<`boolean`\>
