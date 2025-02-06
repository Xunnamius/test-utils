[**@-xun/test-mock-output**](../README.md)

***

[@-xun/test-mock-output](../README.md) / MockedOutputOptions

# Type Alias: MockedOutputOptions

> **MockedOutputOptions**: `object`

Defined in: [index.ts:10](https://github.com/Xunnamius/test-utils/blob/93cda7940afb86ec332e09c9cb61f62e1d6f6f36/packages/test-mock-output/src/index.ts#L10)

## Type declaration

### passthrough?

> `optional` **passthrough**: (`"log"` \| `"warn"` \| `"error"` \| `"info"` \| `"stdout"` \| `"stderr"`)[]

Call jest.SpyInstance.mockRestore on one or more output functions
currently being spied upon.

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
