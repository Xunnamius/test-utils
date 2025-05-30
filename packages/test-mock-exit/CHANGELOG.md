# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/test-mock-exit[@2.0.0][3] (2025-05-30)

### 💥 BREAKING CHANGES 💥

- Minimum supported node version is now 20.18.0

### ⚙️ Build System

- **deps:** bump core-js from 3.41.0 to 3.42.0 ([86adfe5][4])
- **deps:** bump type-fest from 4.37.0 to 4.41.0 ([dbc8ed2][5])
- **package:** drop support for node\@18 ([cd28a9a][6])

<br />

## @-xun/test-mock-exit[@1.0.0][7] (2025-02-04)

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][8])
- **packages:** split test/setup blob into distinct packages ([857d3ea][9])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.7][10] (2025-03-19)

#### ⚙️ Build System

- **deps:** bump core-js from 3.40.0 to 3.41.0 ([0542d8d][11])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.6][12] (2025-03-06)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.36.0 to 4.37.0 ([efb81bf][13])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.5][14] (2025-03-03)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([d293d4f][15])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.4][16] (2025-02-18)

#### ⚙️ Build System

- Make warning comments bold; refactor outdated typeof checks ([6f689e1][17])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.3][18] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][19])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.2][20] (2025-02-15)

#### 🪄 Fixes

- **packages/test-mock-exit:** throw and catch `MockedExitError` instances when `process.exit` is called ([490b239][21])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.1][22] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][23])

#### ⚙️ Build System

- Add missing jest peer dependency ([af4e75f][24])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.7...@-xun/test-mock-exit@2.0.0
[4]: https://github.com/Xunnamius/test-utils/commit/86adfe5d59a20f8847bbc872e049bddde17dbfa0
[5]: https://github.com/Xunnamius/test-utils/commit/dbc8ed2114ee6bca9861aff75ba69dfcb3274d75
[6]: https://github.com/Xunnamius/test-utils/commit/cd28a9a0a06981edb7d180139ceb629dc4313139
[7]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/test-mock-exit@1.0.0
[8]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[9]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[10]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.6...@-xun/test-mock-exit@1.0.7
[11]: https://github.com/Xunnamius/test-utils/commit/0542d8d7d369bcd04859fd37099a2f3afad247d4
[12]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.5...@-xun/test-mock-exit@1.0.6
[13]: https://github.com/Xunnamius/test-utils/commit/efb81bfa8d064a55323cdda06d970e1322b41bc9
[14]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.4...@-xun/test-mock-exit@1.0.5
[15]: https://github.com/Xunnamius/test-utils/commit/d293d4fb8cc744ba92e7b59bed5922cf665dd22c
[16]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.3...@-xun/test-mock-exit@1.0.4
[17]: https://github.com/Xunnamius/test-utils/commit/6f689e10efcbac51bda6c5db872d36185d578002
[18]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.2...@-xun/test-mock-exit@1.0.3
[19]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[20]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.1...@-xun/test-mock-exit@1.0.2
[21]: https://github.com/Xunnamius/test-utils/commit/490b2391ca8d8d22bc076075033446778cf4b496
[22]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.0...@-xun/test-mock-exit@1.0.1
[23]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
[24]: https://github.com/Xunnamius/test-utils/commit/af4e75f9b436c758cd44a902f489c5640d8b2b47
