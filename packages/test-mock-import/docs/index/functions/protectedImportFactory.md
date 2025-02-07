[**@-xun/test-mock-import**](../../README.md)

***

[@-xun/test-mock-import](../../README.md) / [index](../README.md) / protectedImportFactory

# Function: protectedImportFactory()

> **protectedImportFactory**\<`T`\>(`path`): (`factoryOptions`?) => `Promise`\<`T`\>

Defined in: [index.ts:83](https://github.com/Xunnamius/test-utils/blob/9033e9ea3146afb87c480e2950dbcd9de7baa843/packages/test-mock-import/src/index.ts#L83)

Returns a function that, when invoked, performs a module import as if it were
being imported for the first time.

Use `expectedExitCode` when the import is expected to terminate with a
specific exit code.

## Type Parameters

• **T**

## Parameters

### path

`string`

## Returns

`Function`

### Parameters

#### factoryOptions?

##### expectedExitCode

`number`

### Returns

`Promise`\<`T`\>

## See

[isolatedImport](isolatedImport.md)
