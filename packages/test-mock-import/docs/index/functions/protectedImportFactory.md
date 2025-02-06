[**@-xun/test-mock-import**](../../README.md)

***

[@-xun/test-mock-import](../../README.md) / [index](../README.md) / protectedImportFactory

# Function: protectedImportFactory()

> **protectedImportFactory**\<`T`\>(`path`): (`factoryOptions`?) => `Promise`\<`T`\>

Defined in: [index.ts:79](https://github.com/Xunnamius/test-utils/blob/9f7edcc582dbbcfb1f6644dbb4c6ee8e4bc8a964/packages/test-mock-import/src/index.ts#L79)

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
