# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/test-mock-fixture[@1.3.0][3] (2025-02-18)

### ✨ Features

- **packages/test-mock-fixture:** throw in root fixture if `performCleanup` is not true ([426a691][4])

<br />

## @-xun/test-mock-fixture[@1.2.0][5] (2025-02-16)

### ✨ Features

- **packages/test-mock-fixture:** include path to failing dummy root when a fixture throws ([beb85e0][6])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.2.2][7] (2025-02-18)

#### 🪄 Fixes

- **packages/test-mock-fixture:** support mixing ad-hoc and predefined fixtures (including increased type support) ([1fcd286][8])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.2.1][9] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][10])

<br />

## @-xun/test-mock-fixture[@1.1.0][11] (2025-02-16)

### ✨ Features

- **packages/test-mock-fixture:** add `overwriteExisting` option to dummy-files fixture ([6caf74c][12])

### 🪄 Fixes

- **packages/test-mock-fixture:** ensure `mockFixturesFactory` actually deep merges factory options with local options ([5def0ad][13])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.1.2][14] (2025-02-16)

#### 🪄 Fixes

- **packages/test-mock-fixture:** execute all node processes with `FORCE_COLOR` environment variable disabled ([e96d066][15])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.1.1][16] (2025-02-16)

#### 🪄 Fixes

- **packages/test-mock-fixture:** execute all node processes with warnings and ansi colors disabled ([c121916][17])

<br />

## @-xun/test-mock-fixture[@1.0.0][18] (2025-02-04)

### ✨ Features

- **packages/test-mock-fixture:** land initial version ([d64d3a9][19])

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][20])
- **packages:** split test/setup blob into distinct packages ([857d3ea][21])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.0.3][22] (2025-02-16)

#### 🪄 Fixes

- **packages/test-mock-fixture:** include "simple-git" as dependency (instead of peer dependency) ([ba2bb54][23])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.0.2][24] (2025-02-15)

#### 🪄 Fixes

- **packages/test-mock-fixture:** dramatically improve `withMockedFixtures`, `mockFixturesFactory`, and related types ([85f798f][25])

<br />

### 🏗️ Patch @-xun/test-mock-fixture[@1.0.1][26] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][27])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.2.2...@-xun/test-mock-fixture@1.3.0
[4]: https://github.com/Xunnamius/test-utils/commit/426a69153080b7292b25d4974cafd11e74bf9a8a
[5]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.1.2...@-xun/test-mock-fixture@1.2.0
[6]: https://github.com/Xunnamius/test-utils/commit/beb85e0df50e813590ae799295cdbfb96ea92ab4
[7]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.2.1...@-xun/test-mock-fixture@1.2.2
[8]: https://github.com/Xunnamius/test-utils/commit/1fcd286988e2e2d3d0f0b3e779b70af46b59374c
[9]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.2.0...@-xun/test-mock-fixture@1.2.1
[10]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[11]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.3...@-xun/test-mock-fixture@1.1.0
[12]: https://github.com/Xunnamius/test-utils/commit/6caf74c08a58888d5d0ce0114dff670f8b570906
[13]: https://github.com/Xunnamius/test-utils/commit/5def0ad49a4eadefc61d6daed0a34b59fa75efb7
[14]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.1.1...@-xun/test-mock-fixture@1.1.2
[15]: https://github.com/Xunnamius/test-utils/commit/e96d066a8d31079cb061bc2dac285562fbf7b708
[16]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.1.0...@-xun/test-mock-fixture@1.1.1
[17]: https://github.com/Xunnamius/test-utils/commit/c1219168b725e263abb557d96549b7b98bdb4b4c
[18]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/test-mock-fixture@1.0.0
[19]: https://github.com/Xunnamius/test-utils/commit/d64d3a91f6d333efbf59693698a240e71ceb6ef3
[20]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[21]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[22]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.2...@-xun/test-mock-fixture@1.0.3
[23]: https://github.com/Xunnamius/test-utils/commit/ba2bb54f0f2d41708034e4076c72856c63c5167a
[24]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.1...@-xun/test-mock-fixture@1.0.2
[25]: https://github.com/Xunnamius/test-utils/commit/85f798f7d3d6f2f09ac0e84b754a6d384e8337f1
[26]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-fixture@1.0.0...@-xun/test-mock-fixture@1.0.1
[27]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
