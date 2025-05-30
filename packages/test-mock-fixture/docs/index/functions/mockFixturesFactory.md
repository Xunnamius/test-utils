[**@-xun/test-mock-fixture**](../../README.md)

***

[@-xun/test-mock-fixture](../../README.md) / [index](../README.md) / mockFixturesFactory

# Function: mockFixturesFactory()

> **mockFixturesFactory**\<`Fixtures`, `AdditionalOptions`, `AdditionalContext`\>(...`__namedParameters`): (...`args`) => `Promise`\<`void`\>

Defined in: [index.ts:321](https://github.com/Xunnamius/test-utils/blob/f98e631c6c1119fbde0ae47dd357cfe62eae579b/packages/test-mock-fixture/src/index.ts#L321)

Returns a function allowing for the creation of many mock (or "dummy")
filesystem structures, each used to simulate one or more runtime environments
for the package under test.

## Type Parameters

### Fixtures

`Fixtures` *extends* [`GenericMockFixtureFunctions`](../../types/fixtures/type-aliases/GenericMockFixtureFunctions.md)

### AdditionalOptions

`AdditionalOptions` *extends* `Record`\<`string`, `unknown`\> = `EmptyObject`

### AdditionalContext

`AdditionalContext` *extends* `Record`\<`string`, `unknown`\> = `EmptyObject`

## Parameters

### \_\_namedParameters

...\[`Fixtures`, `ReadonlyDeep`\<[`GlobalFixtureOptions`](../../types/options/type-aliases/GlobalFixtureOptions.md) & [`GenericMockFixture`](../../types/fixtures/type-aliases/GenericMockFixture.md) *extends* `ReturnType`\<`Fixtures`\[`number`\]\> ? `unknown` : `IfAny`\<`ReturnType`\<`Fixtures`\[`number`\]\>, `unknown`, [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`DescribeRootFixture`](../../fixtures/describe-root/type-aliases/DescribeRootFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`DescribeRootFixtureOptions`](../../fixtures/describe-root/type-aliases/DescribeRootFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`DummyDirectoriesFixture`](../../fixtures/dummy-directories/type-aliases/DummyDirectoriesFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`DummyDirectoriesFixtureOptions`](../../fixtures/dummy-directories/type-aliases/DummyDirectoriesFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`DummyFilesFixture`](../../fixtures/dummy-files/type-aliases/DummyFilesFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`DummyFilesFixtureOptions`](../../fixtures/dummy-files/type-aliases/DummyFilesFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`DummyNpmPackageFixture`](../../fixtures/dummy-npm-package/type-aliases/DummyNpmPackageFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`DummyNpmPackageFixtureOptions`](../../fixtures/dummy-npm-package/type-aliases/DummyNpmPackageFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`GitRepositoryFixture`](../../fixtures/git-repository/type-aliases/GitRepositoryFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`GitRepositoryFixtureOptions`](../../fixtures/git-repository/type-aliases/GitRepositoryFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`NodeImportAndRunTestFixture`](../../fixtures/node-import-and-run-test/type-aliases/NodeImportAndRunTestFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`NodeImportAndRunTestFixtureOptions`](../../fixtures/node-import-and-run-test/type-aliases/NodeImportAndRunTestFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`RunTestFixture`](../../fixtures/run-test/type-aliases/RunTestFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`RunTestFixtureOptions`](../../fixtures/run-test/type-aliases/RunTestFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`NpmCopyPackageFixture`](../../fixtures/npm-copy-package/type-aliases/NpmCopyPackageFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`NpmCopyPackageFixtureOptions`](../../fixtures/npm-copy-package/type-aliases/NpmCopyPackageFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`NpmLinkPackageFixture`](../../fixtures/npm-link-package/type-aliases/NpmLinkPackageFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`NpmLinkPackageFixtureOptions`](../../fixtures/npm-link-package/type-aliases/NpmLinkPackageFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`WebpackTestFixture`](../../fixtures/webpack-test/type-aliases/WebpackTestFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`WebpackTestFixtureOptions`](../../fixtures/webpack-test/type-aliases/WebpackTestFixtureOptions.md), `true`\>\> & `NoInfer`\<`AdditionalOptions`\>\>\]

## Returns

> (...`args`): `Promise`\<`void`\>

### Parameters

#### args

...\[(`context`) => `unknown`, `Partial`\<`ReadonlyDeep`\<[`GlobalFixtureOptions`](../../types/options/type-aliases/GlobalFixtureOptions.md) & [`GenericMockFixture`](../../types/fixtures/type-aliases/GenericMockFixture.md) *extends* `ReturnType`\<`Fixtures`\[`number`\]\> ? `unknown` : `IfAny`\<`ReturnType`\<`Fixtures`\[`number`\]\>, `unknown`, [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`DescribeRootFixture`](../../fixtures/describe-root/type-aliases/DescribeRootFixture.md), `ReturnType`\<...\>, [`DescribeRootFixtureOptions`](../../fixtures/describe-root/type-aliases/DescribeRootFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`DummyDirectoriesFixture`](../../fixtures/dummy-directories/type-aliases/DummyDirectoriesFixture.md), `ReturnType`\<...\>, [`DummyDirectoriesFixtureOptions`](../../fixtures/dummy-directories/type-aliases/DummyDirectoriesFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`DummyFilesFixture`](../../fixtures/dummy-files/type-aliases/DummyFilesFixture.md), `ReturnType`\<...\>, [`DummyFilesFixtureOptions`](../../fixtures/dummy-files/type-aliases/DummyFilesFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`DummyNpmPackageFixture`](../../fixtures/dummy-npm-package/type-aliases/DummyNpmPackageFixture.md), `ReturnType`\<...\>, [`DummyNpmPackageFixtureOptions`](../../fixtures/dummy-npm-package/type-aliases/DummyNpmPackageFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`GitRepositoryFixture`](../../fixtures/git-repository/type-aliases/GitRepositoryFixture.md), `ReturnType`\<...\>, [`GitRepositoryFixtureOptions`](../../fixtures/git-repository/type-aliases/GitRepositoryFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`NodeImportAndRunTestFixture`](../../fixtures/node-import-and-run-test/type-aliases/NodeImportAndRunTestFixture.md), `ReturnType`\<...\>, [`NodeImportAndRunTestFixtureOptions`](../../fixtures/node-import-and-run-test/type-aliases/NodeImportAndRunTestFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`RunTestFixture`](../../fixtures/run-test/type-aliases/RunTestFixture.md), `ReturnType`\<...\>, [`RunTestFixtureOptions`](../../fixtures/run-test/type-aliases/RunTestFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`NpmCopyPackageFixture`](../../fixtures/npm-copy-package/type-aliases/NpmCopyPackageFixture.md), `ReturnType`\<...\>, [`NpmCopyPackageFixtureOptions`](../../fixtures/npm-copy-package/type-aliases/NpmCopyPackageFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`NpmLinkPackageFixture`](../../fixtures/npm-link-package/type-aliases/NpmLinkPackageFixture.md), `ReturnType`\<...\>, [`NpmLinkPackageFixtureOptions`](../../fixtures/npm-link-package/type-aliases/NpmLinkPackageFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`WebpackTestFixture`](../../fixtures/webpack-test/type-aliases/WebpackTestFixture.md), `ReturnType`\<...\>, [`WebpackTestFixtureOptions`](../../fixtures/webpack-test/type-aliases/WebpackTestFixtureOptions.md), `true`\>\> & `NoInfer`\<`AdditionalOptions`\>\>\>?\]

### Returns

`Promise`\<`void`\>
