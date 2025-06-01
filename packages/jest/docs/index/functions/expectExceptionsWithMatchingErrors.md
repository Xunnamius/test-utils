[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / expectExceptionsWithMatchingErrors

# Function: expectExceptionsWithMatchingErrors()

> **expectExceptionsWithMatchingErrors**\<`T`\>(`spec`, `errorFn`): `Promise`\<`void`\>

Defined in: [packages/jest/src/index.ts:380](https://github.com/Xunnamius/test-utils/blob/92fd6a9e3933fc0913144742396a7dd3fcc48ac8/packages/jest/src/index.ts#L380)

Maps each element of the `spec` array into a Jest expectation asserting that
`errorFn` either throws an error or rejects. If an assertion fails, a
helpful error message is thrown.

Example:

```js
await expectExceptionsWithMatchingErrors([
 [[param1, param2], 'expected error message 1'],
 [[1, 2, 3], 'expected error message 2']
],
() => {
  // ...
});
```

## Type Parameters

### T

`T` *extends* \[`unknown`[], `string`\][]

## Parameters

### spec

`T`

### errorFn

(`params`, `index`) => `unknown`

## Returns

`Promise`\<`void`\>
