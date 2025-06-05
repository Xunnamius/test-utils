[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / ExpectExceptionsWithMatchingErrorsSpec

# Type Alias: ExpectExceptionsWithMatchingErrorsSpec\<Params, SingleParameter\>

> **ExpectExceptionsWithMatchingErrorsSpec**\<`Params`, `SingleParameter`\> = `Tagged`\<\[`"single-parameter"` *extends* `SingleParameter` ? `Params`\[`0`\] : `Params`, `string`\][], `SingleParameter`\>

Defined in: [packages/jest/src/index.ts:385](https://github.com/Xunnamius/test-utils/blob/dc3c2c9cf0d49938e10c5803e629f9457c84f104/packages/jest/src/index.ts#L385)

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
