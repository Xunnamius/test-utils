[**@-xun/test-mock-env**](../README.md)

***

[@-xun/test-mock-env](../README.md) / withMockedEnv

# Function: withMockedEnv()

> **withMockedEnv**(`test`, `simulatedEnv`, `__namedParameters?`): `Promise`\<`void`\>

Defined in: [index.ts:42](https://github.com/Xunnamius/test-utils/blob/30473b0dfdcdc6c8e714a403bf388f6c84418cb4/packages/test-mock-env/src/index.ts#L42)

Mock `process.env` within the scope of `test`. Guaranteed to return
`process.env` to its original state no matter how `test` terminates.

**WARNING: it is not safe to run this function concurrently (e.g. with
`Promise.all`).**

## Parameters

### test

() => `Promisable`\<`void`\>

### simulatedEnv

`Record`\<`string`, `string`\>

### \_\_namedParameters?

[`MockedEnvOptions`](../type-aliases/MockedEnvOptions.md) = `{}`

## Returns

`Promise`\<`void`\>
