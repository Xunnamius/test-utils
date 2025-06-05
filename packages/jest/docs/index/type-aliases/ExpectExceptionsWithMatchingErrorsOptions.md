[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / ExpectExceptionsWithMatchingErrorsOptions

# Type Alias: ExpectExceptionsWithMatchingErrorsOptions

> **ExpectExceptionsWithMatchingErrorsOptions** = `object`

Defined in: [packages/jest/src/index.ts:399](https://github.com/Xunnamius/test-utils/blob/dc3c2c9cf0d49938e10c5803e629f9457c84f104/packages/jest/src/index.ts#L399)

## See

[expectExceptionsWithMatchingErrors](../functions/expectExceptionsWithMatchingErrors.md)

## Properties

### runOnly?

> `optional` **runOnly**: `number`[]

Defined in: [packages/jest/src/index.ts:406](https://github.com/Xunnamius/test-utils/blob/dc3c2c9cf0d49938e10c5803e629f9457c84f104/packages/jest/src/index.ts#L406)

If present, only the given indices (zero-based) will be run. The others
will be skipped.

#### Default

```ts
undefined
```

***

### singleParameter?

> `optional` **singleParameter**: `boolean`

Defined in: [packages/jest/src/index.ts:417](https://github.com/Xunnamius/test-utils/blob/dc3c2c9cf0d49938e10c5803e629f9457c84f104/packages/jest/src/index.ts#L417)

If `true`, the first element of each `spec` tuple will be considered a
lone parameter (as if it were wrapped in an array).

This is to make adoption of this function by legacy code bases, which
used the old single-parameter style, easier and should otherwise be
left as `false`.

#### Default

```ts
false
```
