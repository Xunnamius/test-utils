[**@-xun/test-mock-output**](../README.md)

***

[@-xun/test-mock-output](../README.md) / withMockedOutput

# Function: withMockedOutput()

> **withMockedOutput**(`test`, `__namedParameters`): `Promise`\<`void`\>

Defined in: [index.ts:31](https://github.com/Xunnamius/test-utils/blob/fb7ffeb540b6329cd58507a70130e011f552c63c/packages/test-mock-output/src/index.ts#L31)

Mock terminal output functions within the scope of `test`. Guaranteed to
return terminal output functions to their original state no matter how `test`
terminates.

It is not safe to run this function concurrently (e.g. with `Promise.all`).

## Parameters

### test

(`spies`) => `unknown`

### \_\_namedParameters

[`MockedOutputOptions`](../type-aliases/MockedOutputOptions.md) = `{}`

## Returns

`Promise`\<`void`\>
