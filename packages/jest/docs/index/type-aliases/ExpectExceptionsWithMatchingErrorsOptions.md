[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / ExpectExceptionsWithMatchingErrorsOptions

# Type Alias: ExpectExceptionsWithMatchingErrorsOptions

> **ExpectExceptionsWithMatchingErrorsOptions** = `object`

Defined in: [packages/jest/src/index.ts:397](https://github.com/Xunnamius/test-utils/blob/4fc2dc9b5529a12a6f15193a82e6144613d89845/packages/jest/src/index.ts#L397)

## See

[expectExceptionsWithMatchingErrors](../functions/expectExceptionsWithMatchingErrors.md)

## Properties

### runOnly?

> `optional` **runOnly**: `number`[]

Defined in: [packages/jest/src/index.ts:404](https://github.com/Xunnamius/test-utils/blob/4fc2dc9b5529a12a6f15193a82e6144613d89845/packages/jest/src/index.ts#L404)

If present, only the given indices (zero-based) will be run. The others
will be skipped.

#### Default

```ts
undefined
```

***

### singleParameter?

> `optional` **singleParameter**: `boolean`

Defined in: [packages/jest/src/index.ts:415](https://github.com/Xunnamius/test-utils/blob/4fc2dc9b5529a12a6f15193a82e6144613d89845/packages/jest/src/index.ts#L415)

If `true`, the first element of each `spec` tuple will be considered a
lone parameter (as if it were wrapped in an array).

This is to make adoption of this function by legacy code bases, which
used the old single-parameter style, easier and should otherwise be
left as `false`.

#### Default

```ts
false
```
