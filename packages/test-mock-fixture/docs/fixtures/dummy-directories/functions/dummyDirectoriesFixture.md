[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/dummy-directories](../README.md) / dummyDirectoriesFixture

# Function: dummyDirectoriesFixture()

> **dummyDirectoriesFixture**(): [`DummyDirectoriesFixture`](../type-aliases/DummyDirectoriesFixture.md)

Defined in: [fixtures/dummy-directories.ts:66](https://github.com/Xunnamius/test-utils/blob/7f7e115f89b6524c00da237b9112899ec640d519/packages/test-mock-fixture/src/fixtures/dummy-directories.ts#L66)

This fixture writes out the directories described by `initialDirectories` to
the filesystem. Subdirectory paths of any depth are allowed, any non-existent
path components will be created if they do not already exist, and any
existing components will be ignored. This is similar to the behavior of
`mkdir -p` on Linux.

## Returns

[`DummyDirectoriesFixture`](../type-aliases/DummyDirectoriesFixture.md)
