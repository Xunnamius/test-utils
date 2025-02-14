/* eslint-disable @typescript-eslint/no-explicit-any */
// * These tests ensure the exported interfaces under test function as expected.

import { toPath } from '@-xun/fs';
import { run, runNoRejectOnBadExit } from '@-xun/run';
import { glob } from 'glob';
import { simpleGit } from 'simple-git';

import { mockFixturesFactory, withMockedFixtures } from 'universe+test-mock-fixture';
import { ErrorMessage } from 'universe+test-mock-fixture:error.ts';
import { describeRootFixture } from 'universe+test-mock-fixture:fixtures/describe-root.ts';
import { dummyDirectoriesFixture } from 'universe+test-mock-fixture:fixtures/dummy-directories.ts';
import { dummyFilesFixture } from 'universe+test-mock-fixture:fixtures/dummy-files.ts';
import { dummyNpmPackageFixture } from 'universe+test-mock-fixture:fixtures/dummy-npm-package.ts';
import { gitRepositoryFixture } from 'universe+test-mock-fixture:fixtures/git-repository.ts';
import { nodeImportAndRunTestFixture } from 'universe+test-mock-fixture:fixtures/node-import-and-run-test.ts';
import { npmCopyPackageFixture } from 'universe+test-mock-fixture:fixtures/npm-copy-package.ts';
import { npmLinkPackageFixture } from 'universe+test-mock-fixture:fixtures/npm-link-package.ts';
import { rootFixture } from 'universe+test-mock-fixture:fixtures/root.ts';
import { runTestFixture } from 'universe+test-mock-fixture:fixtures/run-test.ts';
import { webpackTestFixture } from 'universe+test-mock-fixture:fixtures/webpack-test.ts';
import { findIndexVirtualPath, getTreeOutput } from 'universe+test-mock-fixture:util.ts';

import type { AbsolutePath } from '@-xun/fs';
import type { PackageJson } from 'type-fest';

jest.mock('@-xun/run');
jest.mock('simple-git');
jest.mock('glob');

const mockRunNoRejectOnBadExit = jest.mocked(runNoRejectOnBadExit);
const mockRun = jest.mocked(run);
const mockGlob = jest.mocked(glob);
const mockSimpleGit = jest.mocked(simpleGit);

const fakeAbsolutePath = '/fake/root/path' as AbsolutePath;

const fakeFixtureContext: any = {};

beforeEach(() => {
  const mockRunImpl = () => {
    return Promise.resolve({
      stdout: '',
      stderr: '',
      exitCode: 0
    }) as ReturnType<typeof mockRunNoRejectOnBadExit>;
  };

  mockRunNoRejectOnBadExit.mockImplementation(mockRunImpl);
  mockRun.mockImplementation(mockRunImpl);
  mockGlob.mockImplementation(() => Promise.resolve([]));

  const mockInit: any = { addConfig: jest.fn(() => mockInit) };
  const mockGit: any = { init: jest.fn(() => mockInit) };

  mockSimpleGit.mockImplementation(() => mockGit);

  fakeFixtureContext.debug = jest.fn();
  fakeFixtureContext.fixtures = [];
  fakeFixtureContext.fs = {};
  fakeFixtureContext.options = { performCleanup: true };
  fakeFixtureContext.root = fakeAbsolutePath;
  fakeFixtureContext.virtualFiles = {};
});

describe('::withMockedFixtures', () => {
  it('initializes dummy directory with respect to given fixtures', async () => {
    expect.hasAssertions();
    void withMockedFixtures;
  });

  it('supports ad-hoc fixtures including setup and teardown', async () => {
    expect.hasAssertions();
    void withMockedFixtures;
  });

  it('supports no-op fixtures (no setup/teardown)', async () => {
    expect.hasAssertions();
    void withMockedFixtures;
  });

  it('adds root and describe-root fixtures only if they are not already properly added', async () => {
    expect.hasAssertions();
    void withMockedFixtures;
  });

  it('wraps fs functions making them relative to the dummy root directory', async () => {
    expect.hasAssertions();
    void withMockedFixtures;
  });

  it('supports errors in setup, ignores errors in teardown', async () => {
    expect.hasAssertions();
    void withMockedFixtures;
  });

  it('does not clobber node_modules when dummyNpmPackage + npmCopyPackage/npmLinkPackage + webpackTest fixtures all install dependencies', async () => {
    expect.hasAssertions();
  });
});

describe('::mockFixturesFactory', () => {
  it('returns a pre-configured mocking function', async () => {
    expect.hasAssertions();
    void mockFixturesFactory;
  });

  it('deep merges options rather than override', async () => {
    expect.hasAssertions();
    void mockFixturesFactory;
  });
});

describe('<utils>', () => {
  describe('::getTreeOutput', () => {
    it('does not execute on windows', async () => {
      expect.hasAssertions();

      const originalPlatform = process.platform;
      Object.defineProperty(process, 'platform', {
        configurable: true,
        writable: true,
        value: 'win32'
      });

      try {
        await expect(getTreeOutput(fakeAbsolutePath)).resolves.toBe(
          '(this platform does not support the `tree` command)'
        );
      } finally {
        Object.defineProperty(process, 'platform', {
          configurable: true,
          writable: true,
          value: originalPlatform
        });
      }
    });

    it('calls tree command', async () => {
      expect.hasAssertions();

      await expect(getTreeOutput(fakeAbsolutePath)).resolves.toBe(
        '(the `tree` command did not return a result; not installed?)'
      );

      expect(mockRunNoRejectOnBadExit.mock.calls).toStrictEqual([
        expect.arrayContaining(['tree'])
      ]);
    });
  });

  describe('::findIndexVirtualPath', () => {
    const demoPaths = { 'path/one.js': '1', 'src/two.js': '2' };

    it('finds src/index path with JS/TS extensions', async () => {
      expect.hasAssertions();

      expect(findIndexVirtualPath({ ...demoPaths, 'src/index.js': '3' })).toBe(
        'src/index.js'
      );

      expect(findIndexVirtualPath({ ...demoPaths, 'src/index.cjs': '3' })).toBe(
        'src/index.cjs'
      );

      expect(findIndexVirtualPath({ ...demoPaths, 'src/index.mjs': '3' })).toBe(
        'src/index.mjs'
      );

      expect(findIndexVirtualPath({ ...demoPaths, 'src/index.jsx': '3' })).toBe(
        'src/index.jsx'
      );

      expect(findIndexVirtualPath({ ...demoPaths, 'src/index.ts': '3' })).toBe(
        'src/index.ts'
      );

      expect(findIndexVirtualPath({ ...demoPaths, 'src/index.cts': '3' })).toBe(
        'src/index.cts'
      );

      expect(findIndexVirtualPath({ ...demoPaths, 'src/index.mts': '3' })).toBe(
        'src/index.mts'
      );

      expect(findIndexVirtualPath({ ...demoPaths, 'src/index.tsx': '3' })).toBe(
        'src/index.tsx'
      );
    });

    it('throws if src/index path cannot be found', async () => {
      expect.hasAssertions();

      expect(() => findIndexVirtualPath({ ...demoPaths })).toThrow(
        ErrorMessage.MissingVirtualFile('src/index.*')
      );
    });

    it('returns undefined if src/index path cannot be found and "throwIfNotFound" is disabled', async () => {
      expect.hasAssertions();

      expect(
        findIndexVirtualPath({ ...demoPaths }, { throwIfNotFound: false })
      ).toBeUndefined();

      expect(() =>
        findIndexVirtualPath({ ...demoPaths }, { throwIfNotFound: true })
      ).toThrow(ErrorMessage.MissingVirtualFile('src/index.*'));
    });
  });
});

describe('<fixtures>', () => {
  describe('::describeRoot', () => {
    it('calls getTreeOutput', async () => {
      expect.hasAssertions();

      await expect(
        describeRootFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(fakeFixtureContext.debug).toHaveBeenCalledWith(
        'root structure:\n\n(the `tree` command did not return a result; not installed?)\n'
      );
    });
  });

  describe('::dummyDirectories', () => {
    it('creates dummy directories with respect to directoryPaths', async () => {
      expect.hasAssertions();

      const mockedMkdir = jest.fn();
      fakeFixtureContext.fs = { mkdir: mockedMkdir };

      await expect(
        dummyDirectoriesFixture().setup?.({
          ...fakeFixtureContext,
          options: { directoryPaths: ['path-1/2/3/4', 'path-2/sub/path'] }
        })
      ).resolves.toBeUndefined();

      expect(mockedMkdir.mock.calls).toStrictEqual([
        ['path-1/2/3/4', { recursive: true }],
        ['path-2/sub/path', { recursive: true }]
      ]);
    });
  });

  describe('::dummyFiles', () => {
    const mockedMkdir = jest.fn();
    const mockedWriteFile = jest.fn();
    const mockedIsAccessible = jest.fn(() => false);

    beforeEach(() => {
      fakeFixtureContext.fs = {
        mkdir: mockedMkdir,
        writeFile: mockedWriteFile,
        isAccessible: mockedIsAccessible
      };
    });

    it('creates dummy files with respect to virtualFiles', async () => {
      expect.hasAssertions();

      await expect(
        dummyFilesFixture().setup?.({
          ...fakeFixtureContext,
          virtualFiles: {
            'path-1/2/3/4.js': 'contents-1',
            'path-2/sub/path.jsx': 'contents-2'
          }
        })
      ).resolves.toBeUndefined();

      expect(mockedIsAccessible).toHaveBeenCalled();

      expect(mockedMkdir.mock.calls).toStrictEqual([
        ['path-1/2/3', { recursive: true }],
        ['path-2/sub', { recursive: true }]
      ]);

      expect(mockedWriteFile.mock.calls).toStrictEqual([
        ['path-1/2/3/4.js', 'contents-1'],
        ['path-2/sub/path.jsx', 'contents-2']
      ]);
    });

    it('does not create dummy file if it already exists', async () => {
      expect.hasAssertions();

      mockedIsAccessible.mockImplementationOnce(() => true);

      await expect(
        dummyFilesFixture().setup?.({
          ...fakeFixtureContext,
          virtualFiles: {
            'path-1/2/3/4.js': 'contents-1',
            'path-2/sub/path.jsx': 'contents-2'
          }
        })
      ).resolves.toBeUndefined();

      expect(mockedIsAccessible).toHaveBeenCalled();

      expect(mockedMkdir.mock.calls).toStrictEqual([
        ['path-2/sub', { recursive: true }]
      ]);

      expect(mockedWriteFile.mock.calls).toStrictEqual([
        ['path-2/sub/path.jsx', 'contents-2']
      ]);
    });

    it('is a no-op if virtualFiles is not defined', async () => {
      expect.hasAssertions();

      await expect(
        dummyFilesFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockedIsAccessible).not.toHaveBeenCalled();
      expect(mockedMkdir).not.toHaveBeenCalled();
      expect(mockedWriteFile).not.toHaveBeenCalled();
    });
  });

  describe('::dummyNpmPackage', () => {
    const mockedMkdir = jest.fn();
    const mockedWriteFile = jest.fn();

    beforeEach(() => {
      fakeFixtureContext.fs = {
        mkdir: mockedMkdir,
        writeFile: mockedWriteFile
      };
    });

    it('initializes dummy package environment and runs npm install', async () => {
      expect.hasAssertions();

      await expect(
        dummyNpmPackageFixture().setup?.({
          ...fakeFixtureContext,
          options: { packageUnderTest: { json: { name: 'package-under-test' } } }
        })
      ).resolves.toBeUndefined();

      expect(mockedMkdir.mock.calls).toStrictEqual([
        ['node_modules', { recursive: true }]
      ]);

      expect(mockedWriteFile.mock.calls).toStrictEqual([
        ['package.json', '{"name":"dummy-pkg"}']
      ]);

      expect(mockRun).toHaveBeenCalledExactlyOnceWith(
        'npm',
        expect.arrayContaining(['install']),
        expect.anything()
      );

      expect(mockRun).toHaveBeenCalledExactlyOnceWith(
        'npm',
        expect.not.arrayContaining(['--ignore-scripts']),
        expect.anything()
      );
    });

    it('does not require packageUnderTest or package.json virtual file', async () => {
      expect.hasAssertions();

      fakeFixtureContext.debug.warn = jest.fn();

      await expect(
        dummyNpmPackageFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockedMkdir.mock.calls).toStrictEqual([
        ['node_modules', { recursive: true }]
      ]);

      expect(mockedWriteFile.mock.calls).toStrictEqual([
        ['package.json', '{"name":"dummy-pkg"}']
      ]);

      expect(mockRun).toHaveBeenCalledExactlyOnceWith(
        'npm',
        expect.arrayContaining(['install']),
        expect.anything()
      );
    });

    it('writes out custom package.json virtual file', async () => {
      expect.hasAssertions();

      fakeFixtureContext.virtualFiles = {
        'package.json': JSON.stringify({
          name: 'augmented-dummy-package',
          dependencies: { 'some-pkg': '^1.2.3' }
        })
      };

      fakeFixtureContext.debug.warn = jest.fn();

      await expect(
        dummyNpmPackageFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockedWriteFile.mock.calls).toStrictEqual([
        [
          'package.json',
          '{"name":"augmented-dummy-package","dependencies":{"some-pkg":"^1.2.3"}}'
        ]
      ]);
    });

    it('respects installCommand and runInstallScripts', async () => {
      expect.hasAssertions();

      fakeFixtureContext.options = {
        packageUnderTest: {
          json: { name: 'package-under-test' }
        },
        installCommand: 'ci',
        runInstallScripts: false
      };

      await expect(
        dummyNpmPackageFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockRun).toHaveBeenCalledExactlyOnceWith(
        'npm',
        expect.not.arrayContaining(['install']),
        expect.anything()
      );

      expect(mockRun).toHaveBeenCalledExactlyOnceWith(
        'npm',
        expect.arrayContaining(['ci']),
        expect.anything()
      );

      expect(mockRun).toHaveBeenCalledExactlyOnceWith(
        'npm',
        expect.arrayContaining(['--ignore-scripts']),
        expect.anything()
      );
    });

    it('respects additionalPackagesToInstall', async () => {
      expect.hasAssertions();

      fakeFixtureContext.options = {
        packageUnderTest: {
          json: { name: 'package-under-test' }
        },
        additionalPackagesToInstall: ['package-1', 'package-2@1.2.3']
      };

      await expect(
        dummyNpmPackageFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockRun).toHaveBeenCalledExactlyOnceWith(
        'npm',
        expect.arrayContaining(['package-1', 'package-2@1.2.3']),
        expect.anything()
      );
    });

    it('creates parent directory if package name under test is scoped', async () => {
      expect.hasAssertions();

      fakeFixtureContext.debug.warn = jest.fn();

      await expect(
        dummyNpmPackageFixture().setup?.({
          ...fakeFixtureContext,
          options: { packageUnderTest: { json: { name: '@scoped/package-under-test' } } }
        })
      ).resolves.toBeUndefined();

      expect(mockedMkdir.mock.calls).toStrictEqual([
        ['node_modules', { recursive: true }],
        ['node_modules/@scoped', { recursive: true }]
      ]);
    });
  });

  describe('::gitRepository', () => {
    it('uses setupGit if available', async () => {
      expect.hasAssertions();

      const setupGit = jest.fn();

      await expect(
        gitRepositoryFixture().setup?.({
          ...fakeFixtureContext,
          options: { setupGit }
        })
      ).resolves.toBeUndefined();

      expect(setupGit).toHaveBeenCalledExactlyOnceWith(mockSimpleGit());
    });

    it('initializes repository automatically if setupGit is not available', async () => {
      expect.hasAssertions();

      await expect(
        gitRepositoryFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockSimpleGit).toHaveBeenCalled();

      const git = mockSimpleGit();

      expect(git.init).toHaveBeenCalled();
      expect(git.init().addConfig).toHaveBeenCalled();
    });

    it('adds "git" to context', async () => {
      expect.hasAssertions();

      await expect(
        gitRepositoryFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(fakeFixtureContext.git).toBe(simpleGit());
    });
  });

  describe('::nodeImportAndRunTest', () => {
    const mockedWriteFile = jest.fn();

    beforeEach(() => {
      fakeFixtureContext.virtualFiles = { 'src/index.js': 'contents' };

      fakeFixtureContext.fs = {
        writeFile: mockedWriteFile
      };
    });

    it('runs binary test', async () => {
      expect.hasAssertions();

      fakeFixtureContext.virtualFiles = { 'src/index.ts': 'content' };

      await expect(
        nodeImportAndRunTestFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockRunNoRejectOnBadExit).toHaveBeenCalledExactlyOnceWith(
        'node',
        expect.any(Array),
        expect.objectContaining({ cwd: fakeFixtureContext.root })
      );

      mockRunNoRejectOnBadExit.mockReset();

      fakeFixtureContext.options.runWith = {
        binary: 'binary',
        args: ['args'],
        runnerOptions: { option: true }
      };

      await expect(
        nodeImportAndRunTestFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockRunNoRejectOnBadExit).toHaveBeenCalledExactlyOnceWith(
        'binary',
        ['args', 'src/index.ts'],
        expect.objectContaining({ option: true })
      );
    });

    it('throws if src/index path cannot be found', async () => {
      expect.hasAssertions();

      fakeFixtureContext.virtualFiles = { 'src/index.bad': 'content' };
      fakeFixtureContext.debug.warn = jest.fn();

      await expect(
        nodeImportAndRunTestFixture().setup?.(fakeFixtureContext)
      ).rejects.toMatchObject({
        message: ErrorMessage.MissingVirtualFile('src/index.*')
      });
    });

    it('does not throw if src/index path value is empty', async () => {
      expect.hasAssertions();

      fakeFixtureContext.virtualFiles = { 'src/index.js': '' };
      fakeFixtureContext.debug.warn = jest.fn();

      await expect(
        nodeImportAndRunTestFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(fakeFixtureContext.debug.warn).toHaveBeenCalled();
      expect(mockedWriteFile).toHaveBeenCalled();
    });

    it('adds "testResult" to context', async () => {
      expect.hasAssertions();

      await expect(
        nodeImportAndRunTestFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(fakeFixtureContext.testResult).toBeDefined();
    });
  });

  describe('::runTest', () => {
    beforeEach(() => {
      fakeFixtureContext.options.runWith = {
        binary: 'binary',
        args: ['args'],
        runnerOptions: { option: true }
      };
    });

    it('runs binary test', async () => {
      expect.hasAssertions();

      await expect(
        runTestFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockRunNoRejectOnBadExit).toHaveBeenCalledExactlyOnceWith(
        'binary',
        ['args'],
        expect.objectContaining({ option: true })
      );

      mockRunNoRejectOnBadExit.mockReset();
      fakeFixtureContext.options.runWith = { binary: 'binary' };

      await expect(
        runTestFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockRunNoRejectOnBadExit).toHaveBeenCalledExactlyOnceWith(
        'binary',
        [],
        expect.anything()
      );
    });

    it('adds "testResult" to context', async () => {
      expect.hasAssertions();

      await expect(
        runTestFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(fakeFixtureContext.testResult).toBeDefined();
    });
  });

  describe('::npmCopyPackage', () => {
    const mockedMkdir = jest.fn();
    const mockedCp = jest.fn();
    const mockedWriteFile = jest.fn();
    const mockedRename = jest.fn();
    const mockedRm = jest.fn();

    let destinationPath: AbsolutePath;

    beforeEach(() => {
      fakeFixtureContext.options.packageUnderTest = {
        root: '/root/under/test',
        json: {
          name: 'package-under-test',
          files: ['readme.md', '/file/one.js', '/file/two/dir']
        }
      };

      mockGlob.mockImplementation((paths: string | string[]) =>
        Promise.all(
          [paths]
            .flat()
            .flatMap((path) =>
              path === '/file/two/dir'
                ? [
                    toPath(fakeFixtureContext.root, path, `file-1.ts`),
                    toPath(fakeFixtureContext.root, path, `file-2.jsx`)
                  ]
                : [toPath(fakeFixtureContext.root, path)]
            )
        )
      );

      fakeFixtureContext.fs = {
        mkdir: mockedMkdir,
        cp: mockedCp,
        writeFile: mockedWriteFile,
        rename: mockedRename,
        rm: mockedRm
      };

      destinationPath = toPath(
        fakeFixtureContext.root,
        'node_modules',
        'package-under-test'
      );
    });

    it('copies package.json files into node_modules', async () => {
      expect.hasAssertions();

      await expect(
        npmCopyPackageFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockGlob.mock.calls).toStrictEqual([
        ['readme.md', expect.anything()],
        ['/file/one.js', expect.anything()],
        ['/file/two/dir', expect.anything()]
      ]);

      expect(mockedMkdir).toHaveBeenCalledExactlyOnceWith(
        destinationPath,
        expect.anything()
      );

      expect(mockedCp.mock.calls).toStrictEqual([
        [
          toPath(fakeFixtureContext.root, 'readme.md'),
          toPath(destinationPath, 'readme.md'),
          expect.anything()
        ],
        [
          toPath(fakeFixtureContext.root, '/file/one.js'),
          toPath(destinationPath, '/file/one.js'),
          expect.anything()
        ],
        [
          toPath(fakeFixtureContext.root, '/file/two/dir/file-1.ts'),
          toPath(destinationPath, '/file/two/dir/file-1.ts'),
          expect.anything()
        ],
        [
          toPath(fakeFixtureContext.root, '/file/two/dir/file-2.jsx'),
          toPath(destinationPath, '/file/two/dir/file-2.jsx'),
          expect.anything()
        ]
      ]);

      expect(mockedWriteFile).toHaveBeenCalledExactlyOnceWith(
        toPath(destinationPath, 'package.json'),
        JSON.stringify(fakeFixtureContext.options.packageUnderTest.json, undefined, 2)
      );

      expect(mockRun).toHaveBeenCalledExactlyOnceWith(
        'npm',
        expect.any(Array),
        expect.anything()
      );
    });

    it('respects ignorePackageDependencies', async () => {
      expect.hasAssertions();

      await expect(
        npmCopyPackageFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockedWriteFile).toHaveBeenCalledExactlyOnceWith(
        toPath(destinationPath, 'package.json'),
        JSON.stringify(fakeFixtureContext.options.packageUnderTest.json, undefined, 2)
      );

      mockedWriteFile.mockReset();
      fakeFixtureContext.options.packageUnderTest.json = {
        ...fakeFixtureContext.options.packageUnderTest.json,
        bundledDependencies: ['pkg-1'],
        dependencies: { 'pkg-2': '^1.2.3' },
        devDependencies: { 'pkg-3': '^2.3.4' },
        optionalDependencies: { 'pkg-4': '^3.4.5' },
        peerDependencies: { 'pkg-5': '^4.5.6' },
        peerDependenciesMeta: { 'pkg-6': { optional: true } }
      } satisfies PackageJson;

      await expect(
        npmCopyPackageFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockedWriteFile).toHaveBeenCalledExactlyOnceWith(
        toPath(destinationPath, 'package.json'),
        JSON.stringify(
          {
            ...fakeFixtureContext.options.packageUnderTest.json,
            devDependencies: undefined,
            peerDependencies: undefined,
            peerDependenciesMeta: undefined
          },
          undefined,
          2
        )
      );

      mockedWriteFile.mockReset();
      fakeFixtureContext.options.ignorePackageDependencies = {
        dependencies: true,
        devDependencies: false,
        optionalDependencies: true,
        peerDependencies: false,
        peerDependenciesMeta: false,
        bundledDependencies: true
      };

      await expect(
        npmCopyPackageFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockedWriteFile).toHaveBeenCalledExactlyOnceWith(
        toPath(destinationPath, 'package.json'),
        JSON.stringify(
          {
            ...fakeFixtureContext.options.packageUnderTest.json,
            bundledDependencies: undefined,
            dependencies: undefined,
            optionalDependencies: undefined
          },
          undefined,
          2
        )
      );
    });

    it('respects runInstallScripts', async () => {
      expect.hasAssertions();

      await expect(
        npmCopyPackageFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockRun).toHaveBeenCalledExactlyOnceWith(
        'npm',
        expect.not.arrayContaining(['--ignore-scripts']),
        expect.anything()
      );

      mockRun.mockReset();
      fakeFixtureContext.options.runInstallScripts = false;

      await expect(
        npmCopyPackageFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockRun).toHaveBeenCalledExactlyOnceWith(
        'npm',
        expect.arrayContaining(['--ignore-scripts']),
        expect.anything()
      );
    });

    it('throws if package.json is missing "name" field', async () => {
      expect.hasAssertions();

      delete fakeFixtureContext.options.packageUnderTest.json.name;

      await expect(
        npmCopyPackageFixture().setup?.(fakeFixtureContext)
      ).rejects.toMatchObject({ message: ErrorMessage.PackageMissingField('name') });
    });

    it('throws if package.json has missing or empty "files" field', async () => {
      expect.hasAssertions();

      delete fakeFixtureContext.options.packageUnderTest.json.files;

      await expect(
        npmCopyPackageFixture().setup?.(fakeFixtureContext)
      ).rejects.toMatchObject({ message: ErrorMessage.PackageMissingField('files') });

      fakeFixtureContext.options.packageUnderTest.json.files = [];

      await expect(
        npmCopyPackageFixture().setup?.(fakeFixtureContext)
      ).rejects.toMatchObject({ message: ErrorMessage.PackageMissingField('files') });
    });
  });

  describe('::npmLinkPackage', () => {
    const mockedSymlink = jest.fn();

    beforeEach(() => {
      fakeFixtureContext.options.packageUnderTest = {
        root: '/root/under/test',
        json: {
          name: 'package-under-test'
        }
      };

      fakeFixtureContext.fs = {
        symlink: mockedSymlink
      };
    });

    it('soft-links dummy repo into node_modules', async () => {
      expect.hasAssertions();

      await expect(
        npmLinkPackageFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockedSymlink).toHaveBeenCalledExactlyOnceWith(
        fakeFixtureContext.options.packageUnderTest.root,
        toPath('node_modules', fakeFixtureContext.options.packageUnderTest.json.name),
        'junction'
      );
    });

    it('throws if package.json is missing "name" field', async () => {
      expect.hasAssertions();

      delete fakeFixtureContext.options.packageUnderTest.json.name;

      await expect(
        npmLinkPackageFixture().setup?.(fakeFixtureContext)
      ).rejects.toMatchObject({ message: ErrorMessage.PackageMissingField('name') });
    });
  });

  describe('::Root', () => {
    it('creates dummy root and populates "root" in context', async () => {
      expect.hasAssertions();

      const mockMkdir = jest.fn();

      delete fakeFixtureContext.root;
      fakeFixtureContext.fs.mkdir = mockMkdir;

      await expect(rootFixture().setup?.(fakeFixtureContext)).resolves.toBeUndefined();

      expect(mockMkdir).toHaveBeenCalledExactlyOnceWith(
        toPath(String(fakeFixtureContext.root), 'src'),
        expect.anything()
      );
    });

    it('cleans up dummy root wrt performCleanup', async () => {
      expect.hasAssertions();

      const mockRm = jest.fn();

      fakeFixtureContext.options.performCleanup = false;
      fakeFixtureContext.fs.rm = mockRm;
      fakeFixtureContext.debug.warn = jest.fn();
      fakeFixtureContext.debug.message = jest.fn();

      await expect(
        rootFixture().teardown?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockRm).not.toHaveBeenCalled();

      fakeFixtureContext.options.performCleanup = true;

      await expect(
        rootFixture().teardown?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockRm).toHaveBeenCalledExactlyOnceWith(
        fakeFixtureContext.root,
        expect.anything()
      );
    });
  });

  describe('::WebpackTest', () => {
    const mockedWriteFile = jest.fn();

    beforeEach(() => {
      fakeFixtureContext.virtualFiles = {
        'src/index.js': 'contents',
        'webpack.config.mjs': 'other-contents'
      };

      fakeFixtureContext.options.webpackVersion = '1.2.3';
      fakeFixtureContext.options.fileUnderTest = 'dist/webpacked-file.js';
      fakeFixtureContext.debug.warn = jest.fn();

      fakeFixtureContext.fs = {
        writeFile: mockedWriteFile
      };
    });

    it('installs webpack and runs test', async () => {
      expect.hasAssertions();

      await expect(
        webpackTestFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(mockRun.mock.calls).toStrictEqual([
        [
          'npm',
          expect.arrayContaining(['install', 'webpack@1.2.3']),
          expect.objectContaining({ cwd: fakeFixtureContext.root })
        ],
        [
          'npx',
          expect.arrayContaining(['webpack']),
          expect.objectContaining({ cwd: fakeFixtureContext.root })
        ]
      ]);

      expect(mockRunNoRejectOnBadExit.mock.calls).toStrictEqual([
        ['node', expect.arrayContaining([fakeFixtureContext.options.fileUnderTest])]
      ]);
    });

    it('throws if src/index path cannot be found', async () => {
      expect.hasAssertions();

      fakeFixtureContext.virtualFiles = {
        'src/index.bad': 'content',
        'webpack.config.mjs': 'other-contents'
      };
      fakeFixtureContext.debug.warn = jest.fn();

      await expect(
        webpackTestFixture().setup?.(fakeFixtureContext)
      ).rejects.toMatchObject({
        message: ErrorMessage.MissingVirtualFile('src/index.*')
      });
    });

    it('does not throw if webpack config path cannot be found', async () => {
      expect.hasAssertions();

      fakeFixtureContext.virtualFiles = {
        'src/index.js': 'content',
        'webpack.config.nope': 'other-contents'
      };

      fakeFixtureContext.debug.warn = jest.fn();

      await expect(
        webpackTestFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(fakeFixtureContext.debug.warn).toHaveBeenCalled();
    });

    it('does not throw if src/index or webpack config path values are empty', async () => {
      expect.hasAssertions();

      fakeFixtureContext.virtualFiles = { 'src/index.js': '', 'webpack.config.mjs': '' };
      fakeFixtureContext.debug.warn = jest.fn();

      await expect(
        webpackTestFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(fakeFixtureContext.debug.warn).toHaveBeenCalled();
      expect(mockedWriteFile).toHaveBeenCalled();
    });

    it('adds "testResult" to context', async () => {
      expect.hasAssertions();

      await expect(
        webpackTestFixture().setup?.(fakeFixtureContext)
      ).resolves.toBeUndefined();

      expect(fakeFixtureContext.testResult).toBeDefined();
    });
  });
});
