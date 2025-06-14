[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / ExpectExceptionsWithMatchingErrorsSpec

# Type Alias: ExpectExceptionsWithMatchingErrorsSpec\<Params, SingleParameter\>

> **ExpectExceptionsWithMatchingErrorsSpec**\<`Params`, `SingleParameter`\> = \[`"single-parameter"` *extends* `SingleParameter` ? `Params`\[`0`\] : `Params`, `string`\][]

Defined in: [packages/jest/src/index.ts:386](https://github.com/Xunnamius/test-utils/blob/c1756f2de03fb3f0e8006b40bd879fd1720188a9/packages/jest/src/index.ts#L386)

This type can be used to construct the error spec required by
[expectExceptionsWithMatchingErrors](../functions/expectExceptionsWithMatchingErrors.md) without having to call said
function.

Example:

```typescript
const errors = [
  [{ something: 1 }, 'expected error #1'],
  [{ something: 2 }, 'expected error #2'],
  [{ something: 3 }, 'expected error #3'],
] as Spec<[{ something: number }], 'single-parameter'>;

await expectExceptionsWithMatchingErrors(
  errors,
  (params) => fn(...params),
  { singleParameter: true }
);
```

## Type Parameters

### Params

`Params` *extends* readonly `unknown`[]

### SingleParameter

`SingleParameter` *extends* `"single-parameter"` \| `"multi-parameter"` = `"multi-parameter"`

## See

`spec` from [expectExceptionsWithMatchingErrors](../functions/expectExceptionsWithMatchingErrors.md)
