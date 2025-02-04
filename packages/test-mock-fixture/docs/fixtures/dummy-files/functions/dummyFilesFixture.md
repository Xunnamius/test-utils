[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/dummy-files](../README.md) / dummyFilesFixture

# Function: dummyFilesFixture()

> **dummyFilesFixture**(): [`DummyFilesFixture`](../type-aliases/DummyFilesFixture.md)

Defined in: [fixtures/dummy-files.ts:62](https://github.com/Xunnamius/test-utils/blob/7f7e115f89b6524c00da237b9112899ec640d519/packages/test-mock-fixture/src/fixtures/dummy-files.ts#L62)

This fixture writes out the files described by `initialVirtualFiles` to the
filesystem. Paths of any depth are allowed, any non-existent path components
(directories) will be created if they do not already exist, and any existing
components will be ignored.

This is similar to the behavior of `mkdir -p $(dirname filepath) && echo
"contents" > filepath` on Linux.

## Returns

[`DummyFilesFixture`](../type-aliases/DummyFilesFixture.md)
