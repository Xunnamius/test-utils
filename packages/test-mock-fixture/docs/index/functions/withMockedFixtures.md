[**@-xun/test-mock-fixture**](../../README.md)

***

[@-xun/test-mock-fixture](../../README.md) / [index](../README.md) / withMockedFixtures

# Function: withMockedFixtures()

> **withMockedFixtures**\<`Fixtures`, `AdditionalOptions`, `AdditionalContext`\>(`test`, `fixtures`, `options`): `Promise`\<`void`\>

Defined in: [index.ts:74](https://github.com/Xunnamius/test-utils/blob/42ca751c587603f2d187a75074f79266154d176a/packages/test-mock-fixture/src/index.ts#L74)

Create a mock or "dummy" filesystem structure used to simulate one or more
runtime environments for the package under test.

When passing one-off custom fixture functions via the `fixtures` parameter,
use the `AdditionalOptions` and `AdditionalContext` type parameters to supply
any additional options and context where necessary.

## Type Parameters

### Fixtures

`Fixtures` *extends* [`GenericMockFixtureFunctions`](../../types/fixtures/type-aliases/GenericMockFixtureFunctions.md)

### AdditionalOptions

`AdditionalOptions` *extends* `Record`\<`string`, `unknown`\> = `EmptyObject`

### AdditionalContext

`AdditionalContext` *extends* `Record`\<`string`, `unknown`\> = `EmptyObject`

## Parameters

### test

(`context`) => `unknown`

The function responsible for interfacing with the testing framework (e.g.
running `expect` functions).

### fixtures

`Fixtures`

The fixtures used to construct the dummy environment. If the describeRoot
fixture is not included, it will be appended automatically. If the root
fixture is not included, it will be prepended automatically; if it is
included but not the first element, said instance(s) will be removed.

Otherwise, **duplicate fixtures are _not_ filtered out!**

### options

`ReadonlyDeep`\<[`GlobalFixtureOptions`](../../types/options/type-aliases/GlobalFixtureOptions.md) & [`GenericMockFixture`](../../types/fixtures/type-aliases/GenericMockFixture.md) *extends* `ReturnType`\<`Fixtures`\[`number`\]\> ? `unknown` : `IfAny`\<`ReturnType`\<`Fixtures`\[`number`\]\>, `unknown`, [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`DescribeRootFixture`](../../fixtures/describe-root/type-aliases/DescribeRootFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`DescribeRootFixtureOptions`](../../fixtures/describe-root/type-aliases/DescribeRootFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`DummyDirectoriesFixture`](../../fixtures/dummy-directories/type-aliases/DummyDirectoriesFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`DummyDirectoriesFixtureOptions`](../../fixtures/dummy-directories/type-aliases/DummyDirectoriesFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`DummyFilesFixture`](../../fixtures/dummy-files/type-aliases/DummyFilesFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`DummyFilesFixtureOptions`](../../fixtures/dummy-files/type-aliases/DummyFilesFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`DummyNpmPackageFixture`](../../fixtures/dummy-npm-package/type-aliases/DummyNpmPackageFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`DummyNpmPackageFixtureOptions`](../../fixtures/dummy-npm-package/type-aliases/DummyNpmPackageFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`GitRepositoryFixture`](../../fixtures/git-repository/type-aliases/GitRepositoryFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`GitRepositoryFixtureOptions`](../../fixtures/git-repository/type-aliases/GitRepositoryFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`NodeImportAndRunTestFixture`](../../fixtures/node-import-and-run-test/type-aliases/NodeImportAndRunTestFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`NodeImportAndRunTestFixtureOptions`](../../fixtures/node-import-and-run-test/type-aliases/NodeImportAndRunTestFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`RunTestFixture`](../../fixtures/run-test/type-aliases/RunTestFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`RunTestFixtureOptions`](../../fixtures/run-test/type-aliases/RunTestFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`NpmCopyPackageFixture`](../../fixtures/npm-copy-package/type-aliases/NpmCopyPackageFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`NpmCopyPackageFixtureOptions`](../../fixtures/npm-copy-package/type-aliases/NpmCopyPackageFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`NpmLinkPackageFixture`](../../fixtures/npm-link-package/type-aliases/NpmLinkPackageFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`NpmLinkPackageFixtureOptions`](../../fixtures/npm-link-package/type-aliases/NpmLinkPackageFixtureOptions.md), `true`\> & [`ReturnVIfTExtendsU`](../../types/util/type-aliases/ReturnVIfTExtendsU.md)\<[`WebpackTestFixture`](../../fixtures/webpack-test/type-aliases/WebpackTestFixture.md), `ReturnType`\<`Fixtures`\[`number`\]\>, [`WebpackTestFixtureOptions`](../../fixtures/webpack-test/type-aliases/WebpackTestFixtureOptions.md), `true`\>\> & `NoInfer`\<`AdditionalOptions`\>\>

Options seen by all fixtures.

## Returns

`Promise`\<`void`\>
