[**@-xun/test-mock-import**](../../README.md)

***

[@-xun/test-mock-import](../../README.md) / [index](../README.md) / IsolatedImportOptions

# Type Alias: IsolatedImportOptions

> **IsolatedImportOptions**: `object`

Defined in: [index.ts:20](https://github.com/Xunnamius/test-utils/blob/d2a114924b93a5c85aa204536a1fc478f9090bed/packages/test-mock-import/src/index.ts#L20)

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
