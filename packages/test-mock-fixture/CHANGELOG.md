# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/test-mock-fixture[@1.5.0][3] (2025-03-07)

### ✨ Features

- **packages/test-mock-fixture:** allow `initialVirtualFiles` to accept any serializable entry value ([a9b840f][4])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.5.1][5] (2025-03-13)

#### ⚙️ Build System

- **deps:** bump @-xun/project-types from 1.0.3 to 1.0.4 ([9dff579][6])

<br />

## @-xun/test-mock-fixture[@1.4.0][7] (2025-03-03)

### ✨ Features

- **packages/test-mock-fixture:** delete pesky Node.js debug inspector strings when present in `context.testResult.stderr` ([621df10][8])

### 🪄 Fixes

- **packages/test-mock-fixture:** improve `ErrorMessage.AggregateErrors` output ([01d6013][9])
- **packages/test-mock-fixture:** use more sensible error message when `performCleanup` is disabled ([a3bc0df][10])

### ⚙️ Build System

- **deps:** bump @-xun/project-types from 1.0.2 to 1.0.3 ([a238fa4][11])
- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([2fde6ba][12])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.4.1][13] (2025-03-06)

#### 🪄 Fixes

- **packages/test-mock-fixture:** migrate node inspector debug string elision functionality into `@-xun/run` ([11f9819][14])

#### ⚙️ Build System

- **deps:** bump @-xun/run from 1.0.3 to 1.1.0 ([5634a59][15])
- **deps:** bump type-fest from 4.36.0 to 4.37.0 ([26e9599][16])

<br />

## @-xun/test-mock-fixture[@1.3.0][17] (2025-02-18)

### ✨ Features

- **packages/test-mock-fixture:** throw in root fixture if `performCleanup` is not true ([426a691][18])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.3.1][19] (2025-02-24)

#### ⚙️ Build System

- **deps:** bump @-xun/run from 1.0.2 to 1.0.3 ([64a47d3][20])

<br />

## @-xun/test-mock-fixture[@1.2.0][21] (2025-02-16)

### ✨ Features

- **packages/test-mock-fixture:** include path to failing dummy root when a fixture throws ([beb85e0][22])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.2.2][23] (2025-02-18)

#### 🪄 Fixes

- **packages/test-mock-fixture:** support mixing ad-hoc and predefined fixtures (including increased type support) ([1fcd286][24])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.2.1][25] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][26])

<br />

## @-xun/test-mock-fixture[@1.1.0][27] (2025-02-16)

### ✨ Features

- **packages/test-mock-fixture:** add `overwriteExisting` option to dummy-files fixture ([6caf74c][28])

### 🪄 Fixes

- **packages/test-mock-fixture:** ensure `mockFixturesFactory` actually deep merges factory options with local options ([5def0ad][29])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.1.2][30] (2025-02-16)

#### 🪄 Fixes

- **packages/test-mock-fixture:** execute all node processes with `FORCE_COLOR` environment variable disabled ([e96d066][31])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.1.1][32] (2025-02-16)

#### 🪄 Fixes

- **packages/test-mock-fixture:** execute all node processes with warnings and ansi colors disabled ([c121916][33])

<br />

## @-xun/test-mock-fixture[@1.0.0][34] (2025-02-04)

### ✨ Features

- **packages/test-mock-fixture:** land initial version ([d64d3a9][35])

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][36])
- **packages:** split test/setup blob into distinct packages ([857d3ea][37])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.0.3][38] (2025-02-16)

#### 🪄 Fixes

- **packages/test-mock-fixture:** include "simple-git" as dependency (instead of peer dependency) ([ba2bb54][39])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.0.2][40] (2025-02-15)

#### 🪄 Fixes

- **packages/test-mock-fixture:** dramatically improve `withMockedFixtures`, `mockFixturesFactory`, and related types ([85f798f][41])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.0.1][42] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][43])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.4.1...@-xun/test-mock-fixture@1.5.0
[4]: https://github.com/Xunnamius/test-utils/commit/a9b840fe53d5a76c20197dcb52c5564e63e661b4
[5]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.5.0...@-xun/test-mock-fixture@1.5.1
[6]: https://github.com/Xunnamius/test-utils/commit/9dff579e78ab57d00dbf45868cdbca1685091975
[7]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.3.1...@-xun/test-mock-fixture@1.4.0
[8]: https://github.com/Xunnamius/test-utils/commit/621df10e745940435a7e9f63ae786eaf20fe8004
[9]: https://github.com/Xunnamius/test-utils/commit/01d6013895216bcd85cafb3a2c55fc1cbe3ad14f
[10]: https://github.com/Xunnamius/test-utils/commit/a3bc0dfc981fcbe18f93e6549e03bdfb167555f9
[11]: https://github.com/Xunnamius/test-utils/commit/a238fa4dc85cc325b03a6e1c1185d0affaaae0c2
[12]: https://github.com/Xunnamius/test-utils/commit/2fde6bad764960feabfd6a17cc20110b3a73ffb0
[13]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.4.0...@-xun/test-mock-fixture@1.4.1
[14]: https://github.com/Xunnamius/test-utils/commit/11f98199f9fbc8df663d33cd2be8dfcd0eac52c4
[15]: https://github.com/Xunnamius/test-utils/commit/5634a59f2ae875c02d59f278e803db2d4d6a552e
[16]: https://github.com/Xunnamius/test-utils/commit/26e9599caddd3ac67676d75347d350e90d2a1ec6
[17]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.2.2...@-xun/test-mock-fixture@1.3.0
[18]: https://github.com/Xunnamius/test-utils/commit/426a69153080b7292b25d4974cafd11e74bf9a8a
[19]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.3.0...@-xun/test-mock-fixture@1.3.1
[20]: https://github.com/Xunnamius/test-utils/commit/64a47d37abd15ed5a846c2897fc68fc32432d0c9
[21]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.1.2...@-xun/test-mock-fixture@1.2.0
[22]: https://github.com/Xunnamius/test-utils/commit/beb85e0df50e813590ae799295cdbfb96ea92ab4
[23]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.2.1...@-xun/test-mock-fixture@1.2.2
[24]: https://github.com/Xunnamius/test-utils/commit/1fcd286988e2e2d3d0f0b3e779b70af46b59374c
[25]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.2.0...@-xun/test-mock-fixture@1.2.1
[26]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[27]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.3...@-xun/test-mock-fixture@1.1.0
[28]: https://github.com/Xunnamius/test-utils/commit/6caf74c08a58888d5d0ce0114dff670f8b570906
[29]: https://github.com/Xunnamius/test-utils/commit/5def0ad49a4eadefc61d6daed0a34b59fa75efb7
[30]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.1.1...@-xun/test-mock-fixture@1.1.2
[31]: https://github.com/Xunnamius/test-utils/commit/e96d066a8d31079cb061bc2dac285562fbf7b708
[32]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.1.0...@-xun/test-mock-fixture@1.1.1
[33]: https://github.com/Xunnamius/test-utils/commit/c1219168b725e263abb557d96549b7b98bdb4b4c
[34]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/test-mock-fixture@1.0.0
[35]: https://github.com/Xunnamius/test-utils/commit/d64d3a91f6d333efbf59693698a240e71ceb6ef3
[36]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[37]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[38]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.2...@-xun/test-mock-fixture@1.0.3
[39]: https://github.com/Xunnamius/test-utils/commit/ba2bb54f0f2d41708034e4076c72856c63c5167a
[40]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.1...@-xun/test-mock-fixture@1.0.2
[41]: https://github.com/Xunnamius/test-utils/commit/85f798f7d3d6f2f09ac0e84b754a6d384e8337f1
[42]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.0...@-xun/test-mock-fixture@1.0.1
[43]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
