[**@-xun/test-mock-argv**](../README.md)

***

[@-xun/test-mock-argv](../README.md) / mockArgvFactory

# Function: mockArgvFactory()

> **mockArgvFactory**(`factorySimulatedArgv`, `factoryOptions`?): (`test`, `simulatedArgv`?, `options`?) => `Promise`\<`void`\>

Defined in: [index.ts:51](https://github.com/Xunnamius/test-utils/blob/0166d428b7c65bdd5ad013e0256a3d8f5ef09b33/packages/test-mock-argv/src/index.ts#L51)

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
