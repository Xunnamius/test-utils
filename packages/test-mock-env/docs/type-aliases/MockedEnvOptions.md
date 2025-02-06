[**@-xun/test-mock-env**](../README.md)

***

[@-xun/test-mock-env](../README.md) / MockedEnvOptions

# Type Alias: MockedEnvOptions

> **MockedEnvOptions**: `object`

Defined in: [index.ts:6](https://github.com/Xunnamius/test-utils/blob/051f777b8ef42d48509f53e1767f300bbd980798/packages/test-mock-env/src/index.ts#L6)

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

By default, the `process.env` object is emptied and re-hydrated with
`newEnv`. Setting `replace` to `false` will cause `newEnv` to be appended
instead.

#### Default

```ts
true
```

## See

[withMockedEnv](../functions/withMockedEnv.md)
