# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/test-mock-output[@2.0.0][3] (2025-05-30)

### 💥 BREAKING CHANGES 💥

- Minimum supported node version is now 20.18.0

### ⚙️ Build System

- **deps:** bump core-js from 3.41.0 to 3.42.0 ([37d9bf2][4])
- **deps:** bump type-fest from 4.37.0 to 4.41.0 ([ff93050][5])
- **package:** drop support for node\@18 ([cd28a9a][6])

<br />

### 🏗️ Patch @-xun/test-mock-output[@2.0.5][7] (2025-07-10)

#### ⚙️ Build System

- **deps:** bump core-js from 3.43.0 to 3.44.0 ([6cc748e][8])

<br />

### 🏗️ Patch @-xun/test-mock-output[@2.0.4][9] (2025-06-30)

#### ⚙️ Build System

- Remove dead jest versions from peer deps ([29aea64][10])

<br />

### 🏗️ Patch @-xun/test-mock-output[@2.0.3][11] (2025-06-14)

#### ⚙️ Build System

- **deps:** bump core-js from 3.42.0 to 3.43.0 ([a886796][12])

<br />

### 🏗️ Patch @-xun/test-mock-output[@2.0.2][13] (2025-06-03)

#### ⚙️ Build System

- **package:** update jest peer dependency to prefer 30 first, then 30-beta second, then 30-alpha last ([fc4ea15][14])

<br />

### 🏗️ Patch @-xun/test-mock-output[@2.0.1][15] (2025-06-03)

#### ⚙️ Build System

- Use correct jest peer dependency ([c9249f4][16])

<br />

## @-xun/test-mock-output[@1.1.0][17] (2025-02-18)

### ✨ Features

- **packages/test-mock-output:** export `MockedOutputSpies`; add support for capturing output from `node:console` ([d68ebf0][18])

### ⚙️ Build System

- Make warning comments bold; refactor outdated typeof checks ([6f689e1][19])
- **packages/test-mock-output:** add missing core-js dependency ([3333d12][20])

<br />

### 🏗️ Patch @-xun/test-mock-output[@1.1.3][21] (2025-03-19)

#### ⚙️ Build System

- **deps:** bump core-js from 3.40.0 to 3.41.0 ([bdf95d5][22])

<br />

### 🏗️ Patch @-xun/test-mock-output[@1.1.2][23] (2025-03-06)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.36.0 to 4.37.0 ([f3c2aa3][24])

<br />

### 🏗️ Patch @-xun/test-mock-output[@1.1.1][25] (2025-03-03)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([b8ceb8b][26])

<br />

## @-xun/test-mock-output[@1.0.0][27] (2025-02-04)

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][28])
- **packages:** split test/setup blob into distinct packages ([857d3ea][29])

<br />

### 🏗️ Patch @-xun/test-mock-output[@1.0.3][30] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][31])

<br />

### 🏗️ Patch @-xun/test-mock-output[@1.0.2][32] (2025-02-15)

#### 🪄 Fixes

- **packages/test-mock-output:** ensure `passthrough` actually passes through specified spies ([5e6752d][33])

<br />

### 🏗️ Patch @-xun/test-mock-output[@1.0.1][34] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][35])

#### ⚙️ Build System

- Add missing jest peer dependency ([af4e75f][36])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.1.3...@-xun/test-mock-output@2.0.0
[4]: https://github.com/Xunnamius/test-utils/commit/37d9bf27eb5d35642e3bd6568460041aedaecd00
[5]: https://github.com/Xunnamius/test-utils/commit/ff93050b6af97cfd3bbeae72d48b47a3396c400c
[6]: https://github.com/Xunnamius/test-utils/commit/cd28a9a0a06981edb7d180139ceb629dc4313139
[7]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@2.0.4...@-xun/test-mock-output@2.0.5
[8]: https://github.com/Xunnamius/test-utils/commit/6cc748e6585da9e128f412e1365f7a2b67c7053b
[9]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@2.0.3...@-xun/test-mock-output@2.0.4
[10]: https://github.com/Xunnamius/test-utils/commit/29aea64b9bead509f8e64c12f7122c6fcac648df
[11]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@2.0.2...@-xun/test-mock-output@2.0.3
[12]: https://github.com/Xunnamius/test-utils/commit/a886796d251b165a9666c5e877bd19827d40f257
[13]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@2.0.1...@-xun/test-mock-output@2.0.2
[14]: https://github.com/Xunnamius/test-utils/commit/fc4ea1561ab0eb466639e76ecec9142647b7bdae
[15]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@2.0.0...@-xun/test-mock-output@2.0.1
[16]: https://github.com/Xunnamius/test-utils/commit/c9249f4ac0db649fa05aa28798447a40ec9c9fad
[17]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.0.3...@-xun/test-mock-output@1.1.0
[18]: https://github.com/Xunnamius/test-utils/commit/d68ebf0d1c1d58d3345c900e07ca535752485c7e
[19]: https://github.com/Xunnamius/test-utils/commit/6f689e10efcbac51bda6c5db872d36185d578002
[20]: https://github.com/Xunnamius/test-utils/commit/3333d128f45f8a778ae6bf5f32aaf8d3090d7e19
[21]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.1.2...@-xun/test-mock-output@1.1.3
[22]: https://github.com/Xunnamius/test-utils/commit/bdf95d510c83373bf213fcd062f2ae7574c8d05b
[23]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.1.1...@-xun/test-mock-output@1.1.2
[24]: https://github.com/Xunnamius/test-utils/commit/f3c2aa3d45ab3abc2647670264fb41db52135e8c
[25]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.1.0...@-xun/test-mock-output@1.1.1
[26]: https://github.com/Xunnamius/test-utils/commit/b8ceb8bdffb91f71e9596cc5c9c98d0053d4acd8
[27]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/test-mock-output@1.0.0
[28]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[29]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[30]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.0.2...@-xun/test-mock-output@1.0.3
[31]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[32]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.0.1...@-xun/test-mock-output@1.0.2
[33]: https://github.com/Xunnamius/test-utils/commit/5e6752d3df07530b42d0df97ebef3e0865c62b7f
[34]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.0.0...@-xun/test-mock-output@1.0.1
[35]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
[36]: https://github.com/Xunnamius/test-utils/commit/af4e75f9b436c758cd44a902f489c5640d8b2b47
