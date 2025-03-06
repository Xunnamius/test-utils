[**@-xun/test-mock-import**](../../README.md)

***

[@-xun/test-mock-import](../../README.md) / [index](../README.md) / protectedImportFactory

# Function: protectedImportFactory()

> **protectedImportFactory**\<`Module`\>(...`__namedParameters`): \<`LocalModule`\>(`__namedParameters`) => `Promise`\<`LocalModule`\>

Defined in: [index.ts:99](https://github.com/Xunnamius/test-utils/blob/1df65121d10d402c0b61b1fd2d7f30e0ea836dbe/packages/test-mock-import/src/index.ts#L99)

Returns a function that, when invoked, performs a CJS module import (via
`require`) as if it were being imported for the first time. Also awaits the
import result and protects the caller from any calls to `process.exit` from
the imported module.

Use `expectedExitCode` when the import is expected to terminate with a
specific exit code.

## Type Parameters

• **Module**

## Parameters

### \_\_namedParameters

...\[`string` \| `AbsolutePath`, [`IsolatedImportOptions`](../type-aliases/IsolatedImportOptions.md)\]

## Returns

`Function`

### Type Parameters

• **LocalModule** = `Module`

### Parameters

#### \_\_namedParameters

[`IsolatedImportOptions`](../type-aliases/IsolatedImportOptions.md) & `object` = `{}`

### Returns

`Promise`\<`LocalModule`\>

## See

[isolatedImport](isolatedImport.md)
