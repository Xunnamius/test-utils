[**@-xun/test-mock-output**](../README.md)

***

[@-xun/test-mock-output](../README.md) / MockedOutputOptions

# Type Alias: MockedOutputOptions

> **MockedOutputOptions** = `object`

Defined in: [index.ts:11](https://github.com/Xunnamius/test-utils/blob/2615168e588d92b2e8ef54076f2cfebd50048866/packages/test-mock-output/src/index.ts#L11)

## See

[withMockedOutput](../functions/withMockedOutput.md)

## Properties

### passthrough?

> `optional` **passthrough**: (`"log"` \| `"warn"` \| `"error"` \| `"info"` \| `"stdout"` \| `"stderr"`)[]

Defined in: [index.ts:27](https://github.com/Xunnamius/test-utils/blob/2615168e588d92b2e8ef54076f2cfebd50048866/packages/test-mock-output/src/index.ts#L27)

Prevent mocking the implementation of one or more output spies, allowing
output to be passed through to the original function. Said spies will
remain functional.

#### Default

```ts
[]
```

***

### passthroughOutputIfDebugging?

> `optional` **passthroughOutputIfDebugging**: `boolean`

Defined in: [index.ts:19](https://github.com/Xunnamius/test-utils/blob/2615168e588d92b2e8ef54076f2cfebd50048866/packages/test-mock-output/src/index.ts#L19)

If `true`, whenever `process.env.DEBUG` is present, output functions will
still be spied on but their implementations will not be mocked, allowing
debug output to make it to the screen.

#### Default

```ts
true
```
