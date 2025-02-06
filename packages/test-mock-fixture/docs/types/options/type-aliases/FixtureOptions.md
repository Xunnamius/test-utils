[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [types/options](../README.md) / FixtureOptions

# Type Alias: FixtureOptions\<T\>

> **FixtureOptions**\<`T`\>: [`GlobalFixtureOptions`](GlobalFixtureOptions.md) & `T` *extends* [`DescribeRootFixture`](../../../fixtures/describe-root/type-aliases/DescribeRootFixture.md) ? [`DescribeRootFixtureOptions`](../../../fixtures/describe-root/type-aliases/DescribeRootFixtureOptions.md) : `unknown` & `T` *extends* [`DummyDirectoriesFixture`](../../../fixtures/dummy-directories/type-aliases/DummyDirectoriesFixture.md) ? [`DummyDirectoriesFixtureOptions`](../../../fixtures/dummy-directories/type-aliases/DummyDirectoriesFixtureOptions.md) : `unknown` & `T` *extends* [`DummyFilesFixture`](../../../fixtures/dummy-files/type-aliases/DummyFilesFixture.md) ? [`DummyFilesFixtureOptions`](../../../fixtures/dummy-files/type-aliases/DummyFilesFixtureOptions.md) : `unknown` & `T` *extends* [`DummyNpmPackageFixture`](../../../fixtures/dummy-npm-package/type-aliases/DummyNpmPackageFixture.md) ? [`DummyNpmPackageFixtureOptions`](../../../fixtures/dummy-npm-package/type-aliases/DummyNpmPackageFixtureOptions.md) : `unknown` & `T` *extends* [`GitRepositoryFixture`](../../../fixtures/git-repository/type-aliases/GitRepositoryFixture.md) ? [`GitRepositoryFixtureOptions`](../../../fixtures/git-repository/type-aliases/GitRepositoryFixtureOptions.md) : `unknown` & `T` *extends* [`NodeImportAndRunTestFixture`](../../../fixtures/node-import-and-run-test/type-aliases/NodeImportAndRunTestFixture.md) ? [`NodeImportAndRunTestFixtureOptions`](../../../fixtures/node-import-and-run-test/type-aliases/NodeImportAndRunTestFixtureOptions.md) : `unknown` & `T` *extends* [`RunTestFixture`](../../../fixtures/run-test/type-aliases/RunTestFixture.md) ? [`RunTestFixtureOptions`](../../../fixtures/run-test/type-aliases/RunTestFixtureOptions.md) : `unknown` & `T` *extends* [`NpmCopyPackageFixture`](../../../fixtures/npm-copy-package/type-aliases/NpmCopyPackageFixture.md) ? [`NpmCopyPackageFixtureOptions`](../../../fixtures/npm-copy-package/type-aliases/NpmCopyPackageFixtureOptions.md) : `unknown` & `T` *extends* [`NpmLinkPackageFixture`](../../../fixtures/npm-link-package/type-aliases/NpmLinkPackageFixture.md) ? [`NpmLinkPackageFixtureOptions`](../../../fixtures/npm-link-package/type-aliases/NpmLinkPackageFixtureOptions.md) : `unknown` & `T` *extends* [`WebpackTestFixture`](../../../fixtures/webpack-test/type-aliases/WebpackTestFixture.md) ? [`WebpackTestFixtureOptions`](../../../fixtures/webpack-test/type-aliases/WebpackTestFixtureOptions.md) : `unknown`

Defined in: [types/options.ts:99](https://github.com/Xunnamius/test-utils/blob/14b8913d5f48373a9eb174660cf655c3dfccb324/packages/test-mock-fixture/src/types/options.ts#L99)

This type combines all possible configurable options conditioned on which
fixtures are actually used.

## Type Parameters

• **T** *extends* [`GenericMockFixture`](../../fixtures/type-aliases/GenericMockFixture.md)
