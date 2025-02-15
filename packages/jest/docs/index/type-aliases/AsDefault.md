[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / AsDefault

# Type Alias: AsDefault\<T\>

> **AsDefault**\<`T`\>: `T` *extends* `object` ? `T`\[`"default"`\] : `T`

Defined in: packages/test-mock-import/dist/packages/test-mock-import/src/index.d.ts:6

A helper type that reduces an object type to its `default` property, if such
a property exists, or returns it as-is if it does not.

## Type Parameters

• **T**
