[**@-xun/test-mock-output**](../README.md)

***

[@-xun/test-mock-output](../README.md) / withMockedOutput

# Function: withMockedOutput()

> **withMockedOutput**(`test`, `__namedParameters`): `Promise`\<`void`\>

Defined in: [index.ts:84](https://github.com/Xunnamius/test-utils/blob/763c49bcbbddd57babc64d23a6b5f47814cda5b6/packages/test-mock-output/src/index.ts#L84)

Mock terminal output functions within the scope of `test`. Guaranteed to
return terminal output functions to their original state no matter how `test`
terminates.

**WARNING: it is not safe to run this function concurrently (e.g. with
`Promise.all`).**

## Parameters

### test

(`spies`) => `unknown`

### \_\_namedParameters

[`MockedOutputOptions`](../type-aliases/MockedOutputOptions.md) = `{}`

## Returns

`Promise`\<`void`\>
