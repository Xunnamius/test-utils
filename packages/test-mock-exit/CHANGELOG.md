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

### 🏗️ Patch @-xun/test-mock-exit[@2.0.6][7] (2025-09-01)

#### ⚙️ Build System

- **deps:** bump core-js from 3.44.0 to 3.45.1 ([355c3b7][8])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@2.0.5][9] (2025-07-10)

#### ⚙️ Build System

- **deps:** bump @-xun/error from 1.1.4 to 1.1.6 ([2fb9523][10])
- **deps:** bump core-js from 3.43.0 to 3.44.0 ([ee41967][11])
- **package:** integrate @-xun/error dependency ([5efd292][12])
- **packages:** remove unused dependency ([5f2c703][13])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@2.0.4][14] (2025-06-30)

#### ⚙️ Build System

- Remove dead jest versions from peer deps ([29aea64][15])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@2.0.3][16] (2025-06-14)

#### ⚙️ Build System

- **deps:** bump core-js from 3.42.0 to 3.43.0 ([cd765c7][17])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@2.0.2][18] (2025-06-03)

#### ⚙️ Build System

- **package:** update jest peer dependency to prefer 30 first, then 30-beta second, then 30-alpha last ([fc4ea15][19])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@2.0.1][20] (2025-06-03)

#### ⚙️ Build System

- Use correct jest peer dependency ([c9249f4][21])

<br />

## @-xun/test-mock-exit[@1.0.0][22] (2025-02-04)

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][23])
- **packages:** split test/setup blob into distinct packages ([857d3ea][24])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.7][25] (2025-03-19)

#### ⚙️ Build System

- **deps:** bump core-js from 3.40.0 to 3.41.0 ([0542d8d][26])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.6][27] (2025-03-06)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.36.0 to 4.37.0 ([efb81bf][28])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.5][29] (2025-03-03)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([d293d4f][30])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.4][31] (2025-02-18)

#### ⚙️ Build System

- Make warning comments bold; refactor outdated typeof checks ([6f689e1][32])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.3][33] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][34])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.2][35] (2025-02-15)

#### 🪄 Fixes

- **packages/test-mock-exit:** throw and catch `MockedExitError` instances when `process.exit` is called ([490b239][36])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.1][37] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][38])

#### ⚙️ Build System

- Add missing jest peer dependency ([af4e75f][39])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.7...@-xun/test-mock-exit@2.0.0
[4]: https://github.com/Xunnamius/test-utils/commit/86adfe5d59a20f8847bbc872e049bddde17dbfa0
[5]: https://github.com/Xunnamius/test-utils/commit/dbc8ed2114ee6bca9861aff75ba69dfcb3274d75
[6]: https://github.com/Xunnamius/test-utils/commit/cd28a9a0a06981edb7d180139ceb629dc4313139
[7]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@2.0.5...@-xun/test-mock-exit@2.0.6
[8]: https://github.com/Xunnamius/test-utils/commit/355c3b70262ee6325e60d5ad46f9c9e9acd077c5
[9]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@2.0.4...@-xun/test-mock-exit@2.0.5
[10]: https://github.com/Xunnamius/test-utils/commit/2fb9523ec4a891821a951fb6f0b83780735c7677
[11]: https://github.com/Xunnamius/test-utils/commit/ee4196777ad5367a9d360bd3c0783d42cea631d1
[12]: https://github.com/Xunnamius/test-utils/commit/5efd2925becb718fceed31da7a02578c98d681cb
[13]: https://github.com/Xunnamius/test-utils/commit/5f2c70359e826014f5273579dcb237efcb243eb6
[14]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@2.0.3...@-xun/test-mock-exit@2.0.4
[15]: https://github.com/Xunnamius/test-utils/commit/29aea64b9bead509f8e64c12f7122c6fcac648df
[16]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@2.0.2...@-xun/test-mock-exit@2.0.3
[17]: https://github.com/Xunnamius/test-utils/commit/cd765c793940019ec60f99adfb78ec14f44477e2
[18]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@2.0.1...@-xun/test-mock-exit@2.0.2
[19]: https://github.com/Xunnamius/test-utils/commit/fc4ea1561ab0eb466639e76ecec9142647b7bdae
[20]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@2.0.0...@-xun/test-mock-exit@2.0.1
[21]: https://github.com/Xunnamius/test-utils/commit/c9249f4ac0db649fa05aa28798447a40ec9c9fad
[22]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/test-mock-exit@1.0.0
[23]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[24]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[25]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.6...@-xun/test-mock-exit@1.0.7
[26]: https://github.com/Xunnamius/test-utils/commit/0542d8d7d369bcd04859fd37099a2f3afad247d4
[27]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.5...@-xun/test-mock-exit@1.0.6
[28]: https://github.com/Xunnamius/test-utils/commit/efb81bfa8d064a55323cdda06d970e1322b41bc9
[29]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.4...@-xun/test-mock-exit@1.0.5
[30]: https://github.com/Xunnamius/test-utils/commit/d293d4fb8cc744ba92e7b59bed5922cf665dd22c
[31]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.3...@-xun/test-mock-exit@1.0.4
[32]: https://github.com/Xunnamius/test-utils/commit/6f689e10efcbac51bda6c5db872d36185d578002
[33]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.2...@-xun/test-mock-exit@1.0.3
[34]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[35]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.1...@-xun/test-mock-exit@1.0.2
[36]: https://github.com/Xunnamius/test-utils/commit/490b2391ca8d8d22bc076075033446778cf4b496
[37]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.0...@-xun/test-mock-exit@1.0.1
[38]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
[39]: https://github.com/Xunnamius/test-utils/commit/af4e75f9b436c758cd44a902f489c5640d8b2b47
