[**@-xun/common-dummies**](../../README.md)

***

[@-xun/common-dummies](../../README.md) / [packages](../README.md) / getDummyPackage

# Function: getDummyPackage()

> **getDummyPackage**\<`RequireObjectImports`, `RequireObjectExports`\>(`id`, `options`): [`DummyPackageMetadata`](../type-aliases/DummyPackageMetadata.md)\<`RequireObjectImports`, `RequireObjectExports`\>

Defined in: [packages.ts:50](https://github.com/Xunnamius/test-utils/blob/a4ee90aa294e616b12b163fa377e904968cde627/packages/common-dummies/src/packages.ts#L50)

Return metadata about an available dummy package.

## Type Parameters

### RequireObjectImports

`RequireObjectImports` *extends* `boolean` = `false`

### RequireObjectExports

`RequireObjectExports` *extends* `boolean` = `false`

## Parameters

### id

[`PackageName`](../type-aliases/PackageName.md)

### options

#### requireObjectExports?

`RequireObjectExports`

If `true`, `exports` must be an object and not `undefined`, `null`,
`string`, or an array.

**Default**

```ts
false
```

#### requireObjectImports?

`RequireObjectImports`

If `true`, `imports` must be an object and not `undefined`, `null`,
`string`, or an array.

**Default**

```ts
false
```

## Returns

[`DummyPackageMetadata`](../type-aliases/DummyPackageMetadata.md)\<`RequireObjectImports`, `RequireObjectExports`\>
