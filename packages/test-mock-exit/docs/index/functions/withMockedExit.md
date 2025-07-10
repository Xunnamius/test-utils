[**@-xun/test-mock-exit**](../../README.md)

***

[@-xun/test-mock-exit](../../README.md) / [index](../README.md) / withMockedExit

# Function: withMockedExit()

> **withMockedExit**(`test`): `Promise`\<`void`\>

Defined in: [packages/test-mock-exit/src/index.ts:19](https://github.com/Xunnamius/test-utils/blob/cdaba14aaa0c59c409a7af3aa16cea9c7f60e992/packages/test-mock-exit/src/index.ts#L19)

Mock `process.exit` within the scope of `test`. Guaranteed to return
`process.env` to its original state no matter how `test` terminates.

**WARNING: it is not safe to run this function concurrently (e.g. with
`Promise.all`).**

## Parameters

### test

(`spies`) => `Promisable`\<`void`\>

## Returns

`Promise`\<`void`\>
