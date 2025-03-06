[**@-xun/test-mock-argv**](../README.md)

***

[@-xun/test-mock-argv](../README.md) / MockedArgvOptions

# Type Alias: MockedArgvOptions

> **MockedArgvOptions**: `object`

Defined in: [index.ts:6](https://github.com/Xunnamius/test-utils/blob/c13897a4bdd9d003d7f4777639fadde0b428d653/packages/test-mock-argv/src/index.ts#L6)

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
