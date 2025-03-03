[**@-xun/test-mock-fixture**](../../README.md)

***

[@-xun/test-mock-fixture](../../README.md) / [util](../README.md) / getTreeOutput

# Function: getTreeOutput()

> **getTreeOutput**(`root`): `Promise`\<`string`\>

Defined in: [packages/test-mock-fixture/src/util.ts:21](https://github.com/Xunnamius/test-utils/blob/fbb0e2e25a6b2830b1b2ac319e054df42247cc53/packages/test-mock-fixture/src/util.ts#L21)

Get the `tree` output of a directory and all its sub-directories. If the
`tree` command is not available for whatever reason, a string is returned
containing a helpful error message.

## Parameters

### root

`AbsolutePath`

## Returns

`Promise`\<`string`\>
