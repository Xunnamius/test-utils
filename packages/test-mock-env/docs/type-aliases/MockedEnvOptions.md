[**@-xun/test-mock-env**](../README.md)

***

[@-xun/test-mock-env](../README.md) / MockedEnvOptions

# Type Alias: MockedEnvOptions

> **MockedEnvOptions** = `object`

Defined in: [index.ts:6](https://github.com/Xunnamius/test-utils/blob/877eee6d3ca3ce1ccd0cfa588867e4b66e7b9e42/packages/test-mock-env/src/index.ts#L6)

## See

[withMockedEnv](../functions/withMockedEnv.md)

## Properties

### passthroughDebugEnv?

> `optional` **passthroughDebugEnv**: `boolean`

Defined in: [index.ts:32](https://github.com/Xunnamius/test-utils/blob/877eee6d3ca3ce1ccd0cfa588867e4b66e7b9e42/packages/test-mock-env/src/index.ts#L32)

If `true`, whenever `process.env.DEBUG` is present, it will be forwarded
as-is to the underlying environment mock even when `replaceEntireEnv` is
`true`. This allows debug output to make it to the screen.

#### Default

```ts
true
```

***

### replaceEntireEnv?

> `optional` **replaceEntireEnv**: `boolean`

Defined in: [index.ts:24](https://github.com/Xunnamius/test-utils/blob/877eee6d3ca3ce1ccd0cfa588867e4b66e7b9e42/packages/test-mock-env/src/index.ts#L24)

By default, all environment variables in the `process.env` object are
deleted before the object is re-hydrated with `newEnv`.

Two environment variables, if present, are exempt from deletion:
`process.env.DEBUG` and `process.env.DEBUG_COLORS`.

Setting `replace` to `false` will cause `newEnv` to be merged on top of
`process.env` instead of replacing it. Setting `replace` to `true` will
cause `newEnv` to replace the _entire_ `process.env` object, including
`process.env.DEBUG_COLORS`.

Note that `process.env.DEBUG` is unaffected by this option (see
[MockedEnvOptions.passthroughDebugEnv](#passthroughdebugenv) instead).

#### Default

```ts
undefined
```
