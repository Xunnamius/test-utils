[**@-xun/test-mock-argv**](../README.md)

***

[@-xun/test-mock-argv](../README.md) / MockedArgvOptions

# Type Alias: MockedArgvOptions

> **MockedArgvOptions**: `object`

Defined in: [index.ts:6](https://github.com/Xunnamius/test-utils/blob/0166d428b7c65bdd5ad013e0256a3d8f5ef09b33/packages/test-mock-argv/src/index.ts#L6)

## Type declaration

### replaceEntireArgv?

> `optional` **replaceEntireArgv**: `boolean`

By default, the first two elements in `process.argv` are preserved. Setting
`replace` to `true` will cause the entire process.argv array to be
replaced.

#### Default

```ts
false
```

## See

[withMockedArgv](../functions/withMockedArgv.md)
