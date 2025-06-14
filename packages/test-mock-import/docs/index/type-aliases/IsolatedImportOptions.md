[**@-xun/test-mock-import**](../../README.md)

***

[@-xun/test-mock-import](../../README.md) / [index](../README.md) / IsolatedImportOptions

# Type Alias: IsolatedImportOptions

> **IsolatedImportOptions** = `object`

Defined in: [index.ts:20](https://github.com/Xunnamius/test-utils/blob/f4a59566b9602bdd57cd611af8799bea4c468777/packages/test-mock-import/src/index.ts#L20)

## See

[isolatedImport](../functions/isolatedImport.md)

## Properties

### reduceToDefault?

> `optional` **reduceToDefault**: `boolean`

Defined in: [index.ts:29](https://github.com/Xunnamius/test-utils/blob/f4a59566b9602bdd57cd611af8799bea4c468777/packages/test-mock-import/src/index.ts#L29)

By default, if `module.__esModule === true` and the only other property of
`module.exports` is `"default"`, then said `"default"` export will be
returned instead of a module object. Use `reduceToDefault` to override this
behavior in either direction.

#### Default

```ts
undefined
```
