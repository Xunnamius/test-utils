[**@-xun/test-mock-fixture**](../../../README.md)

***

[@-xun/test-mock-fixture](../../../README.md) / [types/fixtures](../README.md) / FixtureContext

# Type Alias: FixtureContext\<Options\>

> **FixtureContext**\<`Options`\>: `object` & `Options` *extends* [`DescribeRootFixtureOptions`](../../../fixtures/describe-root/type-aliases/DescribeRootFixtureOptions.md) ? [`DescribeRootFixtureContext`](../../../fixtures/describe-root/type-aliases/DescribeRootFixtureContext.md) : `unknown` & `Options` *extends* [`DummyDirectoriesFixtureOptions`](../../../fixtures/dummy-directories/type-aliases/DummyDirectoriesFixtureOptions.md) ? [`DummyDirectoriesFixtureContext`](../../../fixtures/dummy-directories/type-aliases/DummyDirectoriesFixtureContext.md) : `unknown` & `Options` *extends* [`DummyFilesFixtureOptions`](../../../fixtures/dummy-files/type-aliases/DummyFilesFixtureOptions.md) ? [`DummyFilesFixtureContext`](../../../fixtures/dummy-files/type-aliases/DummyFilesFixtureContext.md) : `unknown` & `Options` *extends* [`DummyNpmPackageFixtureOptions`](../../../fixtures/dummy-npm-package/type-aliases/DummyNpmPackageFixtureOptions.md) ? [`DummyNpmPackageFixtureContext`](../../../fixtures/dummy-npm-package/type-aliases/DummyNpmPackageFixtureContext.md) : `unknown` & `Options` *extends* [`GitRepositoryFixtureOptions`](../../../fixtures/git-repository/type-aliases/GitRepositoryFixtureOptions.md) ? [`GitRepositoryFixtureContext`](../../../fixtures/git-repository/type-aliases/GitRepositoryFixtureContext.md) : `unknown` & `Options` *extends* [`NodeImportAndRunTestFixtureOptions`](../../../fixtures/node-import-and-run-test/type-aliases/NodeImportAndRunTestFixtureOptions.md) ? [`NodeImportAndRunTestFixtureContext`](../../../fixtures/node-import-and-run-test/type-aliases/NodeImportAndRunTestFixtureContext.md) : `unknown` & `Options` *extends* [`RunTestFixtureOptions`](../../../fixtures/run-test/type-aliases/RunTestFixtureOptions.md) ? [`RunTestFixtureContext`](../../../fixtures/run-test/type-aliases/RunTestFixtureContext.md) : `unknown` & `Options` *extends* [`NpmCopyPackageFixtureOptions`](../../../fixtures/npm-copy-package/type-aliases/NpmCopyPackageFixtureOptions.md) ? [`NpmCopyPackageFixtureContext`](../../../fixtures/npm-copy-package/type-aliases/NpmCopyPackageFixtureContext.md) : `unknown` & `Options` *extends* [`NpmLinkPackageFixtureOptions`](../../../fixtures/npm-link-package/type-aliases/NpmLinkPackageFixtureOptions.md) ? [`NpmLinkPackageFixtureContext`](../../../fixtures/npm-link-package/type-aliases/NpmLinkPackageFixtureContext.md) : `unknown` & `Options` *extends* [`WebpackTestFixtureOptions`](../../../fixtures/webpack-test/type-aliases/WebpackTestFixtureOptions.md) ? [`WebpackTestFixtureContext`](../../../fixtures/webpack-test/type-aliases/WebpackTestFixtureContext.md) : `unknown`

Defined in: [types/fixtures.ts:119](https://github.com/Xunnamius/test-utils/blob/14b8913d5f48373a9eb174660cf655c3dfccb324/packages/test-mock-fixture/src/types/fixtures.ts#L119)

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
(excluding FixtureFs.glob) with in-build debugging and exception
handling.

Note that all relative `PathLike` parameters are considered local to
`root`, not the current working directory, and will be translated into
AbsolutePaths as such.

### options

> **options**: `ReadonlyDeep`\<[`GlobalFixtureOptions`](../../options/type-aliases/GlobalFixtureOptions.md) & `Options`\>

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

• **Options** *extends* `Record`\<`string`, `unknown`\>
