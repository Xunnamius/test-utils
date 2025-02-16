[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/dummy-directories](../README.md) / DummyDirectoriesFixtureOptions

# Type Alias: DummyDirectoriesFixtureOptions

> **DummyDirectoriesFixtureOptions**: `Tagged`\<\{ `directoryPaths`: `RelativePath`[]; \}, *typeof* [`dummyDirectoriesFixtureName`](../variables/dummyDirectoriesFixtureName.md)\>

Defined in: [fixtures/dummy-directories.ts:30](https://github.com/Xunnamius/test-utils/blob/ba2bb54f0f2d41708034e4076c72856c63c5167a/packages/test-mock-fixture/src/fixtures/dummy-directories.ts#L30)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[dummyDirectoriesFixture](../functions/dummyDirectoriesFixture.md)
