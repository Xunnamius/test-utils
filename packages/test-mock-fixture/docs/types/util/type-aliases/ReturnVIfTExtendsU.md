[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [types/util](../README.md) / ReturnVIfTExtendsU

# Type Alias: ReturnVIfTExtendsU\<T, U, V, ShouldUnwrap\>

> **ReturnVIfTExtendsU**\<`T`, `U`, `V`, `ShouldUnwrap`\>: `T` *extends* `U` ? `MaybeUnwrap`\<`V`, `ShouldUnwrap`\> : `unknown`

Defined in: [types/util.ts:3](https://github.com/Xunnamius/test-utils/blob/c1219168b725e263abb557d96549b7b98bdb4b4c/packages/test-mock-fixture/src/types/util.ts#L3)

## Type Parameters

• **T**

• **U**

• **V** *extends* `Tagged`\<`unknown`, `PropertyKey`\>

• **ShouldUnwrap** *extends* `boolean` = `true`
