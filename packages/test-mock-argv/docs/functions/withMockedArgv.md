[**@-xun/test-mock-argv**](../README.md)

***

[@-xun/test-mock-argv](../README.md) / withMockedArgv

# Function: withMockedArgv()

> **withMockedArgv**(`test`, `simulatedArgv`, `__namedParameters`): `Promise`\<`void`\>

Defined in: [index.ts:23](https://github.com/Xunnamius/test-utils/blob/a891c5dff656869542f90269460b07b6b8641681/packages/test-mock-argv/src/index.ts#L23)

Mock `process.argv` within the scope of `test`. Guaranteed to return
`process.argv` to its original state no matter how `test` terminates.

It is not safe to run this function concurrently (e.g. with `Promise.all`).

## Parameters

### test

() => `Promisable`\<`void`\>

### simulatedArgv

`string`[]

### \_\_namedParameters

[`MockedArgvOptions`](../type-aliases/MockedArgvOptions.md) = `{}`

## Returns

`Promise`\<`void`\>
