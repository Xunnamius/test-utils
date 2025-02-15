[**@-xun/test-mock-env**](../README.md)

***

[@-xun/test-mock-env](../README.md) / mockEnvFactory

# Function: mockEnvFactory()

> **mockEnvFactory**(`factorySimulatedEnv`, `factoryOptions`?): (`test`, `simulatedEnv`, `options`?) => `Promise`\<`void`\>

Defined in: [index.ts:91](https://github.com/Xunnamius/test-utils/blob/f58da4dbf02e0758e7700f67f2427126f3ccba89/packages/test-mock-env/src/index.ts#L91)

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
