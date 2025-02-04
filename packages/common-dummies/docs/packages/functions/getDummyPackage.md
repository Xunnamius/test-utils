[**@-xun/common-dummies**](../../README.md)

***

[@-xun/common-dummies](../../README.md) / [packages](../README.md) / getDummyPackage

# Function: getDummyPackage()

> **getDummyPackage**(`id`, `__namedParameters`): [`DummyPackageMetadata`](../type-aliases/DummyPackageMetadata.md)\<*typeof* `requireObjectImports`, *typeof* `requireObjectExports`\>

Defined in: [packages.ts:48](https://github.com/Xunnamius/test-utils/blob/bf9dad1dc32da28cbc1e037209c9470095d7efa6/packages/common-dummies/src/packages.ts#L48)

Return metadata about an available dummy package.

## Parameters

### id

[`PackageName`](../type-aliases/PackageName.md)

### \_\_namedParameters

#### requireObjectExports

`boolean` = `false`

If `true`, `exports` must be an object and not `null`, `undefined`,
`string`, or an array.

**Default**

```ts
false
```

#### requireObjectImports

`boolean` = `false`

If `true`, `imports` must be an object and not `null`, `undefined`,
`string`, or an array.

**Default**

```ts
false
```

## Returns

[`DummyPackageMetadata`](../type-aliases/DummyPackageMetadata.md)\<*typeof* `requireObjectImports`, *typeof* `requireObjectExports`\>
