[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/dummy-directories](../README.md) / DummyDirectoriesFixtureOptions

# Type Alias: DummyDirectoriesFixtureOptions

> **DummyDirectoriesFixtureOptions**: `Tagged`\<\{ `directoryPaths`: `RelativePath`[]; \}, *typeof* [`dummyDirectoriesFixtureName`](../variables/dummyDirectoriesFixtureName.md)\>

Defined in: [fixtures/dummy-directories.ts:30](https://github.com/Xunnamius/test-utils/blob/5def0ad49a4eadefc61d6daed0a34b59fa75efb7/packages/test-mock-fixture/src/fixtures/dummy-directories.ts#L30)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[dummyDirectoriesFixture](../functions/dummyDirectoriesFixture.md)
