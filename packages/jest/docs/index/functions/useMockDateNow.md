[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / useMockDateNow

# Function: useMockDateNow()

> **useMockDateNow**(`options?`): `void`

Defined in: [packages/jest/src/index.ts:357](https://github.com/Xunnamius/test-utils/blob/4fc2dc9b5529a12a6f15193a82e6144613d89845/packages/jest/src/index.ts#L357)

Sets up a Jest spy on the `Date` object's `now` method such that it returns
`mockNow` or `mockDateNowMs` (default) rather than the actual date. If you
want to restore the mock, you will have to do so manually (or use Jest
configuration to do so automatically).

This is useful when testing against dummy data containing values derived from
the current time (i.e. unix epoch).

## Parameters

### options?

#### mockNow?

`number`

## Returns

`void`
