[**@-xun/test-mock-fixture**](../../README.md)

***

[@-xun/test-mock-fixture](../../README.md) / [util](../README.md) / FixtureContext

# Interface: FixtureContext\<CustomOptions\>

Defined in: [util.ts:11](https://github.com/Xunnamius/test-utils/blob/fb7ffeb540b6329cd58507a70130e011f552c63c/packages/test-mock-fixture/src/util.ts#L11)

## Extends

- `Partial`\<`TestResultProvider`\>.`Partial`\<`TreeOutputProvider`\>.`Partial`\<`GitProvider`\>

## Type Parameters

• **CustomOptions** *extends* `Record`\<`string`, `unknown`\> = `Record`\<`string`, `unknown`\>

## Properties

### debug

> **debug**: `ExtendedDebugger`

Defined in: [util.ts:21](https://github.com/Xunnamius/test-utils/blob/fb7ffeb540b6329cd58507a70130e011f552c63c/packages/test-mock-fixture/src/util.ts#L21)

***

### fileContents

> **fileContents**: `object`

Defined in: [util.ts:20](https://github.com/Xunnamius/test-utils/blob/fb7ffeb540b6329cd58507a70130e011f552c63c/packages/test-mock-fixture/src/util.ts#L20)

#### Index Signature

\[`filePath`: `string`\]: `string`

***

### fs

> **fs**: `object`

Defined in: [util.ts:26](https://github.com/Xunnamius/test-utils/blob/fb7ffeb540b6329cd58507a70130e011f552c63c/packages/test-mock-fixture/src/util.ts#L26)

Convenience filesystem functions. All paths are local to the current
context root.

#### accessFile

> **accessFile**: `WithoutContextProperty`\<`any`\>

#### copy

> **copy**: `WithoutContextProperty`\<`any`\>

#### mkdir

> **mkdir**: `WithoutContextProperty`\<`any`\>

#### readFile

> **readFile**: `WithoutContextProperty`\<`any`\>

#### remove

> **remove**: `WithoutContextProperty`\<`any`\>

#### rename

> **rename**: `WithoutContextProperty`\<`any`\>

#### symlink

> **symlink**: `WithoutContextProperty`\<`any`\>

#### writeFile

> **writeFile**: `WithoutContextProperty`\<`any`\>

***

### options

> **options**: `any`

Defined in: [util.ts:18](https://github.com/Xunnamius/test-utils/blob/fb7ffeb540b6329cd58507a70130e011f552c63c/packages/test-mock-fixture/src/util.ts#L18)

***

### root

> **root**: `string`

Defined in: [util.ts:16](https://github.com/Xunnamius/test-utils/blob/fb7ffeb540b6329cd58507a70130e011f552c63c/packages/test-mock-fixture/src/util.ts#L16)

***

### testIdentifier

> **testIdentifier**: `string`

Defined in: [util.ts:17](https://github.com/Xunnamius/test-utils/blob/fb7ffeb540b6329cd58507a70130e011f552c63c/packages/test-mock-fixture/src/util.ts#L17)

***

### using

> **using**: [`MockFixture`](MockFixture.md)[]

Defined in: [util.ts:19](https://github.com/Xunnamius/test-utils/blob/fb7ffeb540b6329cd58507a70130e011f552c63c/packages/test-mock-fixture/src/util.ts#L19)
