[**@-xun/test-mock-env**](../README.md)

***

[@-xun/test-mock-env](../README.md) / MockedEnvOptions

# Type Alias: MockedEnvOptions

> **MockedEnvOptions**: `object`

Defined in: [index.ts:6](https://github.com/Xunnamius/test-utils/blob/60e8c61898aab9d4fb9616284896eee5c15ac61b/packages/test-mock-env/src/index.ts#L6)

## Type declaration

### passthroughDebugEnv?

> `optional` **passthroughDebugEnv**: `boolean`

If `true`, whenever `process.env.DEBUG` is present, it will be forwarded
as-is to the underlying environment mock even when `replaceEntireEnv` is
`true`. This allows debug output to make it to the screen.

#### Default

```ts
true
```

### replaceEntireEnv?

> `optional` **replaceEntireEnv**: `boolean`

By default, the `process.env` object (**except `process.env.DEBUG_COLORS`,
if it exists**) is emptied and re-hydrated with `newEnv`. Setting `replace`
to `false` will cause `newEnv` to be appended instead. Setting `replace` to
`true` will cause `newEnv` to replace the _entire_ `process.env` object,
including `process.env.DEBUG_COLORS`.

#### Default

```ts
undefined
```

## See

[withMockedEnv](../functions/withMockedEnv.md)
