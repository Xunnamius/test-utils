[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / asMocked

# Function: asMocked()

## Call Signature

> **asMocked**\<`T`\>(`options`?): `jest.MaybeMockedDeep`\<`T`\>

Defined in: [packages/jest/src/index.ts:60](https://github.com/Xunnamius/test-utils/blob/e210a46ecf0359b2719b87acef5ff9173aab1469/packages/jest/src/index.ts#L60)

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

Defined in: [packages/jest/src/index.ts:79](https://github.com/Xunnamius/test-utils/blob/e210a46ecf0359b2719b87acef5ff9173aab1469/packages/jest/src/index.ts#L79)

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

Defined in: [packages/jest/src/index.ts:96](https://github.com/Xunnamius/test-utils/blob/e210a46ecf0359b2719b87acef5ff9173aab1469/packages/jest/src/index.ts#L96)

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

Defined in: [packages/jest/src/index.ts:113](https://github.com/Xunnamius/test-utils/blob/e210a46ecf0359b2719b87acef5ff9173aab1469/packages/jest/src/index.ts#L113)

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

Defined in: [packages/jest/src/index.ts:131](https://github.com/Xunnamius/test-utils/blob/e210a46ecf0359b2719b87acef5ff9173aab1469/packages/jest/src/index.ts#L131)

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
