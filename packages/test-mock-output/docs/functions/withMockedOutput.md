[**@-xun/test-mock-output**](../README.md)

***

[@-xun/test-mock-output](../README.md) / withMockedOutput

# Function: withMockedOutput()

> **withMockedOutput**(`test`, `__namedParameters`): `Promise`\<`void`\>

Defined in: [index.ts:36](https://github.com/Xunnamius/test-utils/blob/555adb40d374b409b2f6bb872ee77710f6df6159/packages/test-mock-output/src/index.ts#L36)

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
