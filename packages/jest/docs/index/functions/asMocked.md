[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / asMocked

# Function: asMocked()

## Call Signature

> **asMocked**\<`T`\>(`options`?): `jest.MaybeMockedDeep`\<`T`\>

Defined in: [packages/jest/src/index.ts:58](https://github.com/Xunnamius/test-utils/blob/3696efa4c8cc1cb5f8d43500a65042b7b73b2aeb/packages/jest/src/index.ts#L58)

Return a function representing `T` but wrapped with Jest mock definitions.
Pass `{shallow: true}` as the only parameter to disable the deep mocking of
`T`, which otherwise occurs by default.

This is a more powerful version of Jest's own jest.mocked and
jest.MockedFn.

### Type Parameters

• **T** *extends* (...`args`) => `any`

### Parameters

#### options?

##### shallow

`false`

### Returns

`jest.MaybeMockedDeep`\<`T`\>

### Example

```ts
import type { MyFunctionType } from "./library";
jest.mock("./library");

const mockRepresentingMyFunctionType = asMocked<MyFunctionType>();
// ...
expect(mockRepresentingMyFunctionType.mock.calls[0][0]).toBe(42);
```

## Call Signature

> **asMocked**\<`T`\>(`options`): `jest.MaybeMocked`\<`T`\>

Defined in: [packages/jest/src/index.ts:77](https://github.com/Xunnamius/test-utils/blob/3696efa4c8cc1cb5f8d43500a65042b7b73b2aeb/packages/jest/src/index.ts#L77)

Return a function representing `T` but wrapped (shallowly) with Jest mock
definitions.

This is a more powerful version of Jest's own jest.mocked and
jest.MockedFn.

### Type Parameters

• **T** *extends* (...`args`) => `any`

### Parameters

#### options

##### shallow

`true`

### Returns

`jest.MaybeMocked`\<`T`\>

### Example

```ts
import type { MyFunctionType } from "./library";
jest.mock("./library");

const mockRepresentingMyFunctionType = asMocked<MyFunctionType>({ shallow: true });
// ...
expect(mockRepresentingMyFunctionType.mock.calls[0][0]).toBe(42);
```

## Call Signature

> **asMocked**\<`T`\>(`source`, `options`?): `jest.MaybeMockedDeep`\<`T`\>

Defined in: [packages/jest/src/index.ts:94](https://github.com/Xunnamius/test-utils/blob/3696efa4c8cc1cb5f8d43500a65042b7b73b2aeb/packages/jest/src/index.ts#L94)

Wrap the non-nullish `source` with Jest mock definitions. Pass `{shallow:
true}` as the second parameter to disable the default deep mocking behavior.

This is a more powerful version of Jest's own jest.mocked function.

### Type Parameters

• **T** *extends* `object`

### Parameters

#### source

`T`

#### options?

##### shallow

`false`

### Returns

`jest.MaybeMockedDeep`\<`T`\>

### Example

```ts
import { myFunction } from "./library";
jest.mock("./library");

const mockMyFunction = asMocked(myFunction);
expect(mockMyFunction.mock.calls[0][0]).toBe(42);
```

## Call Signature

> **asMocked**\<`T`\>(`source`, `options`): `jest.MaybeMocked`\<`T`\>

Defined in: [packages/jest/src/index.ts:111](https://github.com/Xunnamius/test-utils/blob/3696efa4c8cc1cb5f8d43500a65042b7b73b2aeb/packages/jest/src/index.ts#L111)

Shallowly wrap the non-nullish `source` with Jest mock definitions.

This is a more powerful version of Jest's own jest.mocked function.

### Type Parameters

• **T** *extends* `object`

### Parameters

#### source

`T`

#### options

##### shallow

`true`

### Returns

`jest.MaybeMocked`\<`T`\>

### Example

```ts
import { myFunction } from "./library";
jest.mock("./library");

const mockMyFunction = asMocked(myFunction, { shallow: true });
expect(mockMyFunction.mock.calls[0][0]).toBe(42);
```

## Call Signature

> **asMocked**\<`T`\>(...`args`): `jest.MaybeMockedDeep`\<`T`\> \| `jest.MaybeMocked`\<`T`\>

Defined in: [packages/jest/src/index.ts:129](https://github.com/Xunnamius/test-utils/blob/3696efa4c8cc1cb5f8d43500a65042b7b73b2aeb/packages/jest/src/index.ts#L129)

Wrap the non-nullish `source` (or `T` itself is `source` is omitted) with
Jest mock definitions.

This is a more powerful version of Jest's own jest.mocked function.

### Type Parameters

• **T** *extends* `object`

### Parameters

#### args

\[`object`\] | \[`T`, `object`\]

### Returns

`jest.MaybeMockedDeep`\<`T`\> \| `jest.MaybeMocked`\<`T`\>

### Example

```ts
import { myFunction } from "./library";
jest.mock("./library");

const mockMyFunction = asMocked(myFunction);
expect(mockMyFunction.mock.calls[0][0]).toBe(42);
```
