[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/git-repository](../README.md) / GitRepositoryFixtureContext

# Type Alias: GitRepositoryFixtureContext

> **GitRepositoryFixtureContext** = `Tagged`\<\{ `git`: `SimpleGit`; \}, *typeof* [`gitRepositoryFixtureName`](../variables/gitRepositoryFixtureName.md)\>

Defined in: [fixtures/git-repository.ts:57](https://github.com/Xunnamius/test-utils/blob/42ca751c587603f2d187a75074f79266154d176a/packages/test-mock-fixture/src/fixtures/git-repository.ts#L57)

Contains any additional context properties this fixture makes available by
the time its `setup` function has successfully executed.

It is the sole responsibility of this fixture to ensure the context contains
the mentioned properties as described.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same properties
(or no properties).

## See

[gitRepositoryFixture](../functions/gitRepositoryFixture.md)
