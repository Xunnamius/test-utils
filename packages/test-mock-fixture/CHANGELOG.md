# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/test-mock-fixture[@2.0.0][3] (2025-05-30)

### 💥 BREAKING CHANGES 💥

- Minimum supported node version is now 20.18.0

### ⚙️ Build System

- **deps:** bump @-xun/project-types from 1.0.4 to 2.0.0 ([a8f6ee9][4])
- **deps:** bump core-js from 3.41.0 to 3.42.0 ([ca6ef80][5])
- **deps:** bump glob from 11.0.1 to 11.0.2 ([1f4c239][6])
- **deps:** bump type-fest from 4.37.0 to 4.41.0 ([35148b8][7])
- **package:** drop support for node\@18 ([cd28a9a][8])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@2.0.6][9] (2025-07-10)

#### ⚙️ Build System

- **deps:** bump core-js from 3.43.0 to 3.44.0 ([6526476][10])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@2.0.5][11] (2025-06-14)

#### ⚙️ Build System

- **deps:** bump rejoinder from 2.0.0 to 2.0.1 ([d8adc01][12])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@2.0.4][13] (2025-06-14)

#### ⚙️ Build System

- **deps:** bump core-js from 3.42.0 to 3.43.0 ([b62153e][14])
- **deps:** bump glob from 11.0.2 to 11.0.3 ([8110aa0][15])
- **deps:** bump rejoinder from 1.2.5 to 2.0.0 ([283fee8][16])
- **deps:** bump simple-git from 3.27.0 to 3.28.0 ([4bfed30][17])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@2.0.3][18] (2025-06-03)

#### ⚙️ Build System

- **package:** update jest peer dependency to prefer 30 first, then 30-beta second, then 30-alpha last ([fc4ea15][19])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@2.0.2][20] (2025-06-01)

#### ⚙️ Build System

- **deps:** bump @-xun/project-types from 2.0.0 to 2.0.1 ([38d78f3][21])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@2.0.1][22] (2025-06-01)

#### ⚙️ Build System

- **deps:** bump @-xun/fs from 1.0.0 to 2.0.0 ([f092bd6][23])

<br />

## @-xun/test-mock-fixture[@1.5.0][24] (2025-03-07)

### ✨ Features

- **packages/test-mock-fixture:** allow `initialVirtualFiles` to accept any serializable entry value ([a9b840f][25])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.5.2][26] (2025-03-19)

#### ⚙️ Build System

- **deps:** bump core-js from 3.40.0 to 3.41.0 ([0f5fd5a][27])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.5.1][28] (2025-03-13)

#### ⚙️ Build System

- **deps:** bump @-xun/project-types from 1.0.3 to 1.0.4 ([9dff579][29])

<br />

## @-xun/test-mock-fixture[@1.4.0][30] (2025-03-03)

### ✨ Features

- **packages/test-mock-fixture:** delete pesky Node.js debug inspector strings when present in `context.testResult.stderr` ([621df10][31])

### 🪄 Fixes

- **packages/test-mock-fixture:** improve `ErrorMessage.AggregateErrors` output ([01d6013][32])
- **packages/test-mock-fixture:** use more sensible error message when `performCleanup` is disabled ([a3bc0df][33])

### ⚙️ Build System

- **deps:** bump @-xun/project-types from 1.0.2 to 1.0.3 ([a238fa4][34])
- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([2fde6ba][35])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.4.1][36] (2025-03-06)

#### 🪄 Fixes

- **packages/test-mock-fixture:** migrate node inspector debug string elision functionality into `@-xun/run` ([11f9819][37])

#### ⚙️ Build System

- **deps:** bump @-xun/run from 1.0.3 to 1.1.0 ([5634a59][38])
- **deps:** bump type-fest from 4.36.0 to 4.37.0 ([26e9599][39])

<br />

## @-xun/test-mock-fixture[@1.3.0][40] (2025-02-18)

### ✨ Features

- **packages/test-mock-fixture:** throw in root fixture if `performCleanup` is not true ([426a691][41])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.3.1][42] (2025-02-24)

#### ⚙️ Build System

- **deps:** bump @-xun/run from 1.0.2 to 1.0.3 ([64a47d3][43])

<br />

## @-xun/test-mock-fixture[@1.2.0][44] (2025-02-16)

### ✨ Features

- **packages/test-mock-fixture:** include path to failing dummy root when a fixture throws ([beb85e0][45])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.2.2][46] (2025-02-18)

#### 🪄 Fixes

- **packages/test-mock-fixture:** support mixing ad-hoc and predefined fixtures (including increased type support) ([1fcd286][47])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.2.1][48] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][49])

<br />

## @-xun/test-mock-fixture[@1.1.0][50] (2025-02-16)

### ✨ Features

- **packages/test-mock-fixture:** add `overwriteExisting` option to dummy-files fixture ([6caf74c][51])

### 🪄 Fixes

- **packages/test-mock-fixture:** ensure `mockFixturesFactory` actually deep merges factory options with local options ([5def0ad][52])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.1.2][53] (2025-02-16)

#### 🪄 Fixes

- **packages/test-mock-fixture:** execute all node processes with `FORCE_COLOR` environment variable disabled ([e96d066][54])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.1.1][55] (2025-02-16)

#### 🪄 Fixes

- **packages/test-mock-fixture:** execute all node processes with warnings and ansi colors disabled ([c121916][56])

<br />

## @-xun/test-mock-fixture[@1.0.0][57] (2025-02-04)

### ✨ Features

- **packages/test-mock-fixture:** land initial version ([d64d3a9][58])

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][59])
- **packages:** split test/setup blob into distinct packages ([857d3ea][60])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.0.3][61] (2025-02-16)

#### 🪄 Fixes

- **packages/test-mock-fixture:** include "simple-git" as dependency (instead of peer dependency) ([ba2bb54][62])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.0.2][63] (2025-02-15)

#### 🪄 Fixes

- **packages/test-mock-fixture:** dramatically improve `withMockedFixtures`, `mockFixturesFactory`, and related types ([85f798f][64])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.0.1][65] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][66])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.5.2...@-xun/test-mock-fixture@2.0.0
[4]: https://github.com/Xunnamius/test-utils/commit/a8f6ee9647e91455f91e12f87cee4d9c8c1583ff
[5]: https://github.com/Xunnamius/test-utils/commit/ca6ef80b46df34ed73f8a96a3eee160d65d09afb
[6]: https://github.com/Xunnamius/test-utils/commit/1f4c239f9d5b28edd24c99ee1a5446f774dfe18f
[7]: https://github.com/Xunnamius/test-utils/commit/35148b8770c25bfc28db20ca3d1077cf6e71580a
[8]: https://github.com/Xunnamius/test-utils/commit/cd28a9a0a06981edb7d180139ceb629dc4313139
[9]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@2.0.5...@-xun/test-mock-fixture@2.0.6
[10]: https://github.com/Xunnamius/test-utils/commit/6526476d500a82d4abcaf7d0d95c8993160f35f3
[11]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@2.0.4...@-xun/test-mock-fixture@2.0.5
[12]: https://github.com/Xunnamius/test-utils/commit/d8adc019dbb0a03206d0c5c7174559e5488b064c
[13]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@2.0.3...@-xun/test-mock-fixture@2.0.4
[14]: https://github.com/Xunnamius/test-utils/commit/b62153e9d3a4d79982da17ad16b72ac8a5624d3e
[15]: https://github.com/Xunnamius/test-utils/commit/8110aa0c8319be9e6c7621c012dfb0be57b95db1
[16]: https://github.com/Xunnamius/test-utils/commit/283fee800aa0723753ee5f33e84a81f6a4c91a5a
[17]: https://github.com/Xunnamius/test-utils/commit/4bfed30b333d18bbb25c115187e6fbe89115b097
[18]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@2.0.2...@-xun/test-mock-fixture@2.0.3
[19]: https://github.com/Xunnamius/test-utils/commit/fc4ea1561ab0eb466639e76ecec9142647b7bdae
[20]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@2.0.1...@-xun/test-mock-fixture@2.0.2
[21]: https://github.com/Xunnamius/test-utils/commit/38d78f30d1cc51ca920def046bbe18e3e02223b5
[22]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@2.0.0...@-xun/test-mock-fixture@2.0.1
[23]: https://github.com/Xunnamius/test-utils/commit/f092bd612822f5f3ec2d38beb5e941d4d5cb1ecb
[24]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.4.1...@-xun/test-mock-fixture@1.5.0
[25]: https://github.com/Xunnamius/test-utils/commit/a9b840fe53d5a76c20197dcb52c5564e63e661b4
[26]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.5.1...@-xun/test-mock-fixture@1.5.2
[27]: https://github.com/Xunnamius/test-utils/commit/0f5fd5a5d3b985f7540762db05f7242ab1388bda
[28]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.5.0...@-xun/test-mock-fixture@1.5.1
[29]: https://github.com/Xunnamius/test-utils/commit/9dff579e78ab57d00dbf45868cdbca1685091975
[30]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.3.1...@-xun/test-mock-fixture@1.4.0
[31]: https://github.com/Xunnamius/test-utils/commit/621df10e745940435a7e9f63ae786eaf20fe8004
[32]: https://github.com/Xunnamius/test-utils/commit/01d6013895216bcd85cafb3a2c55fc1cbe3ad14f
[33]: https://github.com/Xunnamius/test-utils/commit/a3bc0dfc981fcbe18f93e6549e03bdfb167555f9
[34]: https://github.com/Xunnamius/test-utils/commit/a238fa4dc85cc325b03a6e1c1185d0affaaae0c2
[35]: https://github.com/Xunnamius/test-utils/commit/2fde6bad764960feabfd6a17cc20110b3a73ffb0
[36]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.4.0...@-xun/test-mock-fixture@1.4.1
[37]: https://github.com/Xunnamius/test-utils/commit/11f98199f9fbc8df663d33cd2be8dfcd0eac52c4
[38]: https://github.com/Xunnamius/test-utils/commit/5634a59f2ae875c02d59f278e803db2d4d6a552e
[39]: https://github.com/Xunnamius/test-utils/commit/26e9599caddd3ac67676d75347d350e90d2a1ec6
[40]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.2.2...@-xun/test-mock-fixture@1.3.0
[41]: https://github.com/Xunnamius/test-utils/commit/426a69153080b7292b25d4974cafd11e74bf9a8a
[42]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.3.0...@-xun/test-mock-fixture@1.3.1
[43]: https://github.com/Xunnamius/test-utils/commit/64a47d37abd15ed5a846c2897fc68fc32432d0c9
[44]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.1.2...@-xun/test-mock-fixture@1.2.0
[45]: https://github.com/Xunnamius/test-utils/commit/beb85e0df50e813590ae799295cdbfb96ea92ab4
[46]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.2.1...@-xun/test-mock-fixture@1.2.2
[47]: https://github.com/Xunnamius/test-utils/commit/1fcd286988e2e2d3d0f0b3e779b70af46b59374c
[48]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.2.0...@-xun/test-mock-fixture@1.2.1
[49]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[50]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.3...@-xun/test-mock-fixture@1.1.0
[51]: https://github.com/Xunnamius/test-utils/commit/6caf74c08a58888d5d0ce0114dff670f8b570906
[52]: https://github.com/Xunnamius/test-utils/commit/5def0ad49a4eadefc61d6daed0a34b59fa75efb7
[53]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.1.1...@-xun/test-mock-fixture@1.1.2
[54]: https://github.com/Xunnamius/test-utils/commit/e96d066a8d31079cb061bc2dac285562fbf7b708
[55]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.1.0...@-xun/test-mock-fixture@1.1.1
[56]: https://github.com/Xunnamius/test-utils/commit/c1219168b725e263abb557d96549b7b98bdb4b4c
[57]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/test-mock-fixture@1.0.0
[58]: https://github.com/Xunnamius/test-utils/commit/d64d3a91f6d333efbf59693698a240e71ceb6ef3
[59]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[60]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[61]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.2...@-xun/test-mock-fixture@1.0.3
[62]: https://github.com/Xunnamius/test-utils/commit/ba2bb54f0f2d41708034e4076c72856c63c5167a
[63]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.1...@-xun/test-mock-fixture@1.0.2
[64]: https://github.com/Xunnamius/test-utils/commit/85f798f7d3d6f2f09ac0e84b754a6d384e8337f1
[65]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.0...@-xun/test-mock-fixture@1.0.1
[66]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
