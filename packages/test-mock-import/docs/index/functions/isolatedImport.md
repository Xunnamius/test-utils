[**@-xun/test-mock-import**](../../README.md)

***

[@-xun/test-mock-import](../../README.md) / [index](../README.md) / isolatedImport

# Function: isolatedImport()

> **isolatedImport**\<`Module`\>(`specifier`, `options?`): `Module`

Defined in: [index.ts:44](https://github.com/Xunnamius/test-utils/blob/9024c56057c79230764d60ad560b31947bf59aed/packages/test-mock-import/src/index.ts#L44)

Performs a CJS module import (via `require`) as if it were being imported for
the first time.

Note that this function breaks the "require caching" expectation of Node.js
modules. Problems can arise, for example, when closing an app-wide database
connection in your test cleanup phase and expecting it to close for the
isolated module too. In this case, the isolated module has its own isolated
"app-wide" connection that would not actually be closed and could cause your
test to hang unexpectedly, even when all tests pass.

## Type Parameters

### Module

`Module`

## Parameters

### specifier

Specifier or absolute path to the module under test. Module resolution is
handled by `require`, therefore the specifier, if a filesystem path, should
never be relative and must always use unix-style separators (i.e. `/`).

`string` | `AbsolutePath`

### options?

[`IsolatedImportOptions`](../type-aliases/IsolatedImportOptions.md)

## Returns

`Module`
