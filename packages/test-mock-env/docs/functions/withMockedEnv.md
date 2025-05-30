[**@-xun/test-mock-env**](../README.md)

***

[@-xun/test-mock-env](../README.md) / withMockedEnv

# Function: withMockedEnv()

> **withMockedEnv**(`test`, `simulatedEnv`, `__namedParameters`): `Promise`\<`void`\>

Defined in: [index.ts:42](https://github.com/Xunnamius/test-utils/blob/078b37591dfd5e7c4a772eccddae11db166f3313/packages/test-mock-env/src/index.ts#L42)

Mock `process.env` within the scope of `test`. Guaranteed to return
`process.env` to its original state no matter how `test` terminates.

**WARNING: it is not safe to run this function concurrently (e.g. with
`Promise.all`).**

## Parameters

### test

() => `Promisable`\<`void`\>

### simulatedEnv

`Record`\<`string`, `string`\>

### \_\_namedParameters

[`MockedEnvOptions`](../type-aliases/MockedEnvOptions.md) = `{}`

## Returns

`Promise`\<`void`\>
