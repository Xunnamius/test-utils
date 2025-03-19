[**@-xun/test-mock-argv**](../README.md)

***

[@-xun/test-mock-argv](../README.md) / mockArgvFactory

# Function: mockArgvFactory()

> **mockArgvFactory**(`factorySimulatedArgv`, `factoryOptions`?): (`test`, `simulatedArgv`?, `options`?) => `Promise`\<`void`\>

Defined in: [index.ts:52](https://github.com/Xunnamius/test-utils/blob/9dac5bf967a72179cdc81057fc472da0efa492df/packages/test-mock-argv/src/index.ts#L52)

Return a function that, when invoked, returns a pre-configured
[withMockedArgv](withMockedArgv.md) function.

This is useful for centralizing mock configuration in one place instead of
duplicating configuration across [withMockedArgv](withMockedArgv.md) calls.

## Parameters

### factorySimulatedArgv

`string`[]

### factoryOptions?

[`MockedArgvOptions`](../type-aliases/MockedArgvOptions.md)

## Returns

`Function`

### Parameters

#### test

() => `Promisable`\<`void`\>

#### simulatedArgv?

`string`[]

#### options?

[`MockedArgvOptions`](../type-aliases/MockedArgvOptions.md)

### Returns

`Promise`\<`void`\>
