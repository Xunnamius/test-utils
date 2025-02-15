[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [types/fixtures](../README.md) / FixtureFs

# Type Alias: FixtureFs

> **FixtureFs**: `object` & `Omit`\<*typeof* `fs`, `"constants"` \| `"glob"`\>

Defined in: [types/fixtures.ts:198](https://github.com/Xunnamius/test-utils/blob/4d9800c324b9a83f9e55d66c6e4ccd83762bef71/packages/test-mock-fixture/src/types/fixtures.ts#L198)

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
