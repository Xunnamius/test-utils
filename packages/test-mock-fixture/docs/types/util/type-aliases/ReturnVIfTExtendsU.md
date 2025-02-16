[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [types/util](../README.md) / ReturnVIfTExtendsU

# Type Alias: ReturnVIfTExtendsU\<T, U, V, ShouldUnwrap\>

> **ReturnVIfTExtendsU**\<`T`, `U`, `V`, `ShouldUnwrap`\>: `T` *extends* `U` ? `MaybeUnwrap`\<`V`, `ShouldUnwrap`\> : `unknown`

Defined in: [types/util.ts:3](https://github.com/Xunnamius/test-utils/blob/beb85e0df50e813590ae799295cdbfb96ea92ab4/packages/test-mock-fixture/src/types/util.ts#L3)

## Type Parameters

• **T**

• **U**

• **V** *extends* `Tagged`\<`unknown`, `PropertyKey`\>

• **ShouldUnwrap** *extends* `boolean` = `true`
