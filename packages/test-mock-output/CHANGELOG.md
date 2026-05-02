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

### 🏗️ Patch @-xun/test-mock-output[@2.0.7][7] (2026-05-02)

#### ⚙️ Build System

- **deps:** bump core-js from 3.45.1 to 3.49.0 ([4c7020c][8])
- **deps:** bump type-fest from 4.41.0 to 5.6.0 ([0c60942][9])

<br />

### 🏗️ Patch @-xun/test-mock-output[@2.0.6][10] (2025-09-01)

#### ⚙️ Build System

- **deps:** bump core-js from 3.44.0 to 3.45.1 ([c82d8c1][11])

<br />

### 🏗️ Patch @-xun/test-mock-output[@2.0.5][12] (2025-07-10)

#### ⚙️ Build System

- **deps:** bump core-js from 3.43.0 to 3.44.0 ([6cc748e][13])

<br />

### 🏗️ Patch @-xun/test-mock-output[@2.0.4][14] (2025-06-30)

#### ⚙️ Build System

- Remove dead jest versions from peer deps ([29aea64][15])

<br />

### 🏗️ Patch @-xun/test-mock-output[@2.0.3][16] (2025-06-14)

#### ⚙️ Build System

- **deps:** bump core-js from 3.42.0 to 3.43.0 ([a886796][17])

<br />

### 🏗️ Patch @-xun/test-mock-output[@2.0.2][18] (2025-06-03)

#### ⚙️ Build System

- **package:** update jest peer dependency to prefer 30 first, then 30-beta second, then 30-alpha last ([fc4ea15][19])

<br />

### 🏗️ Patch @-xun/test-mock-output[@2.0.1][20] (2025-06-03)

#### ⚙️ Build System

- Use correct jest peer dependency ([c9249f4][21])

<br />

## @-xun/test-mock-output[@1.1.0][22] (2025-02-18)

### ✨ Features

- **packages/test-mock-output:** export `MockedOutputSpies`; add support for capturing output from `node:console` ([d68ebf0][23])

### ⚙️ Build System

- Make warning comments bold; refactor outdated typeof checks ([6f689e1][24])
- **packages/test-mock-output:** add missing core-js dependency ([3333d12][25])

<br />

### 🏗️ Patch @-xun/test-mock-output[@1.1.3][26] (2025-03-19)

#### ⚙️ Build System

- **deps:** bump core-js from 3.40.0 to 3.41.0 ([bdf95d5][27])

<br />

### 🏗️ Patch @-xun/test-mock-output[@1.1.2][28] (2025-03-06)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.36.0 to 4.37.0 ([f3c2aa3][29])

<br />

### 🏗️ Patch @-xun/test-mock-output[@1.1.1][30] (2025-03-03)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([b8ceb8b][31])

<br />

## @-xun/test-mock-output[@1.0.0][32] (2025-02-04)

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][33])
- **packages:** split test/setup blob into distinct packages ([857d3ea][34])

<br />

### 🏗️ Patch @-xun/test-mock-output[@1.0.3][35] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][36])

<br />

### 🏗️ Patch @-xun/test-mock-output[@1.0.2][37] (2025-02-15)

#### 🪄 Fixes

- **packages/test-mock-output:** ensure `passthrough` actually passes through specified spies ([5e6752d][38])

<br />

### 🏗️ Patch @-xun/test-mock-output[@1.0.1][39] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][40])

#### ⚙️ Build System

- Add missing jest peer dependency ([af4e75f][41])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.1.3...@-xun/test-mock-output@2.0.0
[4]: https://github.com/Xunnamius/test-utils/commit/37d9bf27eb5d35642e3bd6568460041aedaecd00
[5]: https://github.com/Xunnamius/test-utils/commit/ff93050b6af97cfd3bbeae72d48b47a3396c400c
[6]: https://github.com/Xunnamius/test-utils/commit/cd28a9a0a06981edb7d180139ceb629dc4313139
[7]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@2.0.6...@-xun/test-mock-output@2.0.7
[8]: https://github.com/Xunnamius/test-utils/commit/4c7020c88b485ca6cb9e7a7e960cff9316a4615c
[9]: https://github.com/Xunnamius/test-utils/commit/0c60942e59ddf8799a7e0bc1cb44c6e612933aea
[10]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@2.0.5...@-xun/test-mock-output@2.0.6
[11]: https://github.com/Xunnamius/test-utils/commit/c82d8c13b508f8885327f515b79266e8d286bb62
[12]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@2.0.4...@-xun/test-mock-output@2.0.5
[13]: https://github.com/Xunnamius/test-utils/commit/6cc748e6585da9e128f412e1365f7a2b67c7053b
[14]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@2.0.3...@-xun/test-mock-output@2.0.4
[15]: https://github.com/Xunnamius/test-utils/commit/29aea64b9bead509f8e64c12f7122c6fcac648df
[16]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@2.0.2...@-xun/test-mock-output@2.0.3
[17]: https://github.com/Xunnamius/test-utils/commit/a886796d251b165a9666c5e877bd19827d40f257
[18]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@2.0.1...@-xun/test-mock-output@2.0.2
[19]: https://github.com/Xunnamius/test-utils/commit/fc4ea1561ab0eb466639e76ecec9142647b7bdae
[20]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@2.0.0...@-xun/test-mock-output@2.0.1
[21]: https://github.com/Xunnamius/test-utils/commit/c9249f4ac0db649fa05aa28798447a40ec9c9fad
[22]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.0.3...@-xun/test-mock-output@1.1.0
[23]: https://github.com/Xunnamius/test-utils/commit/d68ebf0d1c1d58d3345c900e07ca535752485c7e
[24]: https://github.com/Xunnamius/test-utils/commit/6f689e10efcbac51bda6c5db872d36185d578002
[25]: https://github.com/Xunnamius/test-utils/commit/3333d128f45f8a778ae6bf5f32aaf8d3090d7e19
[26]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.1.2...@-xun/test-mock-output@1.1.3
[27]: https://github.com/Xunnamius/test-utils/commit/bdf95d510c83373bf213fcd062f2ae7574c8d05b
[28]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.1.1...@-xun/test-mock-output@1.1.2
[29]: https://github.com/Xunnamius/test-utils/commit/f3c2aa3d45ab3abc2647670264fb41db52135e8c
[30]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.1.0...@-xun/test-mock-output@1.1.1
[31]: https://github.com/Xunnamius/test-utils/commit/b8ceb8bdffb91f71e9596cc5c9c98d0053d4acd8
[32]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/test-mock-output@1.0.0
[33]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[34]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[35]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.0.2...@-xun/test-mock-output@1.0.3
[36]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[37]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.0.1...@-xun/test-mock-output@1.0.2
[38]: https://github.com/Xunnamius/test-utils/commit/5e6752d3df07530b42d0df97ebef3e0865c62b7f
[39]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-output@1.0.0...@-xun/test-mock-output@1.0.1
[40]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
[41]: https://github.com/Xunnamius/test-utils/commit/af4e75f9b436c758cd44a902f489c5640d8b2b47
