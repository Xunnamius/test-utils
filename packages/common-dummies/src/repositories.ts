import { basename } from 'node:path';

import { type LiteralUnion, type PackageJson } from 'type-fest';

import {
  ProjectAttribute,
  type ProjectMetadata,
  type RootPackage,
  type WorkspacePackage
} from 'universe+project-utils';

import * as fs from 'universe+project-utils:fs.ts';

import type {
  GenericPackage,
  GenericProjectMetadata,
  GenericRootPackage,
  GenericWorkspacePackage,
  WorkspacePackageName,
  XPackageJson
} from 'universe+project-utils:analyze/common.ts';

/**
 * Patch the package.json data returned by {@link fs.readXPackageJsonAtRoot} or
 * the sync version. Successive calls to this function overwrite previous calls.
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
  const actualReadXPackageJsonAtRoot = jest.requireActual<
    typeof import('universe+project-utils:fs.ts')
  >('universe+project-utils:fs.ts').readXPackageJsonAtRoot;

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
 * A type representing a dummy monorepo or polyrepo project's metadata.
 */
export type Fixture = {
  root: fs.AbsolutePath;
  json: XPackageJson;
  attributes: RootPackage['attributes'];
  namedPackageMapData: PackageMapEntry[];
  unnamedPackageMapData: PackageMapEntry[];
  brokenPackageRoots: fs.AbsolutePath[];
};

/**
 * A type representing the name of an available fixture.
 */
export type FixtureName =
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
  root: fs.RelativePath | string;
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
 * A collection of fixtures representing dummy monorepo and polyrepo projects.
 * Useful for testing purposes.
 */
export const fixtures = {} as Record<FixtureName, Fixture>;

fixtures.repoThatDoesNotExist = {
  root: '/does/not/exist' as fs.AbsolutePath,
  json: { name: 'does-not-exist' },
  attributes: {},
  namedPackageMapData: [],
  unnamedPackageMapData: [],
  brokenPackageRoots: []
};

createFixture({
  fixtureName: 'goodHybridrepoSelfRef',
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

createFixture({
  fixtureName: 'badHybridrepoBadSpecifiers',
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

createFixture({
  fixtureName: 'badMonorepo',
  prototypeRoot: 'bad-monorepo',
  attributes: {},
  unnamedPackageMapData: [
    { name: 'empty', root: 'packages/0-empty', attributes: { cjs: true } },
    { name: 'tsbuildinfo', root: 'packages/1-tsbuildinfo', attributes: { cjs: true } },
    { name: 'bad-importer', root: 'packages/2-bad-importer', attributes: { cjs: true } }
  ]
});

createFixture({
  fixtureName: 'badMonorepoDuplicateName',
  prototypeRoot: 'bad-monorepo-duplicate-name',
  attributes: {}
});

createFixture({
  fixtureName: 'badMonorepoDuplicateIdNamed',
  prototypeRoot: 'bad-monorepo-duplicate-id-named',
  attributes: {},
  namedPackageMapData: [
    { name: 'pkg-1', root: 'packages-1/pkg-1', attributes: { cjs: true } },
    { name: 'pkg-2', root: 'packages-2/pkg-1', attributes: { cjs: true } }
  ]
});

createFixture({
  fixtureName: 'badMonorepoDuplicateIdUnnamed',
  prototypeRoot: 'bad-monorepo-duplicate-id-unnamed',
  attributes: {}
});

createFixture({
  fixtureName: 'badMonorepoEmptyMdFiles',
  prototypeRoot: 'bad-monorepo-empty-md-files',
  attributes: { cjs: true, polyrepo: true },
  unnamedPackageMapData: [
    { name: 'md-empty', root: 'packages/md-empty', attributes: { cjs: true } }
  ]
});

createFixture({
  fixtureName: 'badMonorepoNextjsProject',
  prototypeRoot: 'bad-monorepo-nextjs-project',
  attributes: { cjs: true, monorepo: true, nextjs: true },
  unnamedPackageMapData: [
    { name: 'empty', root: 'packages/empty', attributes: { cjs: true } }
  ]
});

createFixture({
  fixtureName: 'badMonorepoNonPackageDir',
  prototypeRoot: 'bad-monorepo-non-package-dir',
  attributes: { cjs: true, polyrepo: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'pkgs/pkg-1', attributes: { cjs: true } }
  ],
  brokenPackageRoots: ['pkgs/pkg-10', 'pkgs/pkg-100']
});

createFixture({
  fixtureName: 'badPolyrepo',
  prototypeRoot: 'bad-polyrepo',
  attributes: { cjs: true, polyrepo: true }
});

createFixture({
  fixtureName: 'badPolyrepoBadType',
  prototypeRoot: 'bad-polyrepo-bad-type',
  attributes: {}
});

createFixture({
  fixtureName: 'badPolyrepoConflictingAttributes',
  prototypeRoot: 'bad-polyrepo-conflicting-attributes',
  attributes: {}
});

createFixture({
  fixtureName: 'badPolyrepoEmptyMdFiles',
  prototypeRoot: 'bad-polyrepo-empty-md-files',
  attributes: { cjs: true, polyrepo: true }
});

createFixture({
  fixtureName: 'badPolyrepoImporter',
  prototypeRoot: 'bad-polyrepo-importer',
  attributes: { cjs: true, polyrepo: true }
});

createFixture({
  fixtureName: 'badPolyrepoNextjsProject',
  prototypeRoot: 'bad-polyrepo-nextjs-project',
  attributes: { cjs: true, polyrepo: true, nextjs: true }
});

createFixture({
  fixtureName: 'badPolyrepoNonPackageDir',
  prototypeRoot: 'bad-polyrepo-non-package-dir',
  attributes: { cjs: true, polyrepo: true }
});

createFixture({
  fixtureName: 'badPolyrepoTsbuildinfo',
  prototypeRoot: 'bad-polyrepo-tsbuildinfo',
  attributes: { cjs: true, polyrepo: true }
});

createFixture({
  fixtureName: 'goodHybridrepo',
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

createFixture({
  fixtureName: 'goodHybridrepoNotPrivate',
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

createFixture({
  fixtureName: 'goodHybridrepoMultiversal',
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

createFixture({
  fixtureName: 'goodMonorepo',
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

createFixture({
  fixtureName: 'goodMonorepoNoSrc',
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

createFixture({
  fixtureName: 'goodMonorepoNegatedPaths',
  prototypeRoot: 'good-monorepo-negated-paths',
  attributes: { cjs: true, monorepo: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'packages/pkg-1', attributes: { cjs: true } },
    { name: '@namespace/pkg-3', root: 'packages/pkg-3-x', attributes: { cjs: true } }
  ]
});

createFixture({
  fixtureName: 'goodMonorepoNextjsProject',
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

createFixture({
  fixtureName: 'goodMonorepoSimplePaths',
  prototypeRoot: 'good-monorepo-simple-paths',
  attributes: { cjs: true, monorepo: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'pkgs/pkg-1', attributes: { cjs: true } },
    { name: 'pkg-10', root: 'pkgs/pkg-10', attributes: { cjs: true } }
  ]
});

createFixture({
  fixtureName: 'goodMonorepoWeirdAbsolute',
  prototypeRoot: 'good-monorepo-weird-absolute',
  attributes: { cjs: true, monorepo: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'packages/pkg-1', attributes: { cjs: true } },
    { name: 'pkg-2', root: 'packages/pkg-2', attributes: { cjs: true } }
  ]
});

createFixture({
  fixtureName: 'goodMonorepoWeirdBoneless',
  prototypeRoot: 'good-monorepo-weird-boneless',
  attributes: { cjs: true, monorepo: true },
  namedPackageMapData: [{ name: 'pkg-1', root: 'pkg-1', attributes: { cjs: true } }]
});

createFixture({
  fixtureName: 'goodMonorepoWeirdOverlap',
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

createFixture({
  fixtureName: 'goodMonorepoWeirdSameNames',
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

createFixture({
  fixtureName: 'goodMonorepoWeirdYarn',
  prototypeRoot: 'good-monorepo-weird-yarn',
  attributes: { cjs: true, monorepo: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'packages/pkg-1', attributes: { cjs: true } },
    { name: 'pkg-2', root: 'packages/pkg-2', attributes: { cjs: true } }
  ]
});

createFixture({
  fixtureName: 'goodMonorepoWindows',
  prototypeRoot: 'good-monorepo-windows',
  attributes: { cjs: true, monorepo: true },
  namedPackageMapData: [
    { name: 'pkg-1', root: 'packages/deep/pkg', attributes: { cjs: true } },
    { name: 'pkg-2', root: 'packages/deep/wkg', attributes: { cjs: true } }
  ]
});

createFixture({
  fixtureName: 'goodPolyrepo',
  prototypeRoot: 'good-polyrepo',
  attributes: { cjs: true, polyrepo: true, vercel: true }
});

createFixture({
  fixtureName: 'goodPolyrepoNoEnv',
  prototypeRoot: 'good-polyrepo-no-env',
  attributes: { cjs: true, polyrepo: true, vercel: true }
});

createFixture({
  fixtureName: 'goodPolyrepoNoSrcYesDefaultEnv',
  prototypeRoot: 'good-polyrepo-no-src-yes-default-env',
  attributes: { cjs: true, polyrepo: true, vercel: true }
});

createFixture({
  fixtureName: 'goodPolyrepoOnlyDefaultEnv',
  prototypeRoot: 'good-polyrepo-only-default-env',
  attributes: { cjs: true, polyrepo: true, vercel: true }
});

createFixture({
  fixtureName: 'goodPolyrepoNextjsProject',
  prototypeRoot: 'good-polyrepo-nextjs-project',
  attributes: { esm: true, polyrepo: true, nextjs: true }
});

createFixture({
  fixtureName: 'badHybridrepoTopologicalCycle',
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

createFixture({
  fixtureName: 'badHybridrepoTopologicalPrivate',
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

createFixture({
  fixtureName: 'goodHybridrepoTopological',
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

createFixture({
  fixtureName: 'goodHybridrepoTopologicalPrivate',
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

createFixture({
  fixtureName: 'goodHybridrepoTopologicalSelfRef',
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

createFixture({
  fixtureName: 'badMonorepoTopologicalCycle',
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

createFixture({
  fixtureName: 'badMonorepoTopologicalPrivate',
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

createFixture({
  fixtureName: 'goodMonorepoTopological',
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

createFixture({
  fixtureName: 'goodMonorepoTopologicalPrivate',
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

createFixture({
  fixtureName: 'goodMonorepoTopologicalSelfRef',
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

createFixture({
  fixtureName: 'goodPolyrepoTopologicalPrivate',
  prototypeRoot: 'good-polyrepo-topological-private',
  attributes: { cjs: true, polyrepo: true, private: true }
});

createFixture({
  fixtureName: 'goodPolyrepoTopologicalSelfRef',
  prototypeRoot: 'good-polyrepo-topological-self-ref',
  attributes: { cjs: true, polyrepo: true }
});

/**
 * Create a new dummy test fixture based on a fixture prototype and with
 * optionally patched package.json data.
 */
function createFixture({
  fixtureName,
  prototypeRoot: prototypeRoot_,
  attributes,
  namedPackageMapData: namedPackageMapData = [],
  unnamedPackageMapData: unnamedPackageMapData = [],
  brokenPackageRoots: brokenPackageRoots = []
}: {
  fixtureName: FixtureName;
  prototypeRoot: string;
  attributes: Fixture['attributes'];
  namedPackageMapData?: PackageMapDatum[];
  unnamedPackageMapData?: PackageMapDatum[];
  brokenPackageRoots?: string[];
}) {
  const prototypeRoot = fs.toAbsolutePath(
    __dirname,
    '..',
    'fixtures',
    'dummy-repo',
    prototypeRoot_
  );

  fixtures[fixtureName] = {
    root: prototypeRoot,
    json:
      (() => {
        try {
          return require(fs.toPath(prototypeRoot, 'package.json'));
        } catch {}
      })() || {},
    attributes,
    namedPackageMapData: namedPackageMapData.map((datum) => expandDatumToEntry(datum)),
    unnamedPackageMapData: unnamedPackageMapData.map((datum) =>
      expandDatumToEntry(datum)
    ),
    brokenPackageRoots: brokenPackageRoots.map((path) => fs.toPath(prototypeRoot, path))
  };

  function expandDatumToEntry({
    name,
    root: subRoot,
    attributes
  }: PackageMapDatum): PackageMapEntry {
    const root = fs.toPath(prototypeRoot, subRoot);
    return [
      name,
      {
        id: basename(subRoot),
        root,
        relativeRoot: subRoot as fs.RelativePath,
        json: require(fs.toPath(root, 'package.json')),
        attributes,
        // ? Side-step this whole thing
        projectMetadata: expect.anything()
      } satisfies WorkspacePackage
    ];
  }
}

export function fixtureToProjectMetadata(
  fixtureName: FixtureName,
  cwdPackageName?: LiteralUnion<'self', WorkspacePackageName>
) {
  const rootPackage = {
    root: fixtures[fixtureName].root,
    json: fixtures[fixtureName].json,
    attributes: fixtures[fixtureName].attributes
    // ? the "projectMetadata" property is properly initialized below
    // projectMetadata: mockProjectMetadata
  } satisfies Omit<RootPackage, 'projectMetadata'> as GenericRootPackage;

  // ? the "projectMetadata" property is properly initialized below
  const cwdPackage = (() => {
    if (cwdPackageName && cwdPackageName !== 'self') {
      const foundPackage = fixtures[fixtureName].namedPackageMapData
        .find(([, entry]) => entry.json.name === cwdPackageName)
        ?.at(1);

      if (foundPackage) {
        return foundPackage as GenericPackage;
      }

      throw new Error(
        `"${cwdPackageName}" is not a valid package in fixture "${fixtureName}"`
      );
    }

    return rootPackage as GenericPackage;
  })();

  const mockProjectMetadata: GenericProjectMetadata = {
    type: fixtures[fixtureName].attributes[ProjectAttribute.Polyrepo]
      ? ProjectAttribute.Polyrepo
      : ProjectAttribute.Monorepo,
    rootPackage,
    cwdPackage,
    subRootPackages: (fixtures[fixtureName].namedPackageMapData.length ||
    fixtures[fixtureName].unnamedPackageMapData.length
      ? // ? This map is properly initialized below
        new Map()
      : undefined) as GenericProjectMetadata['subRootPackages']
  };

  rootPackage.projectMetadata = cwdPackage.projectMetadata = mockProjectMetadata;

  if (mockProjectMetadata.subRootPackages) {
    mockProjectMetadata.subRootPackages = new Map(
      fixtures[fixtureName].namedPackageMapData.map(([key, package_]) => {
        return [key, { ...package_, projectMetadata: mockProjectMetadata }];
      })
    ) as NonNullable<ProjectMetadata['subRootPackages']>;

    mockProjectMetadata.subRootPackages.broken =
      fixtures[fixtureName].brokenPackageRoots;

    mockProjectMetadata.subRootPackages.unnamed = new Map(
      fixtures[fixtureName].unnamedPackageMapData.map(([key, package_]) => {
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
