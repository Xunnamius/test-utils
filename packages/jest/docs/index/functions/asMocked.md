[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / asMocked

# Function: asMocked()

## Call Signature

> **asMocked**\<`T`\>(`options`?): `MaybeMockedDeep`\<`T`\>

Defined in: [packages/jest/src/index.ts:72](https://github.com/Xunnamius/test-utils/blob/604fe556e29c02dc61319452730f6809aaaac02c/packages/jest/src/index.ts#L72)

Return a function representing `T` but wrapped with Jest mock definitions.
Pass `{shallow: true}` as the only parameter to disable the deep mocking of
`T`, which otherwise occurs by default.

This is a more powerful version of Jest's own jest.mocked and
jest.MockedFn.

### Type Parameters

• **T** *extends* (...`args`) => `any`

### Parameters

#### options?

##### shallow?

`false`

### Returns

`MaybeMockedDeep`\<`T`\>

### Example

```ts
import type { MyFunctionType } from "./library";
jest.mock("./library");

const mockRepresentingMyFunctionType = asMocked<MyFunctionType>();
// ...
expect(mockRepresentingMyFunctionType.mock.calls[0][0]).toBe(42);
```

## Call Signature

> **asMocked**\<`T`\>(`options`): `MaybeMocked`\<`T`\>

Defined in: [packages/jest/src/index.ts:91](https://github.com/Xunnamius/test-utils/blob/604fe556e29c02dc61319452730f6809aaaac02c/packages/jest/src/index.ts#L91)

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

`MaybeMocked`\<`T`\>

### Example

```ts
import type { MyFunctionType } from "./library";
jest.mock("./library");

const mockRepresentingMyFunctionType = asMocked<MyFunctionType>({ shallow: true });
// ...
expect(mockRepresentingMyFunctionType.mock.calls[0][0]).toBe(42);
```

## Call Signature

> **asMocked**\<`T`\>(`source`, `options`?): `MaybeMockedDeep`\<`T`\>

Defined in: [packages/jest/src/index.ts:108](https://github.com/Xunnamius/test-utils/blob/604fe556e29c02dc61319452730f6809aaaac02c/packages/jest/src/index.ts#L108)

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

`MaybeMockedDeep`\<`T`\>

### Example

```ts
import { myFunction } from "./library";
jest.mock("./library");

const mockMyFunction = asMocked(myFunction);
expect(mockMyFunction.mock.calls[0][0]).toBe(42);
```

## Call Signature

> **asMocked**\<`T`\>(`source`, `options`): `MaybeMocked`\<`T`\>

Defined in: [packages/jest/src/index.ts:125](https://github.com/Xunnamius/test-utils/blob/604fe556e29c02dc61319452730f6809aaaac02c/packages/jest/src/index.ts#L125)

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

`MaybeMocked`\<`T`\>

### Example

```ts
import { myFunction } from "./library";
jest.mock("./library");

const mockMyFunction = asMocked(myFunction, { shallow: true });
expect(mockMyFunction.mock.calls[0][0]).toBe(42);
```

## Call Signature

> **asMocked**\<`T`\>(...`args`): `MaybeMockedDeep`\<`T`\> \| `MaybeMocked`\<`T`\>

Defined in: [packages/jest/src/index.ts:143](https://github.com/Xunnamius/test-utils/blob/604fe556e29c02dc61319452730f6809aaaac02c/packages/jest/src/index.ts#L143)

Wrap the non-nullish `source` (or `T` itself is `source` is omitted) with
Jest mock definitions.

This is a more powerful version of Jest's own jest.mocked function.

### Type Parameters

• **T** *extends* `object`

### Parameters

#### args

\[`object`\] | \[`T`, `object`\]

### Returns

`MaybeMockedDeep`\<`T`\> \| `MaybeMocked`\<`T`\>

### Example

```ts
import { myFunction } from "./library";
jest.mock("./library");

const mockMyFunction = asMocked(myFunction);
expect(mockMyFunction.mock.calls[0][0]).toBe(42);
```
