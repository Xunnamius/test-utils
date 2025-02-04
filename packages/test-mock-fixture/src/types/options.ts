import type { RelativePath } from '@-xun/fs';

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
   * Some fixtures use the `initialVirtualFiles` option to lookup certain
   * values, such as picking out keys from a virtual `package.json` file.
   *
   * **These virtual files are not created on the filesystem automatically!**
   *
   * To have the virtual files described in `initialVirtualFiles` actually
   * written out to the filesystem (relative to the dummy root directory), you
   * must use {@link dummyFilesFixture}.
   *
   * Consider also `dummyDirectoriesFixture` for writing out directories to the
   * filesystem using the `initialDirectories` option.
   */
  initialVirtualFiles?: { [filePath: RelativePath | string]: string };
};

/**
 * This type combines all possible configurable options conditioned on which
 * fixtures are actually used.
 */
export type FixtureOptions<T extends GenericMockFixture> = GlobalFixtureOptions &
  (T extends DescribeRootFixture ? DescribeRootFixtureOptions : unknown) &
  (T extends DummyDirectoriesFixture ? DummyDirectoriesFixtureOptions : unknown) &
  (T extends DummyFilesFixture ? DummyFilesFixtureOptions : unknown) &
  (T extends DummyNpmPackageFixture ? DummyNpmPackageFixtureOptions : unknown) &
  (T extends GitRepositoryFixture ? GitRepositoryFixtureOptions : unknown) &
  (T extends NodeImportAndRunTestFixture
    ? NodeImportAndRunTestFixtureOptions
    : unknown) &
  (T extends RunTestFixture ? RunTestFixtureOptions : unknown) &
  (T extends NpmCopyPackageFixture ? NpmCopyPackageFixtureOptions : unknown) &
  (T extends NpmLinkPackageFixture ? NpmLinkPackageFixtureOptions : unknown) &
  (T extends WebpackTestFixture ? WebpackTestFixtureOptions : unknown);
