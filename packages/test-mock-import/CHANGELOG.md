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

### 🏗️ Patch @-xun/test-mock-import[@2.0.3][7] (2025-06-03)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([2e8e821][8])
- **package:** update jest peer dependency to prefer 30 first, then 30-beta second, then 30-alpha last ([fc4ea15][9])

<br />

### 🏗️ Patch @-xun/test-mock-import[@2.0.2][10] (2025-06-03)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([c7884a5][11])
- Use correct jest peer dependency ([c9249f4][12])

<br />

### 🏗️ Patch @-xun/test-mock-import[@2.0.1][13] (2025-06-01)

#### ⚙️ Build System

- **deps:** bump @-xun/fs from 1.0.0 to 2.0.0 ([9b54b9e][14])

<br />

## @-xun/test-mock-import[@1.0.0][15] (2025-02-04)

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][16])
- **packages:** split test/setup blob into distinct packages ([857d3ea][17])

<br />

### 🏗️ Patch @-xun/test-mock-import[@1.0.5][18] (2025-03-06)

#### ⚙️ Build System

- **deps:** bump @-xun/test-mock-exit from 1.0.4 to 1.0.5 ([61083f9][19])

<br />

### 🏗️ Patch @-xun/test-mock-import[@1.0.4][20] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][21])

<br />

### 🏗️ Patch @-xun/test-mock-import[@1.0.3][22] (2025-02-15)

#### 🪄 Fixes

- **packages/test-mock-import:** ensure consistent functionality in the presence of `default` exports and/or the `__esModule` property ([5766a58][23])

<br />

### 🏗️ Patch @-xun/test-mock-import[@1.0.2][24] (2025-02-07)

#### ⚙️ Build System

- **packages/test-mock-import:** add @-xun/fs dependency ([045966c][25])

<br />

### 🏗️ Patch @-xun/test-mock-import[@1.0.1][26] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][27])

#### ⚙️ Build System

- Add missing jest peer dependency ([af4e75f][28])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@1.0.5...@-xun/test-mock-import@2.0.0
[4]: https://github.com/Xunnamius/test-utils/commit/d2461a75ee5b33282e370eaab15c14895d83d5cb
[5]: https://github.com/Xunnamius/test-utils/commit/ffe4f9aaeb0bd2a14e2c5191c998bec7ab655f00
[6]: https://github.com/Xunnamius/test-utils/commit/cd28a9a0a06981edb7d180139ceb629dc4313139
[7]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@2.0.2...@-xun/test-mock-import@2.0.3
[8]: https://github.com/Xunnamius/test-utils/commit/2e8e82169fd8881879204a8c7ab08b59912a9fd3
[9]: https://github.com/Xunnamius/test-utils/commit/fc4ea1561ab0eb466639e76ecec9142647b7bdae
[10]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@2.0.1...@-xun/test-mock-import@2.0.2
[11]: https://github.com/Xunnamius/test-utils/commit/c7884a5a106c5a529b4ad3cd64e851c4903cc4db
[12]: https://github.com/Xunnamius/test-utils/commit/c9249f4ac0db649fa05aa28798447a40ec9c9fad
[13]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@2.0.0...@-xun/test-mock-import@2.0.1
[14]: https://github.com/Xunnamius/test-utils/commit/9b54b9e39c8a7490e69fa4e287d96291d2286bfd
[15]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/test-mock-import@1.0.0
[16]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[17]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[18]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@1.0.4...@-xun/test-mock-import@1.0.5
[19]: https://github.com/Xunnamius/test-utils/commit/61083f9919917ccccdfed2b8d52f34201a33ed20
[20]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@1.0.3...@-xun/test-mock-import@1.0.4
[21]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[22]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@1.0.2...@-xun/test-mock-import@1.0.3
[23]: https://github.com/Xunnamius/test-utils/commit/5766a587ab597e73a306f5f0ae4c7b7bd249633c
[24]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@1.0.1...@-xun/test-mock-import@1.0.2
[25]: https://github.com/Xunnamius/test-utils/commit/045966cd59e0c9bf1c888b45ed07319366458288
[26]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-import@1.0.0...@-xun/test-mock-import@1.0.1
[27]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
[28]: https://github.com/Xunnamius/test-utils/commit/af4e75f9b436c758cd44a902f489c5640d8b2b47
