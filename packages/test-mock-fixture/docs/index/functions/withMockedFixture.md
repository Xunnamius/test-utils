[**@-xun/test-mock-fixture**](../../README.md)

***

[@-xun/test-mock-fixture](../../README.md) / [index](../README.md) / withMockedFixture

# Function: withMockedFixture()

> **withMockedFixture**\<`CustomOptions`, `CustomContext`\>(`test`, `testIdentifier`, `__namedParameters`): `Promise`\<`void`\>

Defined in: [index.ts:24](https://github.com/Xunnamius/test-utils/blob/fb7ffeb540b6329cd58507a70130e011f552c63c/packages/test-mock-fixture/src/index.ts#L24)

## Type Parameters

• **CustomOptions** *extends* `Record`\<`string`, `unknown`\> = `Record`\<`string`, `unknown`\>

• **CustomContext** *extends* `Record`\<`string`, `unknown`\> = `Record`\<`string`, `unknown`\>

## Parameters

### test

[`FixtureAction`](../type-aliases/FixtureAction.md)\<`any`\>

### testIdentifier

`string`

### \_\_namedParameters

[`MockedFixtureOptions`](../type-aliases/MockedFixtureOptions.md)\<`CustomOptions`, `CustomContext`\>

## Returns

`Promise`\<`void`\>
