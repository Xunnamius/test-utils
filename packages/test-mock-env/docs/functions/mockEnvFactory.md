[**@-xun/test-mock-env**](../README.md)

***

[@-xun/test-mock-env](../README.md) / mockEnvFactory

# Function: mockEnvFactory()

> **mockEnvFactory**(`factorySimulatedEnv`, `factoryOptions`?): (`test`, `simulatedEnv`, `options`?) => `Promise`\<`void`\>

Defined in: [index.ts:92](https://github.com/Xunnamius/test-utils/blob/f0d49d32f24274dfca55c0e4a0106a0696437cbe/packages/test-mock-env/src/index.ts#L92)

Return a function that, when invoked, returns a pre-configured
[withMockedEnv](withMockedEnv.md) function.

This is useful for centralizing mock configuration in one place instead of
duplicating configuration across [withMockedEnv](withMockedEnv.md) calls.

## Parameters

### factorySimulatedEnv

`Record`\<`string`, `string`\>

### factoryOptions?

[`MockedEnvOptions`](../type-aliases/MockedEnvOptions.md)

## Returns

`Function`

### Parameters

#### test

() => `Promisable`\<`void`\>

#### simulatedEnv

`Record`\<`string`, `string`\> = `{}`

#### options?

[`MockedEnvOptions`](../type-aliases/MockedEnvOptions.md)

### Returns

`Promise`\<`void`\>
