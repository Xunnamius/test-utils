[**@-xun/test-mock-import**](../../README.md)

***

[@-xun/test-mock-import](../../README.md) / [index](../README.md) / IsolatedImportOptions

# Type Alias: IsolatedImportOptions

> **IsolatedImportOptions**: `object`

Defined in: [index.ts:20](https://github.com/Xunnamius/test-utils/blob/8acdc11ae9e10a8615a49f1627984159c2f4cfc9/packages/test-mock-import/src/index.ts#L20)

## Type declaration

### reduceToDefault?

> `optional` **reduceToDefault**: `boolean`

By default, if `module.__esModule === true` and the only other property of
`module.exports` is `"default"`, then said `"default"` export will be
returned instead of a module object. Use `reduceToDefault` to override this
behavior in either direction.

#### Default

```ts
undefined
```

## See

[isolatedImport](../functions/isolatedImport.md)
