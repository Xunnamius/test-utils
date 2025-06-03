[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [fixtures/git-repository](../README.md) / GitRepositoryFixtureOptions

# Type Alias: GitRepositoryFixtureOptions

> **GitRepositoryFixtureOptions** = `Tagged`\<\{ `setupGit?`: (`git`) => `Promisable`\<`void`\>; \}, *typeof* [`gitRepositoryFixtureName`](../variables/gitRepositoryFixtureName.md)\>

Defined in: [fixtures/git-repository.ts:32](https://github.com/Xunnamius/test-utils/blob/c057e473267fff5b12c97e91a9dbe9329c9f76d1/packages/test-mock-fixture/src/fixtures/git-repository.ts#L32)

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[gitRepositoryFixture](../functions/gitRepositoryFixture.md)
