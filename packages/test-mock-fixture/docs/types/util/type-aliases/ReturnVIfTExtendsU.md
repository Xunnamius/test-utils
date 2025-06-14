[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [types/util](../README.md) / ReturnVIfTExtendsU

# Type Alias: ReturnVIfTExtendsU\<T, U, V, ShouldUnwrap\>

> **ReturnVIfTExtendsU**\<`T`, `U`, `V`, `ShouldUnwrap`\> = `T` *extends* `U` ? `MaybeUnwrap`\<`V`, `ShouldUnwrap`\> : `unknown`

Defined in: [types/util.ts:3](https://github.com/Xunnamius/test-utils/blob/47f33d69abeb32464a6a4e66b6c89c313568151a/packages/test-mock-fixture/src/types/util.ts#L3)

## Type Parameters

### T

`T`

### U

`U`

### V

`V` *extends* `Tagged`\<`unknown`, `PropertyKey`\>

### ShouldUnwrap

`ShouldUnwrap` *extends* `boolean` = `true`
