[**@-xun/test-mock-argv**](../README.md)

***

[@-xun/test-mock-argv](../README.md) / mockArgvFactory

# Function: mockArgvFactory()

> **mockArgvFactory**(`factorySimulatedArgv`, `factoryOptions?`): (`test`, `simulatedArgv?`, `options?`) => `Promise`\<`void`\>

Defined in: [index.ts:48](https://github.com/Xunnamius/test-utils/blob/e32842132381e999393cceb5060cc49ff962589b/packages/test-mock-argv/src/index.ts#L48)

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

> (`test`, `simulatedArgv?`, `options?`): `Promise`\<`void`\>

### Parameters

#### test

() => `Promisable`\<`void`\>

#### simulatedArgv?

`string`[]

#### options?

[`MockedArgvOptions`](../type-aliases/MockedArgvOptions.md)

### Returns

`Promise`\<`void`\>
