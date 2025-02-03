[**@-xun/test-mock-import**](../../README.md)

***

[@-xun/test-mock-import](../../README.md) / [index](../README.md) / protectedImportFactory

# Function: protectedImportFactory()

> **protectedImportFactory**\<`T`\>(`path`): (`factoryOptions`?) => `Promise`\<`T`\>

Defined in: [index.ts:78](https://github.com/Xunnamius/test-utils/blob/fb7ffeb540b6329cd58507a70130e011f552c63c/packages/test-mock-import/src/index.ts#L78)

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
