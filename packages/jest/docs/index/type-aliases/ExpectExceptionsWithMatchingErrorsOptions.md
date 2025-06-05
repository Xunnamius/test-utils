[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / ExpectExceptionsWithMatchingErrorsOptions

# Type Alias: ExpectExceptionsWithMatchingErrorsOptions

> **ExpectExceptionsWithMatchingErrorsOptions** = `object`

Defined in: [packages/jest/src/index.ts:396](https://github.com/Xunnamius/test-utils/blob/ddc98d6724564c6aa1b8c427a63c41e54d5d77d6/packages/jest/src/index.ts#L396)

## See

[expectExceptionsWithMatchingErrors](../functions/expectExceptionsWithMatchingErrors.md)

## Properties

### runOnly?

> `optional` **runOnly**: `number`[]

Defined in: [packages/jest/src/index.ts:403](https://github.com/Xunnamius/test-utils/blob/ddc98d6724564c6aa1b8c427a63c41e54d5d77d6/packages/jest/src/index.ts#L403)

If present, only the given indices (zero-based) will be run. The others
will be skipped.

#### Default

```ts
undefined
```

***

### singleParameter?

> `optional` **singleParameter**: `boolean`

Defined in: [packages/jest/src/index.ts:414](https://github.com/Xunnamius/test-utils/blob/ddc98d6724564c6aa1b8c427a63c41e54d5d77d6/packages/jest/src/index.ts#L414)

If `true`, the first element of each `spec` tuple will be considered a
lone parameter (as if it were wrapped in an array).

This is to make adoption of this function by legacy code bases, which
used the old single-parameter style, easier and should otherwise be
left as `false`.

#### Default

```ts
false
```
