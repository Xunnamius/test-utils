[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [types/fixtures](../README.md) / FixtureAction

# Type Alias: FixtureAction()\<Context\>

> **FixtureAction**\<`Context`\>: (`context`) => `Promisable`\<`unknown`\>

Defined in: [types/fixtures.ts:112](https://github.com/Xunnamius/test-utils/blob/14b8913d5f48373a9eb174660cf655c3dfccb324/packages/test-mock-fixture/src/types/fixtures.ts#L112)

A context-aware potentially-asynchronous function used to perform some
standard action such as "setup" and "teardown" operations in
[MockFixture](MockFixture.md)s.

## Type Parameters

• **Context** *extends* [`GenericFixtureContext`](GenericFixtureContext.md)

## Parameters

### context

`Context`

## Returns

`Promisable`\<`unknown`\>
