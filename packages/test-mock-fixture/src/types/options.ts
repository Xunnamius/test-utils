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
  NpmCopySelfFixture,
  NpmCopySelfFixtureOptions
} from 'universe+test-mock-fixture:fixtures/npm-copy-self.ts';

import type {
  NpmLinkSelfFixture,
  NpmLinkSelfFixtureOptions
} from 'universe+test-mock-fixture:fixtures/npm-link-self.ts';

import type {
  RunTestFixture,
  RunTestFixtureOptions
} from 'universe+test-mock-fixture:fixtures/run-test.ts';

import type {
  WebpackTestFixture,
  WebpackTestFixtureOptions
} from 'universe+test-mock-fixture:fixtures/webpack-test.ts';

import type { MockFixture } from 'universe+test-mock-fixture:types/fixtures.ts';

/**
 * These type combines all configurable options conditioned on which fixtures
 * are actually used.
 *
 * When using custom fixtures, custom options may be provided via the
 * `AdditionalOptions` type parameter.
 */
export type FixtureOptions<
  T extends MockFixture<string>,
  AdditionalOptions extends Record<string, unknown> = never
> = {
  /**
   * The identifier used in various places, including when creating the dummy
   * root directory and when describing the fixture in output text.
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
} & Partial<DummyFilesFixtureOptions['initialFileContents']> &
  (never extends AdditionalOptions ? unknown : AdditionalOptions) &
  (T extends DescribeRootFixture ? DescribeRootFixtureOptions : unknown) &
  (T extends DummyDirectoriesFixture ? DummyDirectoriesFixtureOptions : unknown) &
  (T extends DummyFilesFixture ? DummyFilesFixtureOptions : unknown) &
  (T extends DummyNpmPackageFixture ? DummyNpmPackageFixtureOptions : unknown) &
  (T extends GitRepositoryFixture ? GitRepositoryFixtureOptions : unknown) &
  (T extends NodeImportAndRunTestFixture
    ? NodeImportAndRunTestFixtureOptions
    : unknown) &
  (T extends RunTestFixture ? RunTestFixtureOptions : unknown) &
  (T extends NpmCopySelfFixture ? NpmCopySelfFixtureOptions : unknown) &
  (T extends NpmLinkSelfFixture ? NpmLinkSelfFixtureOptions : unknown) &
  (T extends WebpackTestFixture ? WebpackTestFixtureOptions : unknown);
