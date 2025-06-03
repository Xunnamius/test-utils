[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/dummy-files](../README.md) / DummyFilesFixtureOptions

# Type Alias: DummyFilesFixtureOptions

> **DummyFilesFixtureOptions** = `Tagged`\<`Required`\<`Pick`\<[`GlobalFixtureOptions`](../../../types/options/type-aliases/GlobalFixtureOptions.md), `"initialVirtualFiles"`\>\> & `object`, *typeof* [`dummyFilesFixtureName`](../variables/dummyFilesFixtureName.md)\>

Defined in: [fixtures/dummy-files.ts:33](https://github.com/Xunnamius/test-utils/blob/c057e473267fff5b12c97e91a9dbe9329c9f76d1/packages/test-mock-fixture/src/fixtures/dummy-files.ts#L33)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[dummyFilesFixture](../functions/dummyFilesFixture.md)
