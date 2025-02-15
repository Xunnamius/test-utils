[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [types/fixtures](../README.md) / FixtureContext

# Type Alias: FixtureContext\<Options\>

> **FixtureContext**\<`Options`\>: `object` & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<`Options`, [`DescribeRootFixtureOptions`](../../../fixtures/describe-root/type-aliases/DescribeRootFixtureOptions.md), [`DescribeRootFixtureContext`](../../../fixtures/describe-root/type-aliases/DescribeRootFixtureContext.md)\> & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<`Options`, [`DummyDirectoriesFixtureOptions`](../../../fixtures/dummy-directories/type-aliases/DummyDirectoriesFixtureOptions.md), [`DummyDirectoriesFixtureContext`](../../../fixtures/dummy-directories/type-aliases/DummyDirectoriesFixtureContext.md)\> & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<`Options`, [`DummyFilesFixtureOptions`](../../../fixtures/dummy-files/type-aliases/DummyFilesFixtureOptions.md), [`DummyFilesFixtureContext`](../../../fixtures/dummy-files/type-aliases/DummyFilesFixtureContext.md)\> & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<`Options`, [`DummyNpmPackageFixtureOptions`](../../../fixtures/dummy-npm-package/type-aliases/DummyNpmPackageFixtureOptions.md), [`DummyNpmPackageFixtureContext`](../../../fixtures/dummy-npm-package/type-aliases/DummyNpmPackageFixtureContext.md)\> & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<`Options`, [`GitRepositoryFixtureOptions`](../../../fixtures/git-repository/type-aliases/GitRepositoryFixtureOptions.md), [`GitRepositoryFixtureContext`](../../../fixtures/git-repository/type-aliases/GitRepositoryFixtureContext.md)\> & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<`Options`, [`NodeImportAndRunTestFixtureOptions`](../../../fixtures/node-import-and-run-test/type-aliases/NodeImportAndRunTestFixtureOptions.md), [`NodeImportAndRunTestFixtureContext`](../../../fixtures/node-import-and-run-test/type-aliases/NodeImportAndRunTestFixtureContext.md)\> & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<`Options`, [`RunTestFixtureOptions`](../../../fixtures/run-test/type-aliases/RunTestFixtureOptions.md), [`RunTestFixtureContext`](../../../fixtures/run-test/type-aliases/RunTestFixtureContext.md)\> & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<`Options`, [`NpmCopyPackageFixtureOptions`](../../../fixtures/npm-copy-package/type-aliases/NpmCopyPackageFixtureOptions.md), [`NpmCopyPackageFixtureContext`](../../../fixtures/npm-copy-package/type-aliases/NpmCopyPackageFixtureContext.md)\> & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<`Options`, [`NpmLinkPackageFixtureOptions`](../../../fixtures/npm-link-package/type-aliases/NpmLinkPackageFixtureOptions.md), [`NpmLinkPackageFixtureContext`](../../../fixtures/npm-link-package/type-aliases/NpmLinkPackageFixtureContext.md)\> & [`ReturnVIfTExtendsU`](../../util/type-aliases/ReturnVIfTExtendsU.md)\<`Options`, [`WebpackTestFixtureOptions`](../../../fixtures/webpack-test/type-aliases/WebpackTestFixtureOptions.md), [`WebpackTestFixtureContext`](../../../fixtures/webpack-test/type-aliases/WebpackTestFixtureContext.md)\>

Defined in: [types/fixtures.ts:107](https://github.com/Xunnamius/test-utils/blob/4d9800c324b9a83f9e55d66c6e4ccd83762bef71/packages/test-mock-fixture/src/types/fixtures.ts#L107)

The context object passed around between every [MockFixture](MockFixture.md).

## Type declaration

### debug

> **debug**: `ExtendedDebugger`

An ExtendedDebugger instance extended specifically for use by the
current fixture.

### fixtures

> **fixtures**: [`GenericMockFixture`](GenericMockFixture.md)[]

The fixtures that comprise the current runtime.

### fs

> **fs**: [`FixtureFs`](FixtureFs.md)

Context-sensitive asynchronous wrappers for `node:fs/promises` functions
(excluding FixtureFs.glob) with in-built debugging and exception
handling.

Note that all relative `PathLike` parameters are considered local to
`root`, not the current working directory, and will be translated into
AbsolutePaths as such.

### options

> **options**: `ReadonlyDeep`\<[`GlobalFixtureOptions`](../../options/type-aliases/GlobalFixtureOptions.md)\> & `ReadonlyDeep`\<`Omit`\<`Options` *extends* `Tagged`\<`unknown`, `PropertyKey`\> ? `UnwrapTagged`\<`Options`\> : `Options`, *typeof* `emptyObjectSymbol`\>\>

The options applicable to the current runtime.

### root

> **root**: `AbsolutePath`

The AbsolutePath pointing to the dummy root directory.

### virtualFiles

> **virtualFiles**: `object`

The mutable "virtual files" as they exist currently in memory, including
any mutations performed by fixtures.

#### Index Signature

\[`filePath`: `RelativePath`\]: `string`

#### See

[GlobalFixtureOptions.initialVirtualFiles](../../options/type-aliases/GlobalFixtureOptions.md#initialvirtualfiles)

## Type Parameters

• **Options**
