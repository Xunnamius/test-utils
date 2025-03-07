[**@-xun/test-mock-fixture**](../../README.md)

***

[@-xun/test-mock-fixture](../../README.md) / [util](../README.md) / findIndexVirtualPath

# Function: findIndexVirtualPath()

## Call Signature

> **findIndexVirtualPath**(`virtualFiles`, `options`?): `RelativePath`

Defined in: [util.ts:30](https://github.com/Xunnamius/test-utils/blob/a9b840fe53d5a76c20197dcb52c5564e63e661b4/packages/test-mock-fixture/src/util.ts#L30)

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

Defined in: [util.ts:39](https://github.com/Xunnamius/test-utils/blob/a9b840fe53d5a76c20197dcb52c5564e63e661b4/packages/test-mock-fixture/src/util.ts#L39)

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

Defined in: [util.ts:48](https://github.com/Xunnamius/test-utils/blob/a9b840fe53d5a76c20197dcb52c5564e63e661b4/packages/test-mock-fixture/src/util.ts#L48)

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
