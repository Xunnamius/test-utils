import type { RelativePath } from '@-xun/fs';
import type { IfAny } from 'type-fest';

import type {
  DescribeRootFixture,
  DescribeRootFixtureOptions
} from 'universe+test-mock-fixture:fixtures/describe-root.ts';

import type {
  DummyDirectoriesFixture,
  DummyDirectoriesFixtureOptions
} from 'universe+test-mock-fixture:fixtures/dummy-directories.ts';

import type {
  DummyFilesFixture,
  DummyFilesFixtureOptions
} from 'universe+test-mock-fixture:fixtures/dummy-files.ts';

import type {
  DummyNpmPackageFixture,
  DummyNpmPackageFixtureOptions
} from 'universe+test-mock-fixture:fixtures/dummy-npm-package.ts';

import type {
  GitRepositoryFixture,
  GitRepositoryFixtureOptions
} from 'universe+test-mock-fixture:fixtures/git-repository.ts';

import type {
  NodeImportAndRunTestFixture,
  NodeImportAndRunTestFixtureOptions
} from 'universe+test-mock-fixture:fixtures/node-import-and-run-test.ts';

import type {
  NpmCopyPackageFixture,
  NpmCopyPackageFixtureOptions
} from 'universe+test-mock-fixture:fixtures/npm-copy-package.ts';

import type {
  NpmLinkPackageFixture,
  NpmLinkPackageFixtureOptions
} from 'universe+test-mock-fixture:fixtures/npm-link-package.ts';

import type {
  RunTestFixture,
  RunTestFixtureOptions
} from 'universe+test-mock-fixture:fixtures/run-test.ts';

import type {
  WebpackTestFixture,
  WebpackTestFixtureOptions
} from 'universe+test-mock-fixture:fixtures/webpack-test.ts';

import type { GenericMockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';
import type { ReturnVIfTExtendsU } from 'universe+test-mock-fixture:types/util.ts';

/**
 * The options available to every fixture.
 */
export type GlobalFixtureOptions = {
  /**
   * The identifier used in various places, including when creating the dummy
   * root directory and when describing the test environment in output text.
   *
   * Must be alphanumeric, optionally including hyphens and underscores. Every
   * other character will be replaced with a hyphen.
   *
   * @default "fixtures-test"
   */
  identifier?: string;
  /**
   * When `true`, the dummy root directory will be deleted after the test
   * complete (regardless of the outcome). Set `performCleanup` to `false` to
   * disable this behavior.
   */
  performCleanup: boolean;
  /**
   * An object describing "virtual files" represented by mappings between
   * non-existent {@link RelativePath}s and their theoretical (immutable)
   * contents. These paths are relative to the dummy root directory.
   *
   * Non-string contents will be stringified via `JSON.stringify(entry,
   * undefined, 2)`.
   *
   * Note that some fixtures use the `initialVirtualFiles` option to lookup
   * certain values, such as picking out keys from a virtual `package.json`
   * file.
   *
   * Also note that **these virtual files are not created on the filesystem
   * automatically!**
   *
   * To have the virtual files described in `initialVirtualFiles` actually
   * written out to the filesystem (relative to the dummy root directory), you
   * must use {@link dummyFilesFixture}.
   *
   * Consider also `dummyDirectoriesFixture` for writing out directories to the
   * filesystem using the `initialDirectories` option.
   */
  initialVirtualFiles?: { [filePath: RelativePath | string]: unknown };
};

/**
 * This type combines all possible configurable options conditioned on which
 * fixtures are actually used.
 *
 * Pass `unknown` to return a generic result.
 */
export type FixtureOptions<
  MockFixture,
  ShouldUnwrap extends boolean = true
> = GlobalFixtureOptions &
  (GenericMockFixture extends MockFixture
    ? unknown
    : IfAny<
        MockFixture,
        unknown,
        ReturnVIfTExtendsU<
          DescribeRootFixture,
          MockFixture,
          DescribeRootFixtureOptions,
          ShouldUnwrap
        > &
          ReturnVIfTExtendsU<
            DummyDirectoriesFixture,
            MockFixture,
            DummyDirectoriesFixtureOptions,
            ShouldUnwrap
          > &
          ReturnVIfTExtendsU<
            DummyFilesFixture,
            MockFixture,
            DummyFilesFixtureOptions,
            ShouldUnwrap
          > &
          ReturnVIfTExtendsU<
            DummyNpmPackageFixture,
            MockFixture,
            DummyNpmPackageFixtureOptions,
            ShouldUnwrap
          > &
          ReturnVIfTExtendsU<
            GitRepositoryFixture,
            MockFixture,
            GitRepositoryFixtureOptions,
            ShouldUnwrap
          > &
          ReturnVIfTExtendsU<
            NodeImportAndRunTestFixture,
            MockFixture,
            NodeImportAndRunTestFixtureOptions,
            ShouldUnwrap
          > &
          ReturnVIfTExtendsU<
            RunTestFixture,
            MockFixture,
            RunTestFixtureOptions,
            ShouldUnwrap
          > &
          ReturnVIfTExtendsU<
            NpmCopyPackageFixture,
            MockFixture,
            NpmCopyPackageFixtureOptions,
            ShouldUnwrap
          > &
          ReturnVIfTExtendsU<
            NpmLinkPackageFixture,
            MockFixture,
            NpmLinkPackageFixtureOptions,
            ShouldUnwrap
          > &
          ReturnVIfTExtendsU<
            WebpackTestFixture,
            MockFixture,
            WebpackTestFixtureOptions,
            ShouldUnwrap
          >
      >);
