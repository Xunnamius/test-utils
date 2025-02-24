[**@-xun/test-mock-fixture**](../../README.md)

***

[@-xun/test-mock-fixture](../../README.md) / [util](../README.md) / findIndexVirtualPath

# Function: findIndexVirtualPath()

## Call Signature

> **findIndexVirtualPath**(`virtualFiles`, `options`?): `RelativePath`

Defined in: [util.ts:25](https://github.com/Xunnamius/test-utils/blob/00edde0e2bf95c365dcb6b1757d59a8b79b87194/packages/test-mock-fixture/src/util.ts#L25)

Search a `virtualFiles` object for a key matching a `src/index` or
`src/index.test` file with a JS/TS/JSX extension.

### Parameters

#### virtualFiles

`Record`\<`string`, `string`\>

#### options?

##### throwIfNotFound?

`true`

**Default**

```ts
true
```

### Returns

`RelativePath`

## Call Signature

> **findIndexVirtualPath**(`virtualFiles`, `options`): `undefined` \| `RelativePath`

Defined in: [util.ts:34](https://github.com/Xunnamius/test-utils/blob/00edde0e2bf95c365dcb6b1757d59a8b79b87194/packages/test-mock-fixture/src/util.ts#L34)

Search a `virtualFiles` object for a key matching a `src/index` or
`src/index.test` file with a JS/TS/JSX extension.

### Parameters

#### virtualFiles

`Record`\<`string`, `string`\>

#### options

##### throwIfNotFound

`false`

**Default**

```ts
true
```

### Returns

`undefined` \| `RelativePath`

## Call Signature

> **findIndexVirtualPath**(`virtualFiles`, `options`): `undefined` \| `RelativePath`

Defined in: [util.ts:43](https://github.com/Xunnamius/test-utils/blob/00edde0e2bf95c365dcb6b1757d59a8b79b87194/packages/test-mock-fixture/src/util.ts#L43)

Search a `virtualFiles` object for a key matching a `src/index` or
`src/index.test` file with a JS/TS/JSX extension.

### Parameters

#### virtualFiles

`Record`\<`string`, `string`\>

#### options

##### throwIfNotFound

`boolean`

**Default**

```ts
true
```

### Returns

`undefined` \| `RelativePath`
