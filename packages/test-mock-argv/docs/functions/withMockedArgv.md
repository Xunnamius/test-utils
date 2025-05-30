[**@-xun/test-mock-argv**](../README.md)

***

[@-xun/test-mock-argv](../README.md) / withMockedArgv

# Function: withMockedArgv()

> **withMockedArgv**(`test`, `simulatedArgv`, `__namedParameters`): `Promise`\<`void`\>

Defined in: [index.ts:24](https://github.com/Xunnamius/test-utils/blob/f5e7dc6d28c690d9df0a0ac1ffaa4d27248da991/packages/test-mock-argv/src/index.ts#L24)

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
