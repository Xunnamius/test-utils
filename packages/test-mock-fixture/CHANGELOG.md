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

## @-xun/test-mock-fixture[@1.5.0][9] (2025-03-07)

### ✨ Features

- **packages/test-mock-fixture:** allow `initialVirtualFiles` to accept any serializable entry value ([a9b840f][10])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.5.2][11] (2025-03-19)

#### ⚙️ Build System

- **deps:** bump core-js from 3.40.0 to 3.41.0 ([0f5fd5a][12])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.5.1][13] (2025-03-13)

#### ⚙️ Build System

- **deps:** bump @-xun/project-types from 1.0.3 to 1.0.4 ([9dff579][14])

<br />

## @-xun/test-mock-fixture[@1.4.0][15] (2025-03-03)

### ✨ Features

- **packages/test-mock-fixture:** delete pesky Node.js debug inspector strings when present in `context.testResult.stderr` ([621df10][16])

### 🪄 Fixes

- **packages/test-mock-fixture:** improve `ErrorMessage.AggregateErrors` output ([01d6013][17])
- **packages/test-mock-fixture:** use more sensible error message when `performCleanup` is disabled ([a3bc0df][18])

### ⚙️ Build System

- **deps:** bump @-xun/project-types from 1.0.2 to 1.0.3 ([a238fa4][19])
- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([2fde6ba][20])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.4.1][21] (2025-03-06)

#### 🪄 Fixes

- **packages/test-mock-fixture:** migrate node inspector debug string elision functionality into `@-xun/run` ([11f9819][22])

#### ⚙️ Build System

- **deps:** bump @-xun/run from 1.0.3 to 1.1.0 ([5634a59][23])
- **deps:** bump type-fest from 4.36.0 to 4.37.0 ([26e9599][24])

<br />

## @-xun/test-mock-fixture[@1.3.0][25] (2025-02-18)

### ✨ Features

- **packages/test-mock-fixture:** throw in root fixture if `performCleanup` is not true ([426a691][26])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.3.1][27] (2025-02-24)

#### ⚙️ Build System

- **deps:** bump @-xun/run from 1.0.2 to 1.0.3 ([64a47d3][28])

<br />

## @-xun/test-mock-fixture[@1.2.0][29] (2025-02-16)

### ✨ Features

- **packages/test-mock-fixture:** include path to failing dummy root when a fixture throws ([beb85e0][30])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.2.2][31] (2025-02-18)

#### 🪄 Fixes

- **packages/test-mock-fixture:** support mixing ad-hoc and predefined fixtures (including increased type support) ([1fcd286][32])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.2.1][33] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][34])

<br />

## @-xun/test-mock-fixture[@1.1.0][35] (2025-02-16)

### ✨ Features

- **packages/test-mock-fixture:** add `overwriteExisting` option to dummy-files fixture ([6caf74c][36])

### 🪄 Fixes

- **packages/test-mock-fixture:** ensure `mockFixturesFactory` actually deep merges factory options with local options ([5def0ad][37])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.1.2][38] (2025-02-16)

#### 🪄 Fixes

- **packages/test-mock-fixture:** execute all node processes with `FORCE_COLOR` environment variable disabled ([e96d066][39])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.1.1][40] (2025-02-16)

#### 🪄 Fixes

- **packages/test-mock-fixture:** execute all node processes with warnings and ansi colors disabled ([c121916][41])

<br />

## @-xun/test-mock-fixture[@1.0.0][42] (2025-02-04)

### ✨ Features

- **packages/test-mock-fixture:** land initial version ([d64d3a9][43])

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][44])
- **packages:** split test/setup blob into distinct packages ([857d3ea][45])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.0.3][46] (2025-02-16)

#### 🪄 Fixes

- **packages/test-mock-fixture:** include "simple-git" as dependency (instead of peer dependency) ([ba2bb54][47])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.0.2][48] (2025-02-15)

#### 🪄 Fixes

- **packages/test-mock-fixture:** dramatically improve `withMockedFixtures`, `mockFixturesFactory`, and related types ([85f798f][49])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.0.1][50] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][51])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.5.2...@-xun/test-mock-fixture@2.0.0
[4]: https://github.com/Xunnamius/test-utils/commit/a8f6ee9647e91455f91e12f87cee4d9c8c1583ff
[5]: https://github.com/Xunnamius/test-utils/commit/ca6ef80b46df34ed73f8a96a3eee160d65d09afb
[6]: https://github.com/Xunnamius/test-utils/commit/1f4c239f9d5b28edd24c99ee1a5446f774dfe18f
[7]: https://github.com/Xunnamius/test-utils/commit/35148b8770c25bfc28db20ca3d1077cf6e71580a
[8]: https://github.com/Xunnamius/test-utils/commit/cd28a9a0a06981edb7d180139ceb629dc4313139
[9]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.4.1...@-xun/test-mock-fixture@1.5.0
[10]: https://github.com/Xunnamius/test-utils/commit/a9b840fe53d5a76c20197dcb52c5564e63e661b4
[11]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.5.1...@-xun/test-mock-fixture@1.5.2
[12]: https://github.com/Xunnamius/test-utils/commit/0f5fd5a5d3b985f7540762db05f7242ab1388bda
[13]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.5.0...@-xun/test-mock-fixture@1.5.1
[14]: https://github.com/Xunnamius/test-utils/commit/9dff579e78ab57d00dbf45868cdbca1685091975
[15]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.3.1...@-xun/test-mock-fixture@1.4.0
[16]: https://github.com/Xunnamius/test-utils/commit/621df10e745940435a7e9f63ae786eaf20fe8004
[17]: https://github.com/Xunnamius/test-utils/commit/01d6013895216bcd85cafb3a2c55fc1cbe3ad14f
[18]: https://github.com/Xunnamius/test-utils/commit/a3bc0dfc981fcbe18f93e6549e03bdfb167555f9
[19]: https://github.com/Xunnamius/test-utils/commit/a238fa4dc85cc325b03a6e1c1185d0affaaae0c2
[20]: https://github.com/Xunnamius/test-utils/commit/2fde6bad764960feabfd6a17cc20110b3a73ffb0
[21]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.4.0...@-xun/test-mock-fixture@1.4.1
[22]: https://github.com/Xunnamius/test-utils/commit/11f98199f9fbc8df663d33cd2be8dfcd0eac52c4
[23]: https://github.com/Xunnamius/test-utils/commit/5634a59f2ae875c02d59f278e803db2d4d6a552e
[24]: https://github.com/Xunnamius/test-utils/commit/26e9599caddd3ac67676d75347d350e90d2a1ec6
[25]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.2.2...@-xun/test-mock-fixture@1.3.0
[26]: https://github.com/Xunnamius/test-utils/commit/426a69153080b7292b25d4974cafd11e74bf9a8a
[27]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.3.0...@-xun/test-mock-fixture@1.3.1
[28]: https://github.com/Xunnamius/test-utils/commit/64a47d37abd15ed5a846c2897fc68fc32432d0c9
[29]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.1.2...@-xun/test-mock-fixture@1.2.0
[30]: https://github.com/Xunnamius/test-utils/commit/beb85e0df50e813590ae799295cdbfb96ea92ab4
[31]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.2.1...@-xun/test-mock-fixture@1.2.2
[32]: https://github.com/Xunnamius/test-utils/commit/1fcd286988e2e2d3d0f0b3e779b70af46b59374c
[33]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.2.0...@-xun/test-mock-fixture@1.2.1
[34]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[35]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.3...@-xun/test-mock-fixture@1.1.0
[36]: https://github.com/Xunnamius/test-utils/commit/6caf74c08a58888d5d0ce0114dff670f8b570906
[37]: https://github.com/Xunnamius/test-utils/commit/5def0ad49a4eadefc61d6daed0a34b59fa75efb7
[38]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.1.1...@-xun/test-mock-fixture@1.1.2
[39]: https://github.com/Xunnamius/test-utils/commit/e96d066a8d31079cb061bc2dac285562fbf7b708
[40]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.1.0...@-xun/test-mock-fixture@1.1.1
[41]: https://github.com/Xunnamius/test-utils/commit/c1219168b725e263abb557d96549b7b98bdb4b4c
[42]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/test-mock-fixture@1.0.0
[43]: https://github.com/Xunnamius/test-utils/commit/d64d3a91f6d333efbf59693698a240e71ceb6ef3
[44]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[45]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[46]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.2...@-xun/test-mock-fixture@1.0.3
[47]: https://github.com/Xunnamius/test-utils/commit/ba2bb54f0f2d41708034e4076c72856c63c5167a
[48]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.1...@-xun/test-mock-fixture@1.0.2
[49]: https://github.com/Xunnamius/test-utils/commit/85f798f7d3d6f2f09ac0e84b754a6d384e8337f1
[50]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.0...@-xun/test-mock-fixture@1.0.1
[51]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
