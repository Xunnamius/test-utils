[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [types/util](../README.md) / ReturnVIfTExtendsU

# Type Alias: ReturnVIfTExtendsU\<T, U, V, ShouldUnwrap\>

> **ReturnVIfTExtendsU**\<`T`, `U`, `V`, `ShouldUnwrap`\>: `T` *extends* `U` ? `MaybeUnwrap`\<`V`, `ShouldUnwrap`\> : `unknown`

Defined in: [types/util.ts:3](https://github.com/Xunnamius/test-utils/blob/d96a64d2a590f310ff9665ced169fcb337fa2189/packages/test-mock-fixture/src/types/util.ts#L3)

## Type Parameters

• **T**

• **U**

• **V** *extends* `Tagged`\<`unknown`, `PropertyKey`\>

• **ShouldUnwrap** *extends* `boolean` = `true`
