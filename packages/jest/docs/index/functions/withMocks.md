[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / withMocks

# Function: withMocks()

> **withMocks**(`fn`, `__namedParameters`): `Promise`\<`void`\>

Defined in: [packages/jest/src/index.ts:270](https://github.com/Xunnamius/test-utils/blob/4fc2dc9b5529a12a6f15193a82e6144613d89845/packages/jest/src/index.ts#L270)

Wraps [withMockedArgv](withMockedArgv.md) + [withMockedEnv](withMockedEnv.md) with
[withMockedExit](withMockedExit.md) + [withMockedOutput](withMockedOutput.md).

## Parameters

### fn

(`spies`) => `Promise`\<`void`\>

### \_\_namedParameters

#### options?

\{ `passthrough?`: (`"log"` \| `"warn"` \| `"error"` \| `"info"` \| `"stdout"` \| `"stderr"`)[]; `passthroughDebugEnv?`: `boolean`; `passthroughOutputIfDebugging?`: `boolean`; `replaceEntireArgv?`: `boolean`; `replaceEntireEnv?`: `boolean`; \} = `undefined`

#### options.passthrough?

(`"log"` \| `"warn"` \| `"error"` \| `"info"` \| `"stdout"` \| `"stderr"`)[]

Prevent mocking the implementation of one or more output spies, allowing
output to be passed through to the original function. Said spies will
remain functional.

**Default**

```ts
[]
```

#### options.passthroughDebugEnv?

`boolean`

If `true`, whenever `process.env.DEBUG` is present, it will be forwarded
as-is to the underlying environment mock even when `replaceEntireEnv` is
`true`. This allows debug output to make it to the screen.

**Default**

```ts
true
```

#### options.passthroughOutputIfDebugging?

`boolean`

If `true`, whenever `process.env.DEBUG` is present, output functions will
still be spied on but their implementations will not be mocked, allowing
debug output to make it to the screen.

**Default**

```ts
true
```

#### options.replaceEntireArgv?

`boolean`

By default, the first two elements in `process.argv` are preserved. Setting
`replace` to `true` will cause the entire process.argv array to be
replaced.

**Default**

```ts
false
```

#### options.replaceEntireEnv?

`boolean`

By default, all environment variables in the `process.env` object are
deleted before the object is re-hydrated with `newEnv`.

Two environment variables, if present, are exempt from deletion:
`process.env.DEBUG` and `process.env.DEBUG_COLORS`.

Setting `replace` to `false` will cause `newEnv` to be merged on top of
`process.env` instead of replacing it. Setting `replace` to `true` will
cause `newEnv` to replace the _entire_ `process.env` object, including
`process.env.DEBUG_COLORS`.

Note that `process.env.DEBUG` is unaffected by this option (see
[MockedEnvOptions.passthroughDebugEnv](../type-aliases/MockedEnvOptions.md#passthroughdebugenv) instead).

**Default**

```ts
undefined
```

#### simulatedArgv?

`string`[] = `[]`

#### simulatedEnv?

`Record`\<`string`, `string`\> = `{}`

## Returns

`Promise`\<`void`\>
