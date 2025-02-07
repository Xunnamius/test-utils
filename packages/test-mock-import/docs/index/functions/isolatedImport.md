[**@-xun/test-mock-import**](../../README.md)

***

[@-xun/test-mock-import](../../README.md) / [index](../README.md) / isolatedImport

# Function: isolatedImport()

> **isolatedImport**\<`T`\>(`specifier`, `options`?): `T`

Defined in: [index.ts:38](https://github.com/Xunnamius/test-utils/blob/9033e9ea3146afb87c480e2950dbcd9de7baa843/packages/test-mock-import/src/index.ts#L38)

Performs a module import as if it were being imported for the first time.

Note that this function breaks the "require caching" expectation of Node.js
modules. Problems can arise, for example, when closing an app-wide database
connection in your test cleanup phase and expecting it to close for the
isolated module too. In this case, the isolated module has its own isolated
"app-wide" connection that would not actually be closed and could cause your
test to hang unexpectedly, even when all tests pass.

## Type Parameters

• **T**

## Parameters

### specifier

Specifier or absolute path to the module under test. Module resolution is
handled by `require`, therefore the specifier, if a filesystem path, should
never be relative and must always use unix-style separators (i.e. `/`).

`string` | `AbsolutePath`

### options?

[`IsolatedImportOptions`](../type-aliases/IsolatedImportOptions.md)

## Returns

`T`
