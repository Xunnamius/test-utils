[**@-xun/test-mock-exit**](../../README.md)

***

[@-xun/test-mock-exit](../../README.md) / [index](../README.md) / withMockedExit

# Function: withMockedExit()

> **withMockedExit**(`test`): `Promise`\<`void`\>

Defined in: [index.ts:12](https://github.com/Xunnamius/test-utils/blob/b83f8dbdd38dd1b5810fe17cf4216e70e1efcb2d/packages/test-mock-exit/src/index.ts#L12)

Mock `process.exit` within the scope of `test`. Guaranteed to return
`process.env` to its original state no matter how `test` terminates.

It is not safe to run this function concurrently (e.g. with `Promise.all`).

## Parameters

### test

(`spies`) => `Promisable`\<`void`\>

## Returns

`Promise`\<`void`\>
