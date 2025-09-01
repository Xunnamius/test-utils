# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/test-mock-import[@2.0.0][3] (2025-05-30)

### 💥 BREAKING CHANGES 💥

- Minimum supported node version is now 20.18.0

### ⚙️ Build System

- **deps:** bump @-xun/test-mock-exit from 1.0.6 to 1.0.7 ([d2461a7][4])
- **deps:** bump internal monorepo interdependencies to latest versions ([ffe4f9a][5])
- **package:** drop support for node\@18 ([cd28a9a][6])

<br />

### 🏗️ Patch @-xun/test-mock-import[@2.0.8][7] (2025-09-01)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([b24adc3][8])
- **deps:** bump rejoinder from 2.0.1 to 2.0.2 ([29d7f73][9])
- **deps:** bump rejoinder from 2.0.2 to 2.1.0 ([2587fd0][10])

<br />

### 🏗️ Patch @-xun/test-mock-import[@2.0.7][11] (2025-07-10)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([5fc6b9b][12])

<br />

### 🏗️ Patch @-xun/test-mock-import[@2.0.6][13] (2025-06-30)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([76a23c4][14])
- Remove dead jest versions from peer deps ([29aea64][15])

<br />

### 🏗️ Patch @-xun/test-mock-import[@2.0.5][16] (2025-06-14)

#### ⚙️ Build System

- **deps:** bump rejoinder from 2.0.0 to 2.0.1 ([5d09a6b][17])

<br />

### 🏗️ Patch @-xun/test-mock-import[@2.0.4][18] (2025-06-14)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([5840a6e][19])
- **deps:** bump rejoinder from 1.2.5 to 2.0.0 ([2d69599][20])

<br />

### 🏗️ Patch @-xun/test-mock-import[@2.0.3][21] (2025-06-03)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([2e8e821][22])
- **package:** update jest peer dependency to prefer 30 first, then 30-beta second, then 30-alpha last ([fc4ea15][23])

<br />

### 🏗️ Patch @-xun/test-mock-import[@2.0.2][24] (2025-06-03)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([c7884a5][25])
- Use correct jest peer dependency ([c9249f4][26])

<br />

### 🏗️ Patch @-xun/test-mock-import[@2.0.1][27] (2025-06-01)

#### ⚙️ Build System

- **deps:** bump @-xun/fs from 1.0.0 to 2.0.0 ([9b54b9e][28])

<br />

## @-xun/test-mock-import[@1.0.0][29] (2025-02-04)

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][30])
- **packages:** split test/setup blob into distinct packages ([857d3ea][31])

<br />

### 🏗️ Patch @-xun/test-mock-import[@1.0.5][32] (2025-03-06)

#### ⚙️ Build System

- **deps:** bump @-xun/test-mock-exit from 1.0.4 to 1.0.5 ([61083f9][33])

<br />

### 🏗️ Patch @-xun/test-mock-import[@1.0.4][34] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][35])

<br />

### 🏗️ Patch @-xun/test-mock-import[@1.0.3][36] (2025-02-15)

#### 🪄 Fixes

- **packages/test-mock-import:** ensure consistent functionality in the presence of `default` exports and/or the `__esModule` property ([5766a58][37])

<br />

### 🏗️ Patch @-xun/test-mock-import[@1.0.2][38] (2025-02-07)

#### ⚙️ Build System

- **packages/test-mock-import:** add @-xun/fs dependency ([045966c][39])

<br />

### 🏗️ Patch @-xun/test-mock-import[@1.0.1][40] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][41])

#### ⚙️ Build System

- Add missing jest peer dependency ([af4e75f][42])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@1.0.5...@-xun/test-mock-import@2.0.0
[4]: https://github.com/Xunnamius/test-utils/commit/d2461a75ee5b33282e370eaab15c14895d83d5cb
[5]: https://github.com/Xunnamius/test-utils/commit/ffe4f9aaeb0bd2a14e2c5191c998bec7ab655f00
[6]: https://github.com/Xunnamius/test-utils/commit/cd28a9a0a06981edb7d180139ceb629dc4313139
[7]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@2.0.7...@-xun/test-mock-import@2.0.8
[8]: https://github.com/Xunnamius/test-utils/commit/b24adc3ab12611701e55ba0482c66939a4d2d711
[9]: https://github.com/Xunnamius/test-utils/commit/29d7f737d41ded8f98e95050e5180976df827573
[10]: https://github.com/Xunnamius/test-utils/commit/2587fd063091153fa99427554208391e9d67fd7d
[11]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@2.0.6...@-xun/test-mock-import@2.0.7
[12]: https://github.com/Xunnamius/test-utils/commit/5fc6b9b3c00c700bebc5be5e21543942de37bfc6
[13]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@2.0.5...@-xun/test-mock-import@2.0.6
[14]: https://github.com/Xunnamius/test-utils/commit/76a23c4ed2476bf5a4a889829525d3c449f3a837
[15]: https://github.com/Xunnamius/test-utils/commit/29aea64b9bead509f8e64c12f7122c6fcac648df
[16]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@2.0.4...@-xun/test-mock-import@2.0.5
[17]: https://github.com/Xunnamius/test-utils/commit/5d09a6b180387734b02c92a5fc0f059d1c214f0a
[18]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@2.0.3...@-xun/test-mock-import@2.0.4
[19]: https://github.com/Xunnamius/test-utils/commit/5840a6e478b76cead946e42dd42c52c81e91c03b
[20]: https://github.com/Xunnamius/test-utils/commit/2d6959979ffcd142d74b53b060ad4b299eab5ec5
[21]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@2.0.2...@-xun/test-mock-import@2.0.3
[22]: https://github.com/Xunnamius/test-utils/commit/2e8e82169fd8881879204a8c7ab08b59912a9fd3
[23]: https://github.com/Xunnamius/test-utils/commit/fc4ea1561ab0eb466639e76ecec9142647b7bdae
[24]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@2.0.1...@-xun/test-mock-import@2.0.2
[25]: https://github.com/Xunnamius/test-utils/commit/c7884a5a106c5a529b4ad3cd64e851c4903cc4db
[26]: https://github.com/Xunnamius/test-utils/commit/c9249f4ac0db649fa05aa28798447a40ec9c9fad
[27]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@2.0.0...@-xun/test-mock-import@2.0.1
[28]: https://github.com/Xunnamius/test-utils/commit/9b54b9e39c8a7490e69fa4e287d96291d2286bfd
[29]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/test-mock-import@1.0.0
[30]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[31]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[32]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@1.0.4...@-xun/test-mock-import@1.0.5
[33]: https://github.com/Xunnamius/test-utils/commit/61083f9919917ccccdfed2b8d52f34201a33ed20
[34]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@1.0.3...@-xun/test-mock-import@1.0.4
[35]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[36]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@1.0.2...@-xun/test-mock-import@1.0.3
[37]: https://github.com/Xunnamius/test-utils/commit/5766a587ab597e73a306f5f0ae4c7b7bd249633c
[38]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@1.0.1...@-xun/test-mock-import@1.0.2
[39]: https://github.com/Xunnamius/test-utils/commit/045966cd59e0c9bf1c888b45ed07319366458288
[40]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@1.0.0...@-xun/test-mock-import@1.0.1
[41]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
[42]: https://github.com/Xunnamius/test-utils/commit/af4e75f9b436c758cd44a902f489c5640d8b2b47
