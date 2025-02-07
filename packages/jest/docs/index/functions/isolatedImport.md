[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / isolatedImport

# Function: isolatedImport()

> **isolatedImport**\<`T`\>(`specifier`, `options`?): `T`

Defined in: packages/test-mock-import/dist/packages/test-mock-import/src/index.d.ts:25

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
