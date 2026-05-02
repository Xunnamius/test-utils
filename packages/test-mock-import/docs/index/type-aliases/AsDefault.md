[**@-xun/test-mock-import**](../../README.md)

***

[@-xun/test-mock-import](../../README.md) / [index](../README.md) / AsDefault

# Type Alias: AsDefault\<T\>

> **AsDefault**\<`T`\> = `T` *extends* `object` ? `T`\[`"default"`\] : `T`

Defined in: [index.ts:15](https://github.com/Xunnamius/test-utils/blob/549b45d4c7d708c080a3d87452de38df664abdfc/packages/test-mock-import/src/index.ts#L15)

A helper type that reduces an object type to its `default` property, if such
a property exists, or returns it as-is if it does not.

## Type Parameters

### T

`T`
