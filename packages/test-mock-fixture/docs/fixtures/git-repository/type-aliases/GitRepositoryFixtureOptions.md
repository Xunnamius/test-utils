[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/git-repository](../README.md) / GitRepositoryFixtureOptions

# Type Alias: GitRepositoryFixtureOptions

> **GitRepositoryFixtureOptions** = `Tagged`\<\{ `setupGit?`: (`git`) => `Promisable`\<`void`\>; \}, *typeof* [`gitRepositoryFixtureName`](../variables/gitRepositoryFixtureName.md)\>

Defined in: [fixtures/git-repository.ts:32](https://github.com/Xunnamius/test-utils/blob/47f33d69abeb32464a6a4e66b6c89c313568151a/packages/test-mock-fixture/src/fixtures/git-repository.ts#L32)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[gitRepositoryFixture](../functions/gitRepositoryFixture.md)
