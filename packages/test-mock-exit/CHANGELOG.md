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

### 🏗️ Patch @-xun/test-mock-exit[@2.0.7][7] (2026-05-02)

#### ⚙️ Build System

- **deps:** bump core-js from 3.45.1 to 3.49.0 ([a67c92d][8])
- **deps:** bump type-fest from 4.41.0 to 5.6.0 ([f70d10d][9])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@2.0.6][10] (2025-09-01)

#### ⚙️ Build System

- **deps:** bump core-js from 3.44.0 to 3.45.1 ([355c3b7][11])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@2.0.5][12] (2025-07-10)

#### ⚙️ Build System

- **deps:** bump @-xun/error from 1.1.4 to 1.1.6 ([2fb9523][13])
- **deps:** bump core-js from 3.43.0 to 3.44.0 ([ee41967][14])
- **package:** integrate @-xun/error dependency ([5efd292][15])
- **packages:** remove unused dependency ([5f2c703][16])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@2.0.4][17] (2025-06-30)

#### ⚙️ Build System

- Remove dead jest versions from peer deps ([29aea64][18])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@2.0.3][19] (2025-06-14)

#### ⚙️ Build System

- **deps:** bump core-js from 3.42.0 to 3.43.0 ([cd765c7][20])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@2.0.2][21] (2025-06-03)

#### ⚙️ Build System

- **package:** update jest peer dependency to prefer 30 first, then 30-beta second, then 30-alpha last ([fc4ea15][22])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@2.0.1][23] (2025-06-03)

#### ⚙️ Build System

- Use correct jest peer dependency ([c9249f4][24])

<br />

## @-xun/test-mock-exit[@1.0.0][25] (2025-02-04)

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][26])
- **packages:** split test/setup blob into distinct packages ([857d3ea][27])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.7][28] (2025-03-19)

#### ⚙️ Build System

- **deps:** bump core-js from 3.40.0 to 3.41.0 ([0542d8d][29])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.6][30] (2025-03-06)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.36.0 to 4.37.0 ([efb81bf][31])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.5][32] (2025-03-03)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([d293d4f][33])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.4][34] (2025-02-18)

#### ⚙️ Build System

- Make warning comments bold; refactor outdated typeof checks ([6f689e1][35])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.3][36] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][37])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.2][38] (2025-02-15)

#### 🪄 Fixes

- **packages/test-mock-exit:** throw and catch `MockedExitError` instances when `process.exit` is called ([490b239][39])

<br />

### 🏗️ Patch @-xun/test-mock-exit[@1.0.1][40] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][41])

#### ⚙️ Build System

- Add missing jest peer dependency ([af4e75f][42])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.7...@-xun/test-mock-exit@2.0.0
[4]: https://github.com/Xunnamius/test-utils/commit/86adfe5d59a20f8847bbc872e049bddde17dbfa0
[5]: https://github.com/Xunnamius/test-utils/commit/dbc8ed2114ee6bca9861aff75ba69dfcb3274d75
[6]: https://github.com/Xunnamius/test-utils/commit/cd28a9a0a06981edb7d180139ceb629dc4313139
[7]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@2.0.6...@-xun/test-mock-exit@2.0.7
[8]: https://github.com/Xunnamius/test-utils/commit/a67c92da52558c1065b759e94465ea99316d56d7
[9]: https://github.com/Xunnamius/test-utils/commit/f70d10d5410872ce5c749c257b64658d52470272
[10]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@2.0.5...@-xun/test-mock-exit@2.0.6
[11]: https://github.com/Xunnamius/test-utils/commit/355c3b70262ee6325e60d5ad46f9c9e9acd077c5
[12]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@2.0.4...@-xun/test-mock-exit@2.0.5
[13]: https://github.com/Xunnamius/test-utils/commit/2fb9523ec4a891821a951fb6f0b83780735c7677
[14]: https://github.com/Xunnamius/test-utils/commit/ee4196777ad5367a9d360bd3c0783d42cea631d1
[15]: https://github.com/Xunnamius/test-utils/commit/5efd2925becb718fceed31da7a02578c98d681cb
[16]: https://github.com/Xunnamius/test-utils/commit/5f2c70359e826014f5273579dcb237efcb243eb6
[17]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@2.0.3...@-xun/test-mock-exit@2.0.4
[18]: https://github.com/Xunnamius/test-utils/commit/29aea64b9bead509f8e64c12f7122c6fcac648df
[19]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@2.0.2...@-xun/test-mock-exit@2.0.3
[20]: https://github.com/Xunnamius/test-utils/commit/cd765c793940019ec60f99adfb78ec14f44477e2
[21]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@2.0.1...@-xun/test-mock-exit@2.0.2
[22]: https://github.com/Xunnamius/test-utils/commit/fc4ea1561ab0eb466639e76ecec9142647b7bdae
[23]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@2.0.0...@-xun/test-mock-exit@2.0.1
[24]: https://github.com/Xunnamius/test-utils/commit/c9249f4ac0db649fa05aa28798447a40ec9c9fad
[25]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/test-mock-exit@1.0.0
[26]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[27]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[28]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.6...@-xun/test-mock-exit@1.0.7
[29]: https://github.com/Xunnamius/test-utils/commit/0542d8d7d369bcd04859fd37099a2f3afad247d4
[30]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.5...@-xun/test-mock-exit@1.0.6
[31]: https://github.com/Xunnamius/test-utils/commit/efb81bfa8d064a55323cdda06d970e1322b41bc9
[32]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.4...@-xun/test-mock-exit@1.0.5
[33]: https://github.com/Xunnamius/test-utils/commit/d293d4fb8cc744ba92e7b59bed5922cf665dd22c
[34]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.3...@-xun/test-mock-exit@1.0.4
[35]: https://github.com/Xunnamius/test-utils/commit/6f689e10efcbac51bda6c5db872d36185d578002
[36]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.2...@-xun/test-mock-exit@1.0.3
[37]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[38]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.1...@-xun/test-mock-exit@1.0.2
[39]: https://github.com/Xunnamius/test-utils/commit/490b2391ca8d8d22bc076075033446778cf4b496
[40]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-exit@1.0.0...@-xun/test-mock-exit@1.0.1
[41]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
[42]: https://github.com/Xunnamius/test-utils/commit/af4e75f9b436c758cd44a902f489c5640d8b2b47
