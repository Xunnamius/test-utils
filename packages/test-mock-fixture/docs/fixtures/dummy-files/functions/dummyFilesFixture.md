[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/dummy-files](../README.md) / dummyFilesFixture

# Function: dummyFilesFixture()

> **dummyFilesFixture**(): [`DummyFilesFixture`](../type-aliases/DummyFilesFixture.md)

Defined in: [fixtures/dummy-files.ts:70](https://github.com/Xunnamius/test-utils/blob/47f33d69abeb32464a6a4e66b6c89c313568151a/packages/test-mock-fixture/src/fixtures/dummy-files.ts#L70)

This fixture writes out the files described by `initialVirtualFiles` to the
filesystem. Paths of any depth are allowed, any non-existent path components
(directories) will be created if they do not already exist, and any existing
components will be ignored.

This is similar to the behavior of `mkdir -p $(dirname filepath) && echo
"contents" > filepath` on Linux.

## Returns

[`DummyFilesFixture`](../type-aliases/DummyFilesFixture.md)
