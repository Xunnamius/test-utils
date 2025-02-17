[**@-xun/test-mock-output**](../README.md)

***

[@-xun/test-mock-output](../README.md) / MockedOutputOptions

# Type Alias: MockedOutputOptions

> **MockedOutputOptions**: `object`

Defined in: [index.ts:10](https://github.com/Xunnamius/test-utils/blob/555adb40d374b409b2f6bb872ee77710f6df6159/packages/test-mock-output/src/index.ts#L10)

## Type declaration

### passthrough?

> `optional` **passthrough**: (`"log"` \| `"warn"` \| `"error"` \| `"info"` \| `"stdout"` \| `"stderr"`)[]

Prevent mocking the implementation of one or more output spies, allowing
output to be passed through to the original function. Said spies will
remain functional.

#### Default

```ts
[]
```

### passthroughOutputIfDebugging?

> `optional` **passthroughOutputIfDebugging**: `boolean`

If `true`, whenever `process.env.DEBUG` is present, output functions will
still be spied on but their implementations will not be mocked, allowing
debug output to make it to the screen.

#### Default

```ts
true
```

## See

[withMockedOutput](../functions/withMockedOutput.md)
