[**@-xun/test-mock-fixture**](../../README.md)

***

[@-xun/test-mock-fixture](../../README.md) / [util](../README.md) / withoutNodeDebuggerStderrOutput

# Function: withoutNodeDebuggerStderrOutput()

> **withoutNodeDebuggerStderrOutput**\<`T`\>(`runResult`): `Promise`\<`T`\>

Defined in: [packages/test-mock-fixture/src/util.ts:94](https://github.com/Xunnamius/test-utils/blob/fbb0e2e25a6b2830b1b2ac319e054df42247cc53/packages/test-mock-fixture/src/util.ts#L94)

Remove those pesky strings Node outputs to stderr when running with
`--inspect`.

Only works with string-type data.

## Type Parameters

• **T** *extends* `object`

## Parameters

### runResult

`Promisable`\<`T`\>

## Returns

`Promise`\<`T`\>
