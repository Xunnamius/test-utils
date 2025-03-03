[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/dummy-files](../README.md) / dummyFilesFixture

# Function: dummyFilesFixture()

> **dummyFilesFixture**(): [`DummyFilesFixture`](../type-aliases/DummyFilesFixture.md)

Defined in: [packages/test-mock-fixture/src/fixtures/dummy-files.ts:70](https://github.com/Xunnamius/test-utils/blob/fbb0e2e25a6b2830b1b2ac319e054df42247cc53/packages/test-mock-fixture/src/fixtures/dummy-files.ts#L70)

This fixture writes out the files described by `initialVirtualFiles` to the
filesystem. Paths of any depth are allowed, any non-existent path components
(directories) will be created if they do not already exist, and any existing
components will be ignored.

This is similar to the behavior of `mkdir -p $(dirname filepath) && echo
"contents" > filepath` on Linux.

## Returns

[`DummyFilesFixture`](../type-aliases/DummyFilesFixture.md)
