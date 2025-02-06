import { basename } from 'node:path';

import { toAbsolutePath, toPath, type AbsolutePath, type RelativePath } from '@-xun/fs';
import * as fs from '@-xun/project-fs';

import {
  ProjectAttribute,
  type GenericPackage,
  type GenericProjectMetadata,
  type GenericRootPackage,
  type GenericWorkspacePackage,
  type ProjectMetadata,
  type RootPackage,
  type WorkspacePackage,
  type WorkspacePackageName,
  type XPackageJson
} from '@-xun/project-types';

import { ErrorMessage } from 'universe+common-dummies:error.ts';

import type { LiteralUnion, PackageJson } from 'type-fest';

// {@symbiote/notExtraneous jest}

const DUMMY_REPO_DIR = toAbsolutePath(__dirname, '..', 'dummies', 'repositories');

/**
 * A type representing the name of an available dummy repository.
 */
export type RepositoryName =
  | 'badHybridrepoBadSpecifiers'
  | 'badHybridrepoTopologicalCycle'
  | 'badHybridrepoTopologicalPrivate'
  | 'badMonorepo'
  | 'badMonorepoDuplicateIdUnnamed'
  | 'badMonorepoDuplicateName'
  | 'badMonorepoDuplicateIdNamed'
  | 'badMonorepoEmptyMdFiles'
  | 'badMonorepoNextjsProject'
  | 'badMonorepoNonPackageDir'
  | 'badMonorepoTopologicalCycle'
  | 'badMonorepoTopologicalPrivate'
  | 'badPolyrepo'
  | 'badPolyrepoBadType'
  | 'badPolyrepoConflictingAttributes'
  | 'badPolyrepoEmptyMdFiles'
  | 'badPolyrepoImporter'
  | 'badPolyrepoNextjsProject'
  | 'badPolyrepoNonPackageDir'
  | 'badPolyrepoTsbuildinfo'
  | 'goodHybridrepo'
  | 'goodHybridrepoNotPrivate'
  | 'goodHybridrepoMultiversal'
  | 'goodHybridrepoSelfRef'
  | 'goodHybridrepoTopological'
  | 'goodHybridrepoTopologicalPrivate'
  | 'goodHybridrepoTopologicalSelfRef'
  | 'goodMonorepo'
  | 'goodMonorepoNegatedPaths'
  | 'goodMonorepoNextjsProject'
  | 'goodMonorepoSimplePaths'
  | 'goodMonorepoWeirdAbsolute'
  | 'goodMonorepoWeirdBoneless'
  | 'goodMonorepoWeirdOverlap'
  | 'goodMonorepoWeirdSameNames'
  | 'goodMonorepoWeirdYarn'
  | 'goodMonorepoWindows'
  | 'goodMonorepoNoSrc'
  | 'goodMonorepoTopological'
  | 'goodMonorepoTopologicalPrivate'
  | 'goodMonorepoTopologicalSelfRef'
  | 'goodPolyrepo'
  | 'goodPolyrepoNextjsProject'
  | 'goodPolyrepoNoEnv'
  | 'goodPolyrepoNoSrcYesDefaultEnv'
  | 'goodPolyrepoOnlyDefaultEnv'
  | 'goodPolyrepoTopologicalPrivate'
  | 'goodPolyrepoTopologicalSelfRef'
  | 'repoThatDoesNotExist';

/**
 * A type representing a dummy monorepo or polyrepo project's metadata.
 */
export type Repository = {
  root: AbsolutePath;
  json: XPackageJson;
  attributes: RootPackage['attributes'];
  namedPackageMapData: PackageMapEntry[];
  unnamedPackageMapData: PackageMapEntry[];
  brokenPackageRoots: AbsolutePath[];
};

/**
 * A type represents an object that will be expanded into a
 * {@link PackageMapEntry}.
 */
export type PackageMapDatum = {
  /**
   * A package's name (for named packages) or its id (for unnamed packages).
   */
  name: string;
  /**
   * A **relative** path to a dummy project root (will be made absolute later).
   */
  root: RelativePath | string;
  attributes: WorkspacePackage['attributes'];
};

/**
 * A type represents a single entry of a packages map.
 *
 * `name` represents a package's name (for named packages) or its id (for
 * unnamed packages).
 */
export type PackageMapEntry = [name: string, workspacePackage: WorkspacePackage];

/**
 * Return a {@link ProjectMetadata} instance from an existing dummy repository.
 */
export function dummyToProjectMetadata(
  repositoryName: RepositoryName,
  cwdPackageName?: LiteralUnion<'self', WorkspacePackageName>
) {
  const rootPackage = {
    root: repositories[repositoryName].root,
    json: repositories[repositoryName].json,
    attributes: repositories[repositoryName].attributes
    // ? the "projectMetadata" property is properly initialized below
    // projectMetadata: mockProjectMetadata
  } satisfies Omit<RootPackage, 'projectMetadata'> as GenericRootPackage;

  // ? the "projectMetadata" property is properly initialized below
  const cwdPackage = (() => {
    if (cwdPackageName && cwdPackageName !== 'self') {
      const foundPackage = repositories[repositoryName].namedPackageMapData.find(
        ([, entry]) => entry.json.name === cwdPackageName
      )?.[1];

      if (foundPackage) {
        return foundPackage as GenericPackage;
      }

      throw new Error(ErrorMessage.PackageInvalid(cwdPackageName, repositoryName));
    }

    return rootPackage as GenericPackage;
  })();

  const mockProjectMetadata: GenericProjectMetadata = {
    type: repositories[repositoryName].attributes[ProjectAttribute.Polyrepo]
      ? ProjectAttribute.Polyrepo
      : ProjectAttribute.Monorepo,
    rootPackage,
    cwdPackage,
    subRootPackages: (repositories[repositoryName].namedPackageMapData.length ||
    repositories[repositoryName].unnamedPackageMapData.length
      ? // ? This map is properly initialized below
        new Map()
      : undefined) as GenericProjectMetadata['subRootPackages']
  };

  rootPackage.projectMetadata = cwdPackage.projectMetadata = mockProjectMetadata;

  if (mockProjectMetadata.subRootPackages) {
    mockProjectMetadata.subRootPackages = new Map(
      repositories[repositoryName].namedPackageMapData.map(([key, package_]) => {
        return [key, { ...package_, projectMetadata: mockProjectMetadata }];
      })
    ) as NonNullable<ProjectMetadata['subRootPackages']>;

    mockProjectMetadata.subRootPackages.broken =
      repositories[repositoryName].brokenPackageRoots;

    mockProjectMetadata.subRootPackages.unnamed = new Map(
      repositories[repositoryName].unnamedPackageMapData.map(([key, package_]) => {
        return [
          key,
          {
            ...package_,
            projectMetadata: mockProjectMetadata
          } as WorkspacePackage<PackageJson>
        ];
      })
    );

    mockProjectMetadata.subRootPackages.all = Array.from<GenericWorkspacePackage>(
      mockProjectMetadata.subRootPackages.values()
    ).concat(Array.from(mockProjectMetadata.subRootPackages.unnamed.values()));
  }

  return mockProjectMetadata;
}

/**
 * Patch the package.json data returned by {@link fs.readXPackageJsonAtRoot} or
 * the sync version before attempting to read in package data from a dummy
 * repository.
 *
 * Successive calls to this function overwrite previous calls.
 */
export function patchReadXPackageJsonAtRoot(
  /**
   * The `package.json` patches to apply per root path. When `root` is equal to
   * `"*"`, it will be used to patch all `package.json` imports but can be
   * overwritten by a more specific `root` string.
   */
  spec: { [root: string]: XPackageJson },
  /**
   * Options that influence the patching process.
   */
  options?: {
    /**
     * Whether to merely patch the actual package.json contents (`undefined`),
     * completely replace them (`true`), or only overwrite them if they don't
     * already exist (`false`).
     *
     * @default undefined
     */
    replace?: boolean;
  }
) {
  const actualReadXPackageJsonAtRoot =
    jest.requireActual<typeof import('@-xun/project-fs')>(
      '@-xun/project-fs'
    ).readXPackageJsonAtRoot;

  jest
    .spyOn(fs, 'readXPackageJsonAtRoot')
    .mockImplementation(async (root, { useCached }) => {
      const packageJson = await actualReadXPackageJsonAtRoot(root, { useCached });
      return finalize(root, packageJson);
    });

  // @ts-expect-error: we're mocking do we'll do what we like
  fs.readXPackageJsonAtRoot.sync = (root, { useCached }) => {
    const packageJson = actualReadXPackageJsonAtRoot.sync(root, { useCached });
    return finalize(root, packageJson);
  };

  return spec;

  function finalize(root: string, packageJson: XPackageJson): XPackageJson {
    return options?.replace === false
      ? {
          ...spec['*'],
          ...spec[root],
          ...packageJson
        }
      : {
          ...(options?.replace ? {} : packageJson),
          ...spec['*'],
          ...spec[root]
        };
  }
}

/**
 * A collection of repositories representing dummy monorepo and polyrepo
 * projects. Useful for testing purposes.
 */
export const repositories = {} as Record<RepositoryName, Repository>;

repositories.repoThatDoesNotExist = {
  root: '/does/not/exist' as AbsolutePath,
  json: { name: 'does-not-exist' },
  attributes: {},
  namedPackageMapData: [],
  unnamedPackageMapData: [],
  brokenPackageRoots: []
};

createDummyRepository({
  repositoryName: 'goodHybridrepoSelfRef',
  prototypeRoot: 'good-hybridrepo-self-ref',
  attributes: {
    cjs: true,
    monorepo: true,
    hybridrepo: true,
    cli: true,
    private: true,
    vercel: true,
    webpack: true
  },
  namedPackageMapData: [
    // * Note how the package name and package-id diverge!
    { name: 'package-one', root: 'packages/pkg-1', attributes: { cjs: true, cli: true } }
  ],
  unnamedPackageMapData: []
});

createDummyRepository({
  repositoryName: 'badHybridrepoBadSpecifiers',
  prototypeRoot: 'bad-hybridrepo-bad-specifiers',
  attributes: {
    cjs: true,
    monorepo: true,
    hybridrepo: true,
    cli: true,
    private: true,
    vercel: true,
    webpack: true
  },
  namedPackageMapData: [
    { name: 'package-one', root: 'packages/pkg-1', attributes: { cjs: true, cli: true } }
  ],
  unnamedPackageMapData: []
});

createDummyRepository({
  repositoryName: 'badMonorepo',
  prototypeRoot: 'bad-monorepo',
  attributes: {},
  unnamedPackageMapData: [
    { name: 'empty', root: 'packages/0-empty', attributes: { cjs: true } },
    { name: 'tsbuildinfo', root: 'packages/1-tsbuildinfo', attributes: { cjs: true } },
    { name: 'bad-importer', root: 'packages/2-bad-importer', attributes: { cjs: true } }
  ]
});

createDummyRepository({
  repositoryName: 'badMonorepoDuplicateName',
  prototypeRoot: 'bad-monorepo-duplicate-name',
  attributes: {}
});

createDummyRepository({
  repositoryName: 'badMonorepoDuplicateIdNamed',
  prototypeRoot: 'bad-monorepo-duplicate-id-named',
  attributes: {},
  namedPackageMapData: [
    { name: 'pkg-1', root: 'packages-1/pkg-1', attributes: { cjs: true } },
    { name: 'pkg-2', root: 'packages-2/pkg-1', attributes: { cjs: true } }
  ]
});

createDummyRepository({
  repositoryName: 'badMonorepoDuplicateIdUnnamed',
  prototypeRoot: 'bad-monorepo-duplicate-id-unnamed',
  attributes: {}
});

createDummyRepository({
  repositoryName: 'badMonorepoEmptyMdFiles',
  prototypeRoot: 'bad-monorepo-empty-md-files',
  attributes: { cjs: true, polyrepo: true },
  unnamedPackageMapData: [
    { name: 'md-empty', root: 'packages/md-empty', attributes: { cjs: true } }
  ]
});

createDummyRepository({
  repositoryName: 'badMonorepoNextjsProject',
  prototypeRoot: 'bad-monorepo-nextjs-project',
  attributes: { cjs: true, monorepo: true, nextjs: true },
  unnamedPackageMapData: [
    { name: 'empty', root: 'packages/empty', attributes: { cjs: true } }
  ]
});

createDummyRepository({
  repositoryName: 'badMonorepoNonPackageDir',
  prototypeRoot: 'bad-monorepo-non-package-dir',
  attributes: { cjs: true, polyrepo: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'pkgs/pkg-1', attributes: { cjs: true } }
  ],
  brokenPackageRoots: ['pkgs/pkg-10', 'pkgs/pkg-100']
});

createDummyRepository({
  repositoryName: 'badPolyrepo',
  prototypeRoot: 'bad-polyrepo',
  attributes: { cjs: true, polyrepo: true }
});

createDummyRepository({
  repositoryName: 'badPolyrepoBadType',
  prototypeRoot: 'bad-polyrepo-bad-type',
  attributes: {}
});

createDummyRepository({
  repositoryName: 'badPolyrepoConflictingAttributes',
  prototypeRoot: 'bad-polyrepo-conflicting-attributes',
  attributes: {}
});

createDummyRepository({
  repositoryName: 'badPolyrepoEmptyMdFiles',
  prototypeRoot: 'bad-polyrepo-empty-md-files',
  attributes: { cjs: true, polyrepo: true }
});

createDummyRepository({
  repositoryName: 'badPolyrepoImporter',
  prototypeRoot: 'bad-polyrepo-importer',
  attributes: { cjs: true, polyrepo: true }
});

createDummyRepository({
  repositoryName: 'badPolyrepoNextjsProject',
  prototypeRoot: 'bad-polyrepo-nextjs-project',
  attributes: { cjs: true, polyrepo: true, nextjs: true }
});

createDummyRepository({
  repositoryName: 'badPolyrepoNonPackageDir',
  prototypeRoot: 'bad-polyrepo-non-package-dir',
  attributes: { cjs: true, polyrepo: true }
});

createDummyRepository({
  repositoryName: 'badPolyrepoTsbuildinfo',
  prototypeRoot: 'bad-polyrepo-tsbuildinfo',
  attributes: { cjs: true, polyrepo: true }
});

createDummyRepository({
  repositoryName: 'goodHybridrepo',
  prototypeRoot: 'good-hybridrepo',
  attributes: {
    cjs: true,
    monorepo: true,
    hybridrepo: true,
    cli: true,
    private: true,
    vercel: true,
    webpack: true
  },
  namedPackageMapData: [
    { name: 'cli', root: 'packages/cli', attributes: { cjs: true, cli: true } },
    {
      name: 'private',
      root: 'packages/private',
      attributes: { cjs: true, private: true }
    },
    {
      name: 'webpack',
      root: 'packages/webpack',
      attributes: { cjs: true, webpack: true }
    }
  ],
  unnamedPackageMapData: [
    {
      name: 'unnamed-cjs',
      root: 'packages/unnamed-cjs',
      attributes: { cjs: true, private: true }
    },
    {
      name: 'unnamed-esm',
      root: 'packages/unnamed-esm',
      attributes: { esm: true }
    }
  ]
});

createDummyRepository({
  repositoryName: 'goodHybridrepoNotPrivate',
  prototypeRoot: 'good-hybridrepo-not-private',
  attributes: {
    cjs: true,
    monorepo: true,
    hybridrepo: true,
    cli: true,
    vercel: true,
    webpack: true
  },
  namedPackageMapData: [
    { name: 'cli', root: 'packages/cli', attributes: { cjs: true, cli: true } },
    {
      name: 'private',
      root: 'packages/private',
      attributes: { cjs: true, private: true }
    },
    {
      name: 'webpack',
      root: 'packages/webpack',
      attributes: { cjs: true, webpack: true }
    }
  ],
  unnamedPackageMapData: [
    {
      name: 'unnamed-cjs',
      root: 'packages/unnamed-cjs',
      attributes: { cjs: true, private: true }
    },
    {
      name: 'unnamed-esm',
      root: 'packages/unnamed-esm',
      attributes: { esm: true }
    }
  ]
});

createDummyRepository({
  repositoryName: 'goodHybridrepoMultiversal',
  prototypeRoot: 'good-hybridrepo-multiversal',
  attributes: {
    cjs: true,
    monorepo: true,
    hybridrepo: true,
    cli: true,
    private: true,
    vercel: true,
    webpack: true,
    multiversal: true
  },
  namedPackageMapData: [
    {
      name: 'cli',
      root: 'packages/cli',
      attributes: { cjs: true, cli: true, multiversal: true }
    },
    {
      name: '@namespaced/webpack-common-config',
      root: 'packages/webpack',
      attributes: { cjs: true, webpack: true }
    }
  ],
  unnamedPackageMapData: [
    {
      name: 'private',
      root: 'packages/private',
      attributes: { cjs: true, private: true }
    }
  ]
});

createDummyRepository({
  repositoryName: 'goodMonorepo',
  prototypeRoot: 'good-monorepo',
  attributes: { cjs: true, monorepo: true, private: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'packages/pkg-1', attributes: { cjs: true, cli: true } },
    {
      name: '@namespaced/pkg',
      root: 'packages/pkg-2',
      attributes: { cjs: true, cli: true }
    },
    {
      name: '@namespaced/importer',
      root: 'packages/pkg-import',
      attributes: { cjs: true }
    }
  ],
  unnamedPackageMapData: [
    { name: 'unnamed-pkg-1', root: 'packages/unnamed-pkg-1', attributes: { cjs: true } },
    { name: 'unnamed-pkg-2', root: 'packages/unnamed-pkg-2', attributes: { cjs: true } }
  ]
});

createDummyRepository({
  repositoryName: 'goodMonorepoNoSrc',
  prototypeRoot: 'good-monorepo-no-src',
  attributes: { cjs: true, monorepo: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'packages/pkg-1', attributes: { cjs: true, cli: true } },
    {
      name: '@namespaced/pkg',
      root: 'packages/pkg-2',
      attributes: { cjs: true, cli: true }
    },
    {
      name: '@namespaced/importer',
      root: 'packages/pkg-import',
      attributes: { cjs: true }
    }
  ],
  unnamedPackageMapData: [
    { name: 'unnamed-pkg-1', root: 'packages/unnamed-pkg-1', attributes: { cjs: true } },
    { name: 'unnamed-pkg-2', root: 'packages/unnamed-pkg-2', attributes: { cjs: true } }
  ]
});

createDummyRepository({
  repositoryName: 'goodMonorepoNegatedPaths',
  prototypeRoot: 'good-monorepo-negated-paths',
  attributes: { cjs: true, monorepo: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'packages/pkg-1', attributes: { cjs: true } },
    { name: '@namespace/pkg-3', root: 'packages/pkg-3-x', attributes: { cjs: true } }
  ]
});

createDummyRepository({
  repositoryName: 'goodMonorepoNextjsProject',
  prototypeRoot: 'good-monorepo-nextjs-project',
  attributes: { cjs: true, monorepo: true, nextjs: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'packages/pkg-1', attributes: { cjs: true } },
    { name: '@namespaced/pkg', root: 'packages/pkg-2', attributes: { cjs: true } },
    {
      name: '@namespaced/importer',
      root: 'packages/pkg-import',
      attributes: { cjs: true }
    }
  ],
  unnamedPackageMapData: [
    { name: 'unnamed-pkg-1', root: 'packages/unnamed-pkg-1', attributes: { cjs: true } },
    { name: 'unnamed-pkg-2', root: 'packages/unnamed-pkg-2', attributes: { cjs: true } }
  ]
});

createDummyRepository({
  repositoryName: 'goodMonorepoSimplePaths',
  prototypeRoot: 'good-monorepo-simple-paths',
  attributes: { cjs: true, monorepo: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'pkgs/pkg-1', attributes: { cjs: true } },
    { name: 'pkg-10', root: 'pkgs/pkg-10', attributes: { cjs: true } }
  ]
});

createDummyRepository({
  repositoryName: 'goodMonorepoWeirdAbsolute',
  prototypeRoot: 'good-monorepo-weird-absolute',
  attributes: { cjs: true, monorepo: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'packages/pkg-1', attributes: { cjs: true } },
    { name: 'pkg-2', root: 'packages/pkg-2', attributes: { cjs: true } }
  ]
});

createDummyRepository({
  repositoryName: 'goodMonorepoWeirdBoneless',
  prototypeRoot: 'good-monorepo-weird-boneless',
  attributes: { cjs: true, monorepo: true },
  namedPackageMapData: [{ name: 'pkg-1', root: 'pkg-1', attributes: { cjs: true } }]
});

createDummyRepository({
  repositoryName: 'goodMonorepoWeirdOverlap',
  prototypeRoot: 'good-monorepo-weird-overlap',
  attributes: { cjs: true, monorepo: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'pkgs/pkg-1', attributes: { cjs: true } },
    { name: 'pkg-2', root: 'pkgs/pkg-20', attributes: { cjs: true } }
  ],
  // I can't imagine a project having such weird (useless) overlapping paths...
  brokenPackageRoots: [
    'pkgs',
    'pkgs/pkg-1/dist',
    'pkgs/pkg-1/src',
    'pkgs/pkg-20/dist',
    'pkgs/pkg-20/src'
  ]
});

createDummyRepository({
  repositoryName: 'goodMonorepoWeirdSameNames',
  prototypeRoot: 'good-monorepo-weird-same-names',
  attributes: { cjs: true, monorepo: true },
  namedPackageMapData: [
    {
      name: 'good-monorepo-weird-same-names',
      root: 'packages/pkg-1',
      attributes: { cjs: true }
    },
    { name: 'pkg-2', root: 'packages/pkg-2', attributes: { cjs: true } }
  ]
});

createDummyRepository({
  repositoryName: 'goodMonorepoWeirdYarn',
  prototypeRoot: 'good-monorepo-weird-yarn',
  attributes: { cjs: true, monorepo: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'packages/pkg-1', attributes: { cjs: true } },
    { name: 'pkg-2', root: 'packages/pkg-2', attributes: { cjs: true } }
  ]
});

createDummyRepository({
  repositoryName: 'goodMonorepoWindows',
  prototypeRoot: 'good-monorepo-windows',
  attributes: { cjs: true, monorepo: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'packages/deep/pkg', attributes: { cjs: true } },
    { name: 'pkg-2', root: 'packages/deep/wkg', attributes: { cjs: true } }
  ]
});

createDummyRepository({
  repositoryName: 'goodPolyrepo',
  prototypeRoot: 'good-polyrepo',
  attributes: { cjs: true, polyrepo: true, vercel: true }
});

createDummyRepository({
  repositoryName: 'goodPolyrepoNoEnv',
  prototypeRoot: 'good-polyrepo-no-env',
  attributes: { cjs: true, polyrepo: true, vercel: true }
});

createDummyRepository({
  repositoryName: 'goodPolyrepoNoSrcYesDefaultEnv',
  prototypeRoot: 'good-polyrepo-no-src-yes-default-env',
  attributes: { cjs: true, polyrepo: true, vercel: true }
});

createDummyRepository({
  repositoryName: 'goodPolyrepoOnlyDefaultEnv',
  prototypeRoot: 'good-polyrepo-only-default-env',
  attributes: { cjs: true, polyrepo: true, vercel: true }
});

createDummyRepository({
  repositoryName: 'goodPolyrepoNextjsProject',
  prototypeRoot: 'good-polyrepo-nextjs-project',
  attributes: { esm: true, polyrepo: true, nextjs: true }
});

createDummyRepository({
  repositoryName: 'badHybridrepoTopologicalCycle',
  prototypeRoot: 'bad-hybridrepo-topological-cycle',
  attributes: {
    cjs: true,
    monorepo: true,
    hybridrepo: true
  },
  namedPackageMapData: [
    { name: 'cli', root: 'packages/cli', attributes: { cjs: true, cli: true } },
    {
      name: 'public',
      root: 'packages/public',
      attributes: { cjs: true }
    },
    {
      name: 'webpack',
      root: 'packages/webpack',
      attributes: { cjs: true }
    }
  ],
  unnamedPackageMapData: []
});

createDummyRepository({
  repositoryName: 'badHybridrepoTopologicalPrivate',
  prototypeRoot: 'bad-hybridrepo-topological-private',
  attributes: {
    cjs: true,
    monorepo: true,
    hybridrepo: true
  },
  namedPackageMapData: [
    { name: 'cli', root: 'packages/cli', attributes: { cjs: true, cli: true } },
    {
      name: 'private',
      root: 'packages/private',
      attributes: { cjs: true, private: true }
    },
    {
      name: 'webpack',
      root: 'packages/webpack',
      attributes: { cjs: true }
    }
  ],
  unnamedPackageMapData: []
});

createDummyRepository({
  repositoryName: 'goodHybridrepoTopological',
  prototypeRoot: 'good-hybridrepo-topological',
  attributes: {
    cjs: true,
    monorepo: true,
    hybridrepo: true
  },
  namedPackageMapData: [
    { name: 'cli', root: 'packages/cli', attributes: { cjs: true, cli: true } },
    {
      name: 'public',
      root: 'packages/public',
      attributes: { cjs: true }
    },
    {
      name: 'webpack',
      root: 'packages/webpack',
      attributes: { cjs: true }
    }
  ],
  unnamedPackageMapData: []
});

createDummyRepository({
  repositoryName: 'goodHybridrepoTopologicalPrivate',
  prototypeRoot: 'good-hybridrepo-topological-private',
  attributes: {
    cjs: true,
    monorepo: true,
    hybridrepo: true,
    private: true
  },
  namedPackageMapData: [
    {
      name: 'cli',
      root: 'packages/cli',
      attributes: { cjs: true, cli: true, private: true }
    },
    {
      name: 'private',
      root: 'packages/private',
      attributes: { cjs: true, private: true }
    },
    {
      name: 'random',
      root: 'packages/random',
      attributes: { cjs: true, private: true }
    },
    {
      name: 'webpack',
      root: 'packages/webpack',
      attributes: { cjs: true }
    }
  ],
  unnamedPackageMapData: []
});

createDummyRepository({
  repositoryName: 'goodHybridrepoTopologicalSelfRef',
  prototypeRoot: 'good-hybridrepo-topological-self-ref',
  attributes: {
    cjs: true,
    monorepo: true,
    hybridrepo: true
  },
  namedPackageMapData: [
    { name: 'cli', root: 'packages/cli', attributes: { cjs: true, cli: true } },
    {
      name: 'public',
      root: 'packages/public',
      attributes: { cjs: true }
    },
    {
      name: 'webpack',
      root: 'packages/webpack',
      attributes: { cjs: true }
    }
  ],
  unnamedPackageMapData: []
});

createDummyRepository({
  repositoryName: 'badMonorepoTopologicalCycle',
  prototypeRoot: 'bad-monorepo-topological-cycle',
  attributes: { cjs: true, monorepo: true, private: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'packages/pkg-1', attributes: { cjs: true } },
    { name: 'pkg-3', root: 'packages/pkg-3', attributes: { cjs: true } },
    { name: 'pkg-4', root: 'packages/pkg-4', attributes: { cjs: true } },
    { name: 'pkg-5', root: 'packages/pkg-5', attributes: { cjs: true } },
    {
      name: '@namespaced/pkg',
      root: 'packages/pkg-2',
      attributes: { cjs: true }
    },
    {
      name: '@namespaced/importer',
      root: 'packages/pkg-import',
      attributes: { cjs: true }
    }
  ],
  unnamedPackageMapData: []
});

createDummyRepository({
  repositoryName: 'badMonorepoTopologicalPrivate',
  prototypeRoot: 'bad-monorepo-topological-private',
  attributes: { cjs: true, monorepo: true, private: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'packages/pkg-1', attributes: { cjs: true } },
    { name: 'pkg-3', root: 'packages/pkg-3', attributes: { cjs: true } },
    { name: 'pkg-4', root: 'packages/pkg-4', attributes: { cjs: true, private: true } },
    { name: 'pkg-5', root: 'packages/pkg-5', attributes: { cjs: true } },
    {
      name: '@namespaced/pkg',
      root: 'packages/pkg-2',
      attributes: { cjs: true, private: true }
    },
    {
      name: '@namespaced/importer',
      root: 'packages/pkg-import',
      attributes: { cjs: true, private: true }
    }
  ],
  unnamedPackageMapData: []
});

createDummyRepository({
  repositoryName: 'goodMonorepoTopological',
  prototypeRoot: 'good-monorepo-topological',
  attributes: { cjs: true, monorepo: true, private: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'packages/pkg-1', attributes: { cjs: true } },
    { name: 'pkg-3', root: 'packages/pkg-3', attributes: { cjs: true } },
    { name: 'pkg-4', root: 'packages/pkg-4', attributes: { cjs: true } },
    { name: 'pkg-5', root: 'packages/pkg-5', attributes: { cjs: true } },
    {
      name: '@namespaced/pkg',
      root: 'packages/pkg-2',
      attributes: { cjs: true }
    },
    {
      name: '@namespaced/importer',
      root: 'packages/pkg-import',
      attributes: { cjs: true }
    }
  ],
  unnamedPackageMapData: []
});

createDummyRepository({
  repositoryName: 'goodMonorepoTopologicalPrivate',
  prototypeRoot: 'good-monorepo-topological-private',
  attributes: { cjs: true, monorepo: true, private: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'packages/pkg-1', attributes: { cjs: true, private: true } },
    { name: 'pkg-3', root: 'packages/pkg-3', attributes: { cjs: true, private: true } },
    { name: 'pkg-4', root: 'packages/pkg-4', attributes: { cjs: true, private: true } },
    { name: 'pkg-5', root: 'packages/pkg-5', attributes: { cjs: true, private: true } },
    {
      name: '@namespaced/pkg',
      root: 'packages/pkg-2',
      attributes: { cjs: true, private: true }
    },
    {
      name: '@namespaced/importer',
      root: 'packages/pkg-import',
      attributes: { cjs: true, private: true }
    }
  ],
  unnamedPackageMapData: []
});

createDummyRepository({
  repositoryName: 'goodMonorepoTopologicalSelfRef',
  prototypeRoot: 'good-monorepo-topological-self-ref',
  attributes: { cjs: true, monorepo: true, private: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'packages/pkg-1', attributes: { cjs: true } },
    { name: 'pkg-3', root: 'packages/pkg-3', attributes: { cjs: true } },
    { name: 'pkg-4', root: 'packages/pkg-4', attributes: { cjs: true } },
    { name: 'pkg-5', root: 'packages/pkg-5', attributes: { cjs: true } },
    {
      name: '@namespaced/pkg',
      root: 'packages/pkg-2',
      attributes: { cjs: true }
    },
    {
      name: '@namespaced/importer',
      root: 'packages/pkg-import',
      attributes: { cjs: true }
    }
  ],
  unnamedPackageMapData: []
});

createDummyRepository({
  repositoryName: 'goodPolyrepoTopologicalPrivate',
  prototypeRoot: 'good-polyrepo-topological-private',
  attributes: { cjs: true, polyrepo: true, private: true }
});

createDummyRepository({
  repositoryName: 'goodPolyrepoTopologicalSelfRef',
  prototypeRoot: 'good-polyrepo-topological-self-ref',
  attributes: { cjs: true, polyrepo: true }
});

/**
 * Create a new dummy repository based on a prototype and with optionally
 * patched package.json data.
 */
function createDummyRepository({
  repositoryName,
  prototypeRoot: prototypeRoot_,
  attributes,
  namedPackageMapData: namedPackageMapData = [],
  unnamedPackageMapData: unnamedPackageMapData = [],
  brokenPackageRoots: brokenPackageRoots = []
}: {
  repositoryName: RepositoryName;
  prototypeRoot: string;
  attributes: Repository['attributes'];
  namedPackageMapData?: PackageMapDatum[];
  unnamedPackageMapData?: PackageMapDatum[];
  brokenPackageRoots?: string[];
}) {
  const prototypeRoot = toAbsolutePath(DUMMY_REPO_DIR, prototypeRoot_);

  repositories[repositoryName] = {
    root: prototypeRoot,
    json:
      (() => {
        try {
          return require(toPath(prototypeRoot, 'package.json'));
        } catch {}
      })() || {},
    attributes,
    namedPackageMapData: namedPackageMapData.map((datum) => expandDatumToEntry(datum)),
    unnamedPackageMapData: unnamedPackageMapData.map((datum) =>
      expandDatumToEntry(datum)
    ),
    brokenPackageRoots: brokenPackageRoots.map((path) => toPath(prototypeRoot, path))
  };

  function expandDatumToEntry({
    name,
    root: subRoot,
    attributes
  }: PackageMapDatum): PackageMapEntry {
    const root = toPath(prototypeRoot, subRoot);
    return [
      name,
      {
        id: basename(subRoot),
        root,
        relativeRoot: subRoot as RelativePath,
        json: require(toPath(root, 'package.json')),
        attributes,
        // ? Side-step this whole thing
        projectMetadata: expect.anything()
      } satisfies WorkspacePackage
    ];
  }
}
