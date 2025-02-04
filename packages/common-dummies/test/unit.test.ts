// * These tests ensure the exported interface under test functions as expected.

import { toPath } from '@-xun/fs';

import { getDummyImportPath } from 'universe+common-dummies:imports.ts';
import { getDummyLoaderPath } from 'universe+common-dummies:loaders.ts';
import { getDummyPackage } from 'universe+common-dummies:packages.ts';
import { getDummyDecoratedPath } from 'universe+common-dummies:pseudodecorators.ts';

import {
  dummyToProjectMetadata,
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
    }
  });
});

describe('pseudodecorators', () => {
  it('returns expected file paths', async () => {
    expect.hasAssertions();

    expect(getDummyDecoratedPath('extensionless')).toBe(
      toPath(__dirname, '..', 'dummies', 'pseudodecorators', 'extensionless')
    );

    expect(getDummyDecoratedPath('yml')).toBe(
      toPath(__dirname, '..', 'dummies', 'pseudodecorators', 'yml.yml')
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
});
