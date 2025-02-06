[**@-xun/test-mock-output**](../README.md)

***

[@-xun/test-mock-output](../README.md) / withMockedOutput

# Function: withMockedOutput()

> **withMockedOutput**(`test`, `__namedParameters`): `Promise`\<`void`\>

Defined in: [index.ts:33](https://github.com/Xunnamius/test-utils/blob/93cda7940afb86ec332e09c9cb61f62e1d6f6f36/packages/test-mock-output/src/index.ts#L33)

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
