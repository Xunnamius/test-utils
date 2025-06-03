[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [types/util](../README.md) / ReturnVIfTExtendsU

# Type Alias: ReturnVIfTExtendsU\<T, U, V, ShouldUnwrap\>

> **ReturnVIfTExtendsU**\<`T`, `U`, `V`, `ShouldUnwrap`\> = `T` *extends* `U` ? `MaybeUnwrap`\<`V`, `ShouldUnwrap`\> : `unknown`

Defined in: [types/util.ts:3](https://github.com/Xunnamius/test-utils/blob/c057e473267fff5b12c97e91a9dbe9329c9f76d1/packages/test-mock-fixture/src/types/util.ts#L3)

## Type Parameters

### T

`T`

### U

`U`

### V

`V` *extends* `Tagged`\<`unknown`, `PropertyKey`\>

### ShouldUnwrap

`ShouldUnwrap` *extends* `boolean` = `true`
