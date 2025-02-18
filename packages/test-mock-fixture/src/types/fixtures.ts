import type fs from 'node:fs/promises';
import type { AbsolutePath, RelativePath } from '@-xun/fs';
import type { ExtendedDebugger } from 'rejoinder';
import type { Promisable, ReadonlyDeep, Tagged, UnwrapTagged } from 'type-fest';
import type { emptyObjectSymbol } from 'type-fest/source/empty-object';

import type {
  DescribeRootFixtureContext,
  DescribeRootFixtureOptions
} from 'universe+test-mock-fixture:fixtures/describe-root.ts';

import type {
  DummyDirectoriesFixtureContext,
  DummyDirectoriesFixtureOptions
} from 'universe+test-mock-fixture:fixtures/dummy-directories.ts';

import type {
  DummyFilesFixtureContext,
  DummyFilesFixtureOptions
} from 'universe+test-mock-fixture:fixtures/dummy-files.ts';

import type {
  DummyNpmPackageFixtureContext,
  DummyNpmPackageFixtureOptions
} from 'universe+test-mock-fixture:fixtures/dummy-npm-package.ts';

import type {
  GitRepositoryFixtureContext,
  GitRepositoryFixtureOptions
} from 'universe+test-mock-fixture:fixtures/git-repository.ts';

import type {
  NodeImportAndRunTestFixtureContext,
  NodeImportAndRunTestFixtureOptions
} from 'universe+test-mock-fixture:fixtures/node-import-and-run-test.ts';

import type {
  NpmCopyPackageFixtureContext,
  NpmCopyPackageFixtureOptions
} from 'universe+test-mock-fixture:fixtures/npm-copy-package.ts';

import type {
  NpmLinkPackageFixtureContext,
  NpmLinkPackageFixtureOptions
} from 'universe+test-mock-fixture:fixtures/npm-link-package.ts';

import type {
  RunTestFixtureContext,
  RunTestFixtureOptions
} from 'universe+test-mock-fixture:fixtures/run-test.ts';

import type {
  WebpackTestFixtureContext,
  WebpackTestFixtureOptions
} from 'universe+test-mock-fixture:fixtures/webpack-test.ts';

import type { GlobalFixtureOptions } from 'universe+test-mock-fixture:types/options.ts';
import type { ReturnVIfTExtendsU } from 'universe+test-mock-fixture:types/util.ts';

/**
 * An object describing a mock or "dummy" filesystem structure used to simulate
 * one or more runtime environments for the package under test.
 */
export type MockFixture<Name extends string, Context> = {
  /**
   * An alphanumeric (including hyphens and underscores) string used to identify
   * the fixture. This string _should_ be unique per fixture.
   *
   * Including invalid characters in the fixture name will cause an error.
   */
  name: Name | symbol;
  /**
   * A short string output during debugging that describes what the fixture is
   * doing.
   */
  description: string;
  /**
   * An optional function that is run before the `test` function is invoked.
   *
   * If this function throws, the error will bubble, preventing other fixtures
   * (and their setup functions) from running.
   *
   * If a fixture provides neither a `setup` nor `teardown` function, it is
   * essentially a no-op.
   */
  setup?: (context: Context) => Promisable<unknown>;
  /**
   * An optional function that is run after the `test` function completes.
   *
   * Note that, so long as its corresponding `setup` function completed
   * successfully, `teardown` functions are **ALWAYS** run, even when the `test`
   * function throws, and even when the `setup`/`teardown` functions of other
   * fixtures throw.
   *
   * `teardown` functions are run in reverse order; the first `teardown`
   * function defined by a fixture will be the last `teardown` function to run.
   *
   * If a fixture provides neither a `setup` nor `teardown` function, it is
   * essentially a no-op.
   */
  teardown?: (context: Context) => Promisable<unknown>;
};

/**
 * The context object passed around between every {@link MockFixture}.
 */
export type FixtureContext<Options> = {
  /**
   * The {@link AbsolutePath} pointing to the dummy root directory.
   */
  root: AbsolutePath;
  /**
   * The options applicable to the current runtime.
   */
  options: ReadonlyDeep<GlobalFixtureOptions> &
    ReadonlyDeep<
      Omit<
        Options extends Tagged<unknown, PropertyKey> ? UnwrapTagged<Options> : Options,
        typeof emptyObjectSymbol
      >
    >;
  /**
   * The fixtures that comprise the current runtime.
   */
  fixtures: GenericMockFixture[];
  /**
   * The mutable "virtual files" as they exist currently in memory, including
   * any mutations performed by fixtures.
   *
   * @see {@link GlobalFixtureOptions.initialVirtualFiles}
   */
  virtualFiles: { [filePath: RelativePath]: string };
  /**
   * An {@link ExtendedDebugger} instance extended specifically for use by the
   * current fixture.
   */
  debug: ExtendedDebugger;
  /**
   * Context-sensitive asynchronous wrappers for `node:fs/promises` functions
   * (excluding {@link FixtureFs.glob}) with in-built debugging and exception
   * handling.
   *
   * Note that all relative `PathLike` parameters are considered local to
   * `root`, not the current working directory, and will be translated into
   * {@link AbsolutePath}s as such.
   */
  fs: FixtureFs;
} & ReturnVIfTExtendsU<Options, DescribeRootFixtureOptions, DescribeRootFixtureContext> &
  ReturnVIfTExtendsU<
    Options,
    DummyDirectoriesFixtureOptions,
    DummyDirectoriesFixtureContext
  > &
  ReturnVIfTExtendsU<Options, DummyFilesFixtureOptions, DummyFilesFixtureContext> &
  ReturnVIfTExtendsU<
    Options,
    DummyNpmPackageFixtureOptions,
    DummyNpmPackageFixtureContext
  > &
  ReturnVIfTExtendsU<Options, GitRepositoryFixtureOptions, GitRepositoryFixtureContext> &
  ReturnVIfTExtendsU<
    Options,
    NodeImportAndRunTestFixtureOptions,
    NodeImportAndRunTestFixtureContext
  > &
  ReturnVIfTExtendsU<Options, RunTestFixtureOptions, RunTestFixtureContext> &
  ReturnVIfTExtendsU<
    Options,
    NpmCopyPackageFixtureOptions,
    NpmCopyPackageFixtureContext
  > &
  ReturnVIfTExtendsU<
    Options,
    NpmLinkPackageFixtureOptions,
    NpmLinkPackageFixtureContext
  > &
  ReturnVIfTExtendsU<Options, WebpackTestFixtureOptions, WebpackTestFixtureContext>;

/**
 * @see {@link MockFixture}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GenericMockFixture = MockFixture<string, any>;

/**
 * @see {@link GenericMockFixture}
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GenericMockFixtureFunction = (...args: any[]) => GenericMockFixture;

/**
 * @see {@link GenericMockFixtureFunction}
 */
export type GenericMockFixtureFunctions = readonly GenericMockFixtureFunction[];

/**
 * @see {@link FixtureContext}
 */
export type GenericFixtureContext = FixtureContext<GlobalFixtureOptions>;

/**
 * Context-sensitive asynchronous wrappers for `node:fs/promises` functions
 * (excluding {@link fs.glob}) with in-build debugging and exception handling.
 *
 * Note that all relative `PathLike` parameters are considered local to `root`,
 * not the current working directory, and will be translated into
 * {@link AbsolutePath}s as such.
 */
export type FixtureFs = {
  /**
   * Identical to {@link fs.access} except it returns a boolean indicating
   * accessibility.
   */
  isAccessible: (...args: Parameters<typeof fs.access>) => Promise<boolean>;
} & Omit<typeof fs, 'constants' | 'glob'>;
