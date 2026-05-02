[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/dummy-directories](../README.md) / dummyDirectoriesFixture

# Function: dummyDirectoriesFixture()

> **dummyDirectoriesFixture**(): [`DummyDirectoriesFixture`](../type-aliases/DummyDirectoriesFixture.md)

Defined in: [fixtures/dummy-directories.ts:66](https://github.com/Xunnamius/test-utils/blob/bf9d3eb6ac5a6277f078e479716d2ea5a3a003ae/packages/test-mock-fixture/src/fixtures/dummy-directories.ts#L66)

This fixture writes out the directories described by `initialDirectories` to
the filesystem. Subdirectory paths of any depth are allowed, any non-existent
path components will be created if they do not already exist, and any
existing components will be ignored. This is similar to the behavior of
`mkdir -p` on Linux.

## Returns

[`DummyDirectoriesFixture`](../type-aliases/DummyDirectoriesFixture.md)
