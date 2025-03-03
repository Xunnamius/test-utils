# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/test-mock-fixture[@1.4.0][3] (2025-03-03)

### ✨ Features

- **packages/test-mock-fixture:** delete pesky Node.js debug inspector strings when present in `context.testResult.stderr` ([621df10][4])

### 🪄 Fixes

- **packages/test-mock-fixture:** improve `ErrorMessage.AggregateErrors` output ([01d6013][5])
- **packages/test-mock-fixture:** use more sensible error message when `performCleanup` is disabled ([a3bc0df][6])

### ⚙️ Build System

- **deps:** bump @-xun/project-types from 1.0.2 to 1.0.3 ([a238fa4][7])
- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([2fde6ba][8])

<br />

## @-xun/test-mock-fixture[@1.3.0][9] (2025-02-18)

### ✨ Features

- **packages/test-mock-fixture:** throw in root fixture if `performCleanup` is not true ([426a691][10])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.3.1][11] (2025-02-24)

#### ⚙️ Build System

- **deps:** bump @-xun/run from 1.0.2 to 1.0.3 ([64a47d3][12])

<br />

## @-xun/test-mock-fixture[@1.2.0][13] (2025-02-16)

### ✨ Features

- **packages/test-mock-fixture:** include path to failing dummy root when a fixture throws ([beb85e0][14])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.2.2][15] (2025-02-18)

#### 🪄 Fixes

- **packages/test-mock-fixture:** support mixing ad-hoc and predefined fixtures (including increased type support) ([1fcd286][16])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.2.1][17] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][18])

<br />

## @-xun/test-mock-fixture[@1.1.0][19] (2025-02-16)

### ✨ Features

- **packages/test-mock-fixture:** add `overwriteExisting` option to dummy-files fixture ([6caf74c][20])

### 🪄 Fixes

- **packages/test-mock-fixture:** ensure `mockFixturesFactory` actually deep merges factory options with local options ([5def0ad][21])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.1.2][22] (2025-02-16)

#### 🪄 Fixes

- **packages/test-mock-fixture:** execute all node processes with `FORCE_COLOR` environment variable disabled ([e96d066][23])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.1.1][24] (2025-02-16)

#### 🪄 Fixes

- **packages/test-mock-fixture:** execute all node processes with warnings and ansi colors disabled ([c121916][25])

<br />

## @-xun/test-mock-fixture[@1.0.0][26] (2025-02-04)

### ✨ Features

- **packages/test-mock-fixture:** land initial version ([d64d3a9][27])

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][28])
- **packages:** split test/setup blob into distinct packages ([857d3ea][29])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.0.3][30] (2025-02-16)

#### 🪄 Fixes

- **packages/test-mock-fixture:** include "simple-git" as dependency (instead of peer dependency) ([ba2bb54][31])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.0.2][32] (2025-02-15)

#### 🪄 Fixes

- **packages/test-mock-fixture:** dramatically improve `withMockedFixtures`, `mockFixturesFactory`, and related types ([85f798f][33])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.0.1][34] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][35])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.3.1...@-xun/test-mock-fixture@1.4.0
[4]: https://github.com/Xunnamius/test-utils/commit/621df10e745940435a7e9f63ae786eaf20fe8004
[5]: https://github.com/Xunnamius/test-utils/commit/01d6013895216bcd85cafb3a2c55fc1cbe3ad14f
[6]: https://github.com/Xunnamius/test-utils/commit/a3bc0dfc981fcbe18f93e6549e03bdfb167555f9
[7]: https://github.com/Xunnamius/test-utils/commit/a238fa4dc85cc325b03a6e1c1185d0affaaae0c2
[8]: https://github.com/Xunnamius/test-utils/commit/2fde6bad764960feabfd6a17cc20110b3a73ffb0
[9]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.2.2...@-xun/test-mock-fixture@1.3.0
[10]: https://github.com/Xunnamius/test-utils/commit/426a69153080b7292b25d4974cafd11e74bf9a8a
[11]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.3.0...@-xun/test-mock-fixture@1.3.1
[12]: https://github.com/Xunnamius/test-utils/commit/64a47d37abd15ed5a846c2897fc68fc32432d0c9
[13]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.1.2...@-xun/test-mock-fixture@1.2.0
[14]: https://github.com/Xunnamius/test-utils/commit/beb85e0df50e813590ae799295cdbfb96ea92ab4
[15]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.2.1...@-xun/test-mock-fixture@1.2.2
[16]: https://github.com/Xunnamius/test-utils/commit/1fcd286988e2e2d3d0f0b3e779b70af46b59374c
[17]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.2.0...@-xun/test-mock-fixture@1.2.1
[18]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[19]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.3...@-xun/test-mock-fixture@1.1.0
[20]: https://github.com/Xunnamius/test-utils/commit/6caf74c08a58888d5d0ce0114dff670f8b570906
[21]: https://github.com/Xunnamius/test-utils/commit/5def0ad49a4eadefc61d6daed0a34b59fa75efb7
[22]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.1.1...@-xun/test-mock-fixture@1.1.2
[23]: https://github.com/Xunnamius/test-utils/commit/e96d066a8d31079cb061bc2dac285562fbf7b708
[24]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.1.0...@-xun/test-mock-fixture@1.1.1
[25]: https://github.com/Xunnamius/test-utils/commit/c1219168b725e263abb557d96549b7b98bdb4b4c
[26]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/test-mock-fixture@1.0.0
[27]: https://github.com/Xunnamius/test-utils/commit/d64d3a91f6d333efbf59693698a240e71ceb6ef3
[28]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[29]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[30]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.2...@-xun/test-mock-fixture@1.0.3
[31]: https://github.com/Xunnamius/test-utils/commit/ba2bb54f0f2d41708034e4076c72856c63c5167a
[32]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.1...@-xun/test-mock-fixture@1.0.2
[33]: https://github.com/Xunnamius/test-utils/commit/85f798f7d3d6f2f09ac0e84b754a6d384e8337f1
[34]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.0...@-xun/test-mock-fixture@1.0.1
[35]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
