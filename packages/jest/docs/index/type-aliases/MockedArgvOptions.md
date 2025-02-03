[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / MockedArgvOptions

# Type Alias: MockedArgvOptions

> **MockedArgvOptions**: `object`

Defined in: packages/test-mock-argv/dist/packages/test-mock-argv/src/index.d.ts:5

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
