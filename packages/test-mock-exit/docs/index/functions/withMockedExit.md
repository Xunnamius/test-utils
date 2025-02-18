[**@-xun/test-mock-exit**](../../README.md)

***

[@-xun/test-mock-exit](../../README.md) / [index](../README.md) / withMockedExit

# Function: withMockedExit()

> **withMockedExit**(`test`): `Promise`\<`void`\>

Defined in: [packages/test-mock-exit/src/index.ts:17](https://github.com/Xunnamius/test-utils/blob/4c951219ae7239c0e8acc53f91991fdd4d1d8500/packages/test-mock-exit/src/index.ts#L17)

Mock `process.exit` within the scope of `test`. Guaranteed to return
`process.env` to its original state no matter how `test` terminates.

**WARNING: it is not safe to run this function concurrently (e.g. with
`Promise.all`).**

## Parameters

### test

(`spies`) => `Promisable`\<`void`\>

## Returns

`Promise`\<`void`\>
