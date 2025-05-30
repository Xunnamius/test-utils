[**@-xun/test-mock-argv**](../README.md)

***

[@-xun/test-mock-argv](../README.md) / MockedArgvOptions

# Type Alias: MockedArgvOptions

> **MockedArgvOptions** = `object`

Defined in: [index.ts:6](https://github.com/Xunnamius/test-utils/blob/f5e7dc6d28c690d9df0a0ac1ffaa4d27248da991/packages/test-mock-argv/src/index.ts#L6)

## See

[withMockedArgv](../functions/withMockedArgv.md)

## Properties

### replaceEntireArgv?

> `optional` **replaceEntireArgv**: `boolean`

Defined in: [index.ts:14](https://github.com/Xunnamius/test-utils/blob/f5e7dc6d28c690d9df0a0ac1ffaa4d27248da991/packages/test-mock-argv/src/index.ts#L14)

By default, the first two elements in `process.argv` are preserved. Setting
`replace` to `true` will cause the entire process.argv array to be
replaced.

#### Default

```ts
false
```
