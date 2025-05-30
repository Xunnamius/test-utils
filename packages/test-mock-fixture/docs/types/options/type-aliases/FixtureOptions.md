[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [types/options](../README.md) / FixtureOptions

# Type Alias: FixtureOptions\<MockFixture, ShouldUnwrap\>

> **FixtureOptions**\<`MockFixture`, `ShouldUnwrap`\> = [`GlobalFixtureOptions`](GlobalFixtureOptions.md) & [`GenericMockFixture`](../../fixtures/type-aliases/GenericMockFixture.md) *extends* `MockFixture` ? `unknown` : `IfAny`\<`MockFixture`, `unknown`, [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<[`DescribeRootFixture`](../../../fixtures/describe-root/type-aliases/DescribeRootFixture.md), `MockFixture`, [`DescribeRootFixtureOptions`](../../../fixtures/describe-root/type-aliases/DescribeRootFixtureOptions.md), `ShouldUnwrap`\> & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<[`DummyDirectoriesFixture`](../../../fixtures/dummy-directories/type-aliases/DummyDirectoriesFixture.md), `MockFixture`, [`DummyDirectoriesFixtureOptions`](../../../fixtures/dummy-directories/type-aliases/DummyDirectoriesFixtureOptions.md), `ShouldUnwrap`\> & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<[`DummyFilesFixture`](../../../fixtures/dummy-files/type-aliases/DummyFilesFixture.md), `MockFixture`, [`DummyFilesFixtureOptions`](../../../fixtures/dummy-files/type-aliases/DummyFilesFixtureOptions.md), `ShouldUnwrap`\> & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<[`DummyNpmPackageFixture`](../../../fixtures/dummy-npm-package/type-aliases/DummyNpmPackageFixture.md), `MockFixture`, [`DummyNpmPackageFixtureOptions`](../../../fixtures/dummy-npm-package/type-aliases/DummyNpmPackageFixtureOptions.md), `ShouldUnwrap`\> & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<[`GitRepositoryFixture`](../../../fixtures/git-repository/type-aliases/GitRepositoryFixture.md), `MockFixture`, [`GitRepositoryFixtureOptions`](../../../fixtures/git-repository/type-aliases/GitRepositoryFixtureOptions.md), `ShouldUnwrap`\> & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<[`NodeImportAndRunTestFixture`](../../../fixtures/node-import-and-run-test/type-aliases/NodeImportAndRunTestFixture.md), `MockFixture`, [`NodeImportAndRunTestFixtureOptions`](../../../fixtures/node-import-and-run-test/type-aliases/NodeImportAndRunTestFixtureOptions.md), `ShouldUnwrap`\> & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<[`RunTestFixture`](../../../fixtures/run-test/type-aliases/RunTestFixture.md), `MockFixture`, [`RunTestFixtureOptions`](../../../fixtures/run-test/type-aliases/RunTestFixtureOptions.md), `ShouldUnwrap`\> & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<[`NpmCopyPackageFixture`](../../../fixtures/npm-copy-package/type-aliases/NpmCopyPackageFixture.md), `MockFixture`, [`NpmCopyPackageFixtureOptions`](../../../fixtures/npm-copy-package/type-aliases/NpmCopyPackageFixtureOptions.md), `ShouldUnwrap`\> & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<[`NpmLinkPackageFixture`](../../../fixtures/npm-link-package/type-aliases/NpmLinkPackageFixture.md), `MockFixture`, [`NpmLinkPackageFixtureOptions`](../../../fixtures/npm-link-package/type-aliases/NpmLinkPackageFixtureOptions.md), `ShouldUnwrap`\> & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<[`WebpackTestFixture`](../../../fixtures/webpack-test/type-aliases/WebpackTestFixture.md), `MockFixture`, [`WebpackTestFixtureOptions`](../../../fixtures/webpack-test/type-aliases/WebpackTestFixtureOptions.md), `ShouldUnwrap`\>\>

Defined in: [types/options.ts:108](https://github.com/Xunnamius/test-utils/blob/f98e631c6c1119fbde0ae47dd357cfe62eae579b/packages/test-mock-fixture/src/types/options.ts#L108)

This type combines all possible configurable options conditioned on which
fixtures are actually used.

Pass `unknown` to return a generic result.

## Type Parameters

### MockFixture

`MockFixture`

### ShouldUnwrap

`ShouldUnwrap` *extends* `boolean` = `true`
