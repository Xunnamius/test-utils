[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / withMocks

# Function: withMocks()

> **withMocks**(`fn`, `__namedParameters`): `Promise`\<`void`\>

Defined in: [packages/jest/src/index.ts:251](https://github.com/Xunnamius/test-utils/blob/fb7ffeb540b6329cd58507a70130e011f552c63c/packages/jest/src/index.ts#L251)

Wraps [withMockedArgv](withMockedArgv.md) + [withMockedEnv](withMockedEnv.md) with
[withMockedExit](withMockedExit.md) + [withMockedOutput](withMockedOutput.md).

## Parameters

### fn

(`spies`) => `Promise`\<`void`\>

### \_\_namedParameters

#### options

\{ `passthrough`: (`"log"` \| `"warn"` \| `"error"` \| `"info"` \| `"stdout"` \| `"stderr"`)[]; `passthroughDebugEnv`: `boolean`; `passthroughOutputIfDebugging`: `boolean`; `replaceEntireArgv`: `boolean`; `replaceEntireEnv`: `boolean`; \} = `undefined`

#### options.passthrough

(`"log"` \| `"warn"` \| `"error"` \| `"info"` \| `"stdout"` \| `"stderr"`)[]

Call jest.SpyInstance.mockRestore on one or more output functions
currently being spied upon.

#### options.passthroughDebugEnv

`boolean`

If `true`, whenever `process.env.DEBUG` is present, it will be forwarded
as-is to the underlying environment mock even when `replaceEntireEnv` is
`true`. This allows debug output to make it to the screen.

**Default**

```ts
true
```

#### options.passthroughOutputIfDebugging

`boolean`

If `true`, whenever `process.env.DEBUG` is present, output functions will
still be spied on but their implementations will not be mocked, allowing
debug output to make it to the screen.

**Default**

```ts
true
```

#### options.replaceEntireArgv

`boolean`

By default, the first two elements in `process.argv` are preserved. Setting
`replace` to `true` will cause the entire process.argv array to be
replaced.

**Default**

```ts
false
```

#### options.replaceEntireEnv

`boolean`

By default, the `process.env` object is emptied and re-hydrated with
`newEnv`. Setting `replace` to `false` will cause `newEnv` to be appended
instead.

**Default**

```ts
true
```

#### simulatedArgv

`string`[] = `[]`

#### simulatedEnv

`Record`\<`string`, `string`\> = `{}`

## Returns

`Promise`\<`void`\>
