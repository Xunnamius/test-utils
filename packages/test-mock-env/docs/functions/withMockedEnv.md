[**@-xun/test-mock-env**](../README.md)

***

[@-xun/test-mock-env](../README.md) / withMockedEnv

# Function: withMockedEnv()

> **withMockedEnv**(`test`, `simulatedEnv`, `__namedParameters`): `Promise`\<`void`\>

Defined in: [index.ts:41](https://github.com/Xunnamius/test-utils/blob/f58da4dbf02e0758e7700f67f2427126f3ccba89/packages/test-mock-env/src/index.ts#L41)

Mock `process.env` within the scope of `test`. Guaranteed to return
`process.env` to its original state no matter how `test` terminates.

It is not safe to run this function concurrently (e.g. with `Promise.all`).

## Parameters

### test

() => `Promisable`\<`void`\>

### simulatedEnv

`Record`\<`string`, `string`\>

### \_\_namedParameters

[`MockedEnvOptions`](../type-aliases/MockedEnvOptions.md) = `{}`

## Returns

`Promise`\<`void`\>
