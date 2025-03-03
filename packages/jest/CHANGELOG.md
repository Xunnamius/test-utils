# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/jest[@1.1.0][3] (2025-02-06)

### ✨ Features

- **packages/jest:** implement `ensurePackageHasBeenBuilt` export ([c463bf1][4])

<br />

### 🏗️ Patch @-xun/jest[@1.1.7][5] (2025-03-03)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([323d1bb][6])

<br />

### 🏗️ Patch @-xun/jest[@1.1.6][7] (2025-02-24)

#### ⚙️ Build System

- **deps:** bump @-xun/test-mock-fixture from 1.3.0 to 1.3.1 ([1c357c9][8])

<br />

### 🏗️ Patch @-xun/jest[@1.1.5][9] (2025-02-18)

#### 🪄 Fixes

- **packages/jest:** re-add ::todo method to replaced jest globals ([eb1c479][10])

<br />

### 🏗️ Patch @-xun/jest[@1.1.4][11] (2025-02-18)

#### 🪄 Fixes

- **packages/jest:** ensure `ensurePackageHasBeenBuilt` supports asterisk paths ([2d231c0][12])

<br />

### 🏗️ Patch @-xun/jest[@1.1.3][13] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][14])

<br />

### 🏗️ Patch @-xun/jest[@1.1.2][15] (2025-02-15)

#### 🪄 Fixes

- **packages/jest:** leverage bidirectional-resolve to analyze package exports ([ec060af][16])

<br />

### 🏗️ Patch @-xun/jest[@1.1.1][17] (2025-02-07)

#### 🪄 Fixes

- **packages/jest:** use less aggressive and more useful `ensurePackageHasBeenBuilt` check ([08c172f][18])

<br />

## @-xun/jest[@1.0.0][19] (2025-02-04)

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][20])
- **packages:** split test/setup blob into distinct packages ([857d3ea][21])

<br />

### 🏗️ Patch @-xun/jest[@1.0.1][22] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][23])
- **packages/jest:** ensure `asMocked` returns an instance of `jest.fn()` if no function provided ([83619bd][24])

#### ⚙️ Build System

- Add missing jest peer dependency ([af4e75f][25])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.0.1...@-xun/jest@1.1.0
[4]: https://github.com/Xunnamius/test-utils/commit/c463bf1463aea0453e6a08cbbcb204aba8b229ef
[5]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.6...@-xun/jest@1.1.7
[6]: https://github.com/Xunnamius/test-utils/commit/323d1bbb2784524bc0fd6ac2a04430a19fc414c4
[7]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.5...@-xun/jest@1.1.6
[8]: https://github.com/Xunnamius/test-utils/commit/1c357c951aa527f86e5a3a850b3c904c7d633ae0
[9]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.4...@-xun/jest@1.1.5
[10]: https://github.com/Xunnamius/test-utils/commit/eb1c4791975c2e404ed1d1fa0124c3bbd9ef41f4
[11]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.3...@-xun/jest@1.1.4
[12]: https://github.com/Xunnamius/test-utils/commit/2d231c008d107baf61eba939013d58df61adad65
[13]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.2...@-xun/jest@1.1.3
[14]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[15]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.1...@-xun/jest@1.1.2
[16]: https://github.com/Xunnamius/test-utils/commit/ec060af799a2bd987617106ad6f035907c4f4f42
[17]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.0...@-xun/jest@1.1.1
[18]: https://github.com/Xunnamius/test-utils/commit/08c172fd86063ef2cb40963f770391649cfb8900
[19]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/jest@1.0.0
[20]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[21]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[22]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.0.0...@-xun/jest@1.0.1
[23]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
[24]: https://github.com/Xunnamius/test-utils/commit/83619bdf03d91fda9056a40b5dc66ce530cc9131
[25]: https://github.com/Xunnamius/test-utils/commit/af4e75f9b436c758cd44a902f489c5640d8b2b47
