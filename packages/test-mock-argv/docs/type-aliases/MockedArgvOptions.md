[**@-xun/test-mock-argv**](../README.md)

***

[@-xun/test-mock-argv](../README.md) / MockedArgvOptions

# Type Alias: MockedArgvOptions

> **MockedArgvOptions** = `object`

Defined in: [index.ts:6](https://github.com/Xunnamius/test-utils/blob/9dac5bf967a72179cdc81057fc472da0efa492df/packages/test-mock-argv/src/index.ts#L6)

## See

[withMockedArgv](../functions/withMockedArgv.md)

## Properties

### replaceEntireArgv?

> `optional` **replaceEntireArgv**: `boolean`

Defined in: [index.ts:14](https://github.com/Xunnamius/test-utils/blob/9dac5bf967a72179cdc81057fc472da0efa492df/packages/test-mock-argv/src/index.ts#L14)

By default, the first two elements in `process.argv` are preserved. Setting
`replace` to `true` will cause the entire process.argv array to be
replaced.

#### Default

```ts
false
```
