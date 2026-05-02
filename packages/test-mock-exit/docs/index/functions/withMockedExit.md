[**@-xun/test-mock-exit**](../../README.md)

***

[@-xun/test-mock-exit](../../README.md) / [index](../README.md) / withMockedExit

# Function: withMockedExit()

> **withMockedExit**(`test`): `Promise`\<`void`\>

Defined in: [index.ts:19](https://github.com/Xunnamius/test-utils/blob/7d57cd5546eb16efeb089b54af88313b0c928ae5/packages/test-mock-exit/src/index.ts#L19)

Mock `process.exit` within the scope of `test`. Guaranteed to return
`process.env` to its original state no matter how `test` terminates.

**WARNING: it is not safe to run this function concurrently (e.g. with
`Promise.all`).**

## Parameters

### test

(`spies`) => `Promisable`\<`void`\>

## Returns

`Promise`\<`void`\>
