[**@-xun/test-mock-argv**](../README.md)

***

[@-xun/test-mock-argv](../README.md) / withMockedArgv

# Function: withMockedArgv()

> **withMockedArgv**(`test`, `simulatedArgv`, `__namedParameters`): `Promise`\<`void`\>

Defined in: [index.ts:24](https://github.com/Xunnamius/test-utils/blob/e32842132381e999393cceb5060cc49ff962589b/packages/test-mock-argv/src/index.ts#L24)

Mock `process.argv` within the scope of `test`. Guaranteed to return
`process.argv` to its original state no matter how `test` terminates.

**WARNING: it is not safe to run this function concurrently (e.g. with
`Promise.all`).**

## Parameters

### test

() => `Promisable`\<`void`\>

### simulatedArgv

`string`[]

### \_\_namedParameters

[`MockedArgvOptions`](../type-aliases/MockedArgvOptions.md) = `{}`

## Returns

`Promise`\<`void`\>
