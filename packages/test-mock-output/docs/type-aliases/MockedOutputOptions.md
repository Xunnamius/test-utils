[**@-xun/test-mock-output**](../README.md)

***

[@-xun/test-mock-output](../README.md) / MockedOutputOptions

# Type Alias: MockedOutputOptions

> **MockedOutputOptions**: `object`

Defined in: [index.ts:11](https://github.com/Xunnamius/test-utils/blob/f58a32bc20fa7160bb08dc37eb92e1e4984996da/packages/test-mock-output/src/index.ts#L11)

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
