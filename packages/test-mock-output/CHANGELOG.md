# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/test-mock-output[@1.1.0][3] (2025-02-18)

### ✨ Features

- **packages/test-mock-output:** export `MockedOutputSpies`; add support for capturing output from `node:console` ([d68ebf0][4])

### ⚙️ Build System

- Make warning comments bold; refactor outdated typeof checks ([6f689e1][5])
- **packages/test-mock-output:** add missing core-js dependency ([3333d12][6])

<br />

### 🏗️ Patch @-xun/test-mock-output[@1.1.2][7] (2025-03-06)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.36.0 to 4.37.0 ([f3c2aa3][8])

<br />

### 🏗️ Patch @-xun/test-mock-output[@1.1.1][9] (2025-03-03)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([b8ceb8b][10])

<br />

## @-xun/test-mock-output[@1.0.0][11] (2025-02-04)

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][12])
- **packages:** split test/setup blob into distinct packages ([857d3ea][13])

<br />

### 🏗️ Patch @-xun/test-mock-output[@1.0.3][14] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][15])

<br />

### 🏗️ Patch @-xun/test-mock-output[@1.0.2][16] (2025-02-15)

#### 🪄 Fixes

- **packages/test-mock-output:** ensure `passthrough` actually passes through specified spies ([5e6752d][17])

<br />

### 🏗️ Patch @-xun/test-mock-output[@1.0.1][18] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][19])

#### ⚙️ Build System

- Add missing jest peer dependency ([af4e75f][20])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.0.3...@-xun/test-mock-output@1.1.0
[4]: https://github.com/Xunnamius/test-utils/commit/d68ebf0d1c1d58d3345c900e07ca535752485c7e
[5]: https://github.com/Xunnamius/test-utils/commit/6f689e10efcbac51bda6c5db872d36185d578002
[6]: https://github.com/Xunnamius/test-utils/commit/3333d128f45f8a778ae6bf5f32aaf8d3090d7e19
[7]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.1.1...@-xun/test-mock-output@1.1.2
[8]: https://github.com/Xunnamius/test-utils/commit/f3c2aa3d45ab3abc2647670264fb41db52135e8c
[9]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.1.0...@-xun/test-mock-output@1.1.1
[10]: https://github.com/Xunnamius/test-utils/commit/b8ceb8bdffb91f71e9596cc5c9c98d0053d4acd8
[11]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/test-mock-output@1.0.0
[12]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[13]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[14]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.0.2...@-xun/test-mock-output@1.0.3
[15]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[16]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.0.1...@-xun/test-mock-output@1.0.2
[17]: https://github.com/Xunnamius/test-utils/commit/5e6752d3df07530b42d0df97ebef3e0865c62b7f
[18]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.0.0...@-xun/test-mock-output@1.0.1
[19]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
[20]: https://github.com/Xunnamius/test-utils/commit/af4e75f9b436c758cd44a902f489c5640d8b2b47
