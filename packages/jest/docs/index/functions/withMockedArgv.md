[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / withMockedArgv

# Function: withMockedArgv()

> **withMockedArgv**(`test`, `simulatedArgv`, `__namedParameters`?): `Promise`\<`void`\>

Defined in: packages/test-mock-argv/dist/packages/test-mock-argv/src/index.d.ts:21

Mock `process.argv` within the scope of `test`. Guaranteed to return
`process.argv` to its original state no matter how `test` terminates.

It is not safe to run this function concurrently (e.g. with `Promise.all`).

## Parameters

### test

() => `Promisable`\<`void`\>

### simulatedArgv

`string`[]

### \_\_namedParameters?

[`MockedArgvOptions`](../type-aliases/MockedArgvOptions.md)

## Returns

`Promise`\<`void`\>
