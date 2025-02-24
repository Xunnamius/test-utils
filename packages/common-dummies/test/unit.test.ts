// * These tests ensure the exported interface under test functions as expected.

import { toPath } from '@-xun/fs';
import { readJson, readJsonc, readXPackageJsonAtRoot } from '@-xun/project-fs';

import { ErrorMessage } from 'universe+common-dummies:error.ts';
import { getDummyImportPath } from 'universe+common-dummies:imports.ts';
import { getDummyLoaderPath } from 'universe+common-dummies:loaders.ts';
import { getDummyPackage } from 'universe+common-dummies:packages.ts';
import { getDummyDecoratedPath } from 'universe+common-dummies:pseudodecorators.ts';

import {
  dummyToProjectMetadata,
  patchJsonObjectReaders,
  repositories
} from 'universe+common-dummies:repositories.ts';

describe('imports', () => {
  it('returns expected file paths', async () => {
    expect.hasAssertions();

    expect(getDummyImportPath('cjs')).toBe(
      toPath(__dirname, '..', 'dummies', 'imports', 'cjs.cjs')
    );
  });
});

describe('loaders', () => {
  it('returns expected file paths', async () => {
    expect.hasAssertions();

    expect(getDummyLoaderPath('reflective')).toBe(
      toPath(__dirname, '..', 'dummies', 'loaders', 'reflective.mjs')
    );

    // @ts-expect-error: testing non-existent id
    expect(() => getDummyLoaderPath('does-not-exist')).toThrow(
      ErrorMessage.UnknownLoader('does-not-exist')
    );
  });
});

describe('packages', () => {
  it('returns expected dummy package data', async () => {
    expect.hasAssertions();

    {
      const path = toPath(
        __dirname,
        '..',
        'dummies',
        'packages',
        'node_modules',
        'dummy-simple-pkg'
      );

      expect(getDummyPackage('simple')).toStrictEqual({
        name: 'dummy-simple-pkg',
        path,
        packageJson: require(`${path}/package.json`)
      });
    }

    {
      const path = toPath(
        __dirname,
        '..',
        'dummies',
        'packages',
        'node_modules',
        'dummy-complex-pkg'
      );

      expect(getDummyPackage('complex')).toStrictEqual({
        name: 'dummy-complex-pkg',
        path,
        packageJson: require(`${path}/package.json`)
      });

      expect(getDummyPackage('complex', { requireObjectExports: true })).toStrictEqual({
        name: 'dummy-complex-pkg',
        path,
        packageJson: require(`${path}/package.json`)
      });

      expect(getDummyPackage('complex', { requireObjectImports: true })).toStrictEqual({
        name: 'dummy-complex-pkg',
        path,
        packageJson: require(`${path}/package.json`)
      });
    }

    {
      const path = toPath(__dirname, '..', 'dummies', 'packages');

      expect(getDummyPackage('root')).toStrictEqual({
        name: 'dummy-pkg',
        path,
        packageJson: require(`${path}/package.json`)
      });

      expect(() => getDummyPackage('root', { requireObjectExports: true })).toThrow(
        ErrorMessage.PackageInvalidImportExportField('exports')
      );

      expect(() => getDummyPackage('root', { requireObjectImports: true })).toThrow(
        ErrorMessage.PackageInvalidImportExportField('imports')
      );
    }
  });
});

describe('pseudodecorators', () => {
  it('returns expected file paths', async () => {
    expect.hasAssertions();

    expect(getDummyDecoratedPath('extensionless')).toBe(
      toPath(__dirname, '..', 'dummies', 'pseudodecorators', 'extensionless')
    );

    expect(getDummyDecoratedPath('js')).toBe(
      toPath(__dirname, '..', 'dummies', 'pseudodecorators', 'js.js')
    );

    expect(getDummyDecoratedPath('json')).toBe(
      toPath(__dirname, '..', 'dummies', 'pseudodecorators', 'json.json')
    );

    expect(getDummyDecoratedPath('md')).toBe(
      toPath(__dirname, '..', 'dummies', 'pseudodecorators', 'md.md')
    );

    expect(getDummyDecoratedPath('ts')).toBe(
      toPath(__dirname, '..', 'dummies', 'pseudodecorators', 'ts.ts')
    );

    expect(getDummyDecoratedPath('yml')).toBe(
      toPath(__dirname, '..', 'dummies', 'pseudodecorators', 'yml.yml')
    );

    // @ts-expect-error: testing non-existent id
    expect(() => getDummyDecoratedPath('does-not-exist')).toThrow(
      ErrorMessage.UnknownPseudodecorator('does-not-exist')
    );
  });
});

describe('repositories', () => {
  it('returns expected dummy repository data', async () => {
    expect.hasAssertions();

    const path = toPath(__dirname, '..', 'dummies', 'repositories', 'good-polyrepo');

    expect(repositories.goodPolyrepo).toStrictEqual({
      attributes: {
        cjs: true,
        polyrepo: true,
        vercel: true
      },
      brokenPackageRoots: [],
      json: require(`${path}/package.json`),
      namedPackageMapData: [],
      root: path,
      unnamedPackageMapData: []
    });
  });

  it('converts dummy to project metadata via dummyToProjectMetadata', async () => {
    expect.hasAssertions();

    const path = toPath(__dirname, '..', 'dummies', 'repositories', 'good-polyrepo');
    const dummyProjectMetadata = dummyToProjectMetadata('goodPolyrepo');

    expect(dummyProjectMetadata).toStrictEqual({
      cwdPackage: {
        attributes: {
          cjs: true,
          polyrepo: true,
          vercel: true
        },
        json: require(`${path}/package.json`),
        projectMetadata: dummyProjectMetadata,
        root: '/repos/test-utils/packages/common-dummies/dummies/repositories/good-polyrepo'
      },
      rootPackage: {
        attributes: {
          cjs: true,
          polyrepo: true,
          vercel: true
        },
        json: require(`${path}/package.json`),
        projectMetadata: dummyProjectMetadata,
        root: '/repos/test-utils/packages/common-dummies/dummies/repositories/good-polyrepo'
      },
      subRootPackages: undefined,
      type: 'polyrepo'
    });
  });

  it('converts dummy to project metadata wrt custom cwdPackage via dummyToProjectMetadata', async () => {
    expect.hasAssertions();

    const path = toPath(__dirname, '..', 'dummies', 'repositories', 'good-monorepo');
    const dummyProjectMetadata = dummyToProjectMetadata(
      'goodMonorepo',
      '@namespaced/pkg'
    );

    expect(dummyProjectMetadata).toStrictEqual({
      cwdPackage: {
        attributes: {
          cjs: true,
          cli: true
        },
        id: 'pkg-2',
        json: require(`${path}/packages/pkg-2/package.json`),
        projectMetadata: dummyProjectMetadata,
        relativeRoot: 'packages/pkg-2',
        root: toPath(path, 'packages', 'pkg-2')
      },
      rootPackage: {
        attributes: {
          cjs: true,
          monorepo: true,
          private: true
        },
        json: require(`${path}/package.json`),
        projectMetadata: dummyProjectMetadata,
        root: path
      },
      subRootPackages: expect.any(Map),
      type: 'monorepo'
    });
  });

  it('throws on non-existent custom cwdPackage via dummyToProjectMetadata', async () => {
    expect.hasAssertions();

    expect(() => dummyToProjectMetadata('goodMonorepo', 'fake')).toThrow(
      /is not a valid package in dummy repository/
    );
  });

  describe('::patchJsonObjectReaders', () => {
    it('patches data returned by sync and async readXPackageJsonAtRoot', async () => {
      expect.hasAssertions();

      await expect(
        readXPackageJsonAtRoot(repositories.goodPolyrepo.root, { useCached: true })
      ).resolves.toStrictEqual(repositories.goodPolyrepo.json);

      patchJsonObjectReaders({
        [toPath(repositories.goodPolyrepo.root, 'package.json')]: { name: 'new-name' }
      });

      await expect(
        readXPackageJsonAtRoot(repositories.goodPolyrepo.root, { useCached: true })
      ).resolves.toStrictEqual({
        ...repositories.goodPolyrepo.json,
        name: 'new-name'
      });

      expect(
        readXPackageJsonAtRoot.sync(repositories.goodPolyrepo.root, { useCached: true })
      ).toStrictEqual({
        ...repositories.goodPolyrepo.json,
        name: 'new-name'
      });
    });

    it('patches data returned by sync and async readJson', async () => {
      expect.hasAssertions();

      const path = toPath(repositories.goodPolyrepo.root, 'package.json');

      await expect(readJson(path, { useCached: true })).resolves.toStrictEqual(
        repositories.goodPolyrepo.json
      );

      patchJsonObjectReaders({
        [path]: { name: 'new-name' }
      });

      await expect(readJson(path, { useCached: true })).resolves.toStrictEqual({
        ...repositories.goodPolyrepo.json,
        name: 'new-name'
      });

      expect(readJson.sync(path, { useCached: true })).toStrictEqual({
        ...repositories.goodPolyrepo.json,
        name: 'new-name'
      });
    });

    it('patches data returned by sync and async readJsonc', async () => {
      expect.hasAssertions();

      const path = toPath(repositories.goodPolyrepo.root, 'package.json');

      await expect(readJsonc(path, { useCached: true })).resolves.toStrictEqual(
        repositories.goodPolyrepo.json
      );

      patchJsonObjectReaders({
        [path]: { name: 'new-name' }
      });

      await expect(readJsonc(path, { useCached: true })).resolves.toStrictEqual({
        ...repositories.goodPolyrepo.json,
        name: 'new-name'
      });

      expect(readJsonc.sync(path, { useCached: true })).toStrictEqual({
        ...repositories.goodPolyrepo.json,
        name: 'new-name'
      });
    });

    it('overwrites previous calls with successive calls', async () => {
      expect.hasAssertions();

      patchJsonObjectReaders({
        [toPath(repositories.goodPolyrepo.root, 'package.json')]: {
          name: 'new-name',
          description: 'new description'
        }
      });

      await expect(
        readXPackageJsonAtRoot(repositories.goodPolyrepo.root, { useCached: true })
      ).resolves.toStrictEqual({
        ...repositories.goodPolyrepo.json,
        name: 'new-name',
        description: 'new description'
      });

      patchJsonObjectReaders({
        [toPath(repositories.goodPolyrepo.root, 'package.json')]: { name: 'newer-name' }
      });

      await expect(
        readXPackageJsonAtRoot(repositories.goodPolyrepo.root, { useCached: true })
      ).resolves.toStrictEqual({
        ...repositories.goodPolyrepo.json,
        name: 'newer-name'
      });
    });

    it('respects multiple spec entries', async () => {
      expect.hasAssertions();

      const goodHybridrepoPackage1 =
        repositories.goodHybridrepo.namedPackageMapData[0]![1];

      const goodHybridrepoPackage2 =
        repositories.goodHybridrepo.namedPackageMapData[1]![1];

      patchJsonObjectReaders({
        [toPath(goodHybridrepoPackage2.root, 'package.json')]: {
          name: 'name-3'
        },
        [toPath(repositories.goodHybridrepo.root, 'package.json')]: { name: 'name-1' },
        [toPath(goodHybridrepoPackage1.root, 'package.json')]: {
          name: 'name-2'
        }
      });

      await expect(
        readXPackageJsonAtRoot(repositories.goodPolyrepo.root, { useCached: true })
      ).resolves.toStrictEqual(repositories.goodPolyrepo.json);

      await expect(
        readXPackageJsonAtRoot(repositories.goodHybridrepo.root, { useCached: true })
      ).resolves.toStrictEqual({
        ...repositories.goodHybridrepo.json,
        name: 'name-1'
      });

      await expect(
        readXPackageJsonAtRoot(goodHybridrepoPackage1.root, { useCached: true })
      ).resolves.toStrictEqual({
        ...goodHybridrepoPackage1.json,
        name: 'name-2'
      });

      await expect(
        readXPackageJsonAtRoot(goodHybridrepoPackage2.root, { useCached: true })
      ).resolves.toStrictEqual({
        ...goodHybridrepoPackage2.json,
        name: 'name-3'
      });
    });

    it('respects wildcard spec path', async () => {
      expect.hasAssertions();

      const goodHybridrepoPackage1 =
        repositories.goodHybridrepo.namedPackageMapData[0]![1];

      const goodHybridrepoPackage2 =
        repositories.goodHybridrepo.namedPackageMapData[1]![1];

      patchJsonObjectReaders({ ['*']: { name: 'name-x' } });

      await expect(
        readXPackageJsonAtRoot(repositories.goodPolyrepo.root, { useCached: true })
      ).resolves.toStrictEqual({ ...repositories.goodPolyrepo.json, name: 'name-x' });

      await expect(
        readXPackageJsonAtRoot(repositories.goodHybridrepo.root, { useCached: true })
      ).resolves.toStrictEqual({
        ...repositories.goodHybridrepo.json,
        name: 'name-x'
      });

      await expect(
        readXPackageJsonAtRoot(goodHybridrepoPackage1.root, { useCached: true })
      ).resolves.toStrictEqual({
        ...goodHybridrepoPackage1.json,
        name: 'name-x'
      });

      await expect(
        readXPackageJsonAtRoot(goodHybridrepoPackage2.root, { useCached: true })
      ).resolves.toStrictEqual({
        ...goodHybridrepoPackage2.json,
        name: 'name-x'
      });
    });

    it('respects options.replace', async () => {
      expect.hasAssertions();

      patchJsonObjectReaders(
        {
          [toPath(repositories.goodPolyrepo.root, 'package.json')]: {
            name: 'new-name',
            description: 'new description'
          }
        },
        { replace: undefined }
      );

      await expect(
        readXPackageJsonAtRoot(repositories.goodPolyrepo.root, { useCached: true })
      ).resolves.toStrictEqual({
        ...repositories.goodPolyrepo.json,
        name: 'new-name',
        description: 'new description'
      });

      patchJsonObjectReaders(
        {
          [toPath(repositories.goodPolyrepo.root, 'package.json')]: {
            name: 'new-name',
            description: 'new description'
          }
        },
        { replace: true }
      );

      await expect(
        readXPackageJsonAtRoot(repositories.goodPolyrepo.root, { useCached: true })
      ).resolves.toStrictEqual({
        name: 'new-name',
        description: 'new description'
      });

      patchJsonObjectReaders(
        {
          [toPath(repositories.goodPolyrepo.root, 'package.json')]: {
            name: 'new-name',
            description: 'new description'
          }
        },
        { replace: false }
      );

      await expect(
        readXPackageJsonAtRoot(repositories.goodPolyrepo.root, { useCached: true })
      ).resolves.toStrictEqual({
        description: 'new description',
        ...repositories.goodPolyrepo.json
      });
    });
  });
});
