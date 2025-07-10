# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/test-mock-argv[@2.0.0][3] (2025-05-30)

### 💥 BREAKING CHANGES 💥

- Minimum supported node version is now 20.18.0

### ⚙️ Build System

- **deps:** bump core-js from 3.41.0 to 3.42.0 ([c57a573][4])
- **deps:** bump type-fest from 4.37.0 to 4.41.0 ([430d208][5])
- **package:** drop support for node\@18 ([cd28a9a][6])

<br />

### 🏗️ Patch @-xun/test-mock-argv[@2.0.3][7] (2025-07-10)

#### ⚙️ Build System

- **deps:** bump core-js from 3.43.0 to 3.44.0 ([7dcbc3d][8])

<br />

### 🏗️ Patch @-xun/test-mock-argv[@2.0.2][9] (2025-06-14)

#### ⚙️ Build System

- **deps:** bump core-js from 3.42.0 to 3.43.0 ([9de5b7f][10])

<br />

### 🏗️ Patch @-xun/test-mock-argv[@2.0.1][11] (2025-06-03)

#### ⚙️ Build System

- **package:** update jest peer dependency to prefer 30 first, then 30-beta second, then 30-alpha last ([fc4ea15][12])

<br />

## @-xun/test-mock-argv[@1.0.0][13] (2025-02-04)

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][14])
- **packages:** split test/setup blob into distinct packages ([857d3ea][15])

<br />

### 🏗️ Patch @-xun/test-mock-argv[@1.0.7][16] (2025-03-19)

#### ⚙️ Build System

- **deps:** bump core-js from 3.40.0 to 3.41.0 ([b82d8bd][17])

<br />

### 🏗️ Patch @-xun/test-mock-argv[@1.0.6][18] (2025-03-06)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.36.0 to 4.37.0 ([c530cd2][19])

<br />

### 🏗️ Patch @-xun/test-mock-argv[@1.0.5][20] (2025-03-03)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([0286dad][21])

<br />

### 🏗️ Patch @-xun/test-mock-argv[@1.0.4][22] (2025-02-18)

#### ⚙️ Build System

- Make warning comments bold; refactor outdated typeof checks ([6f689e1][23])

<br />

### 🏗️ Patch @-xun/test-mock-argv[@1.0.3][24] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][25])

<br />

### 🏗️ Patch @-xun/test-mock-argv[@1.0.2][26] (2025-02-15)

#### 🪄 Fixes

- **packages/test-mock-argv:** make `factoryOptions` optional ([0fa1b07][27])

<br />

### 🏗️ Patch @-xun/test-mock-argv[@1.0.1][28] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][29])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-argv@1.0.7...@-xun/test-mock-argv@2.0.0
[4]: https://github.com/Xunnamius/test-utils/commit/c57a5737cc068abb8259597b89b5b429b1edd11e
[5]: https://github.com/Xunnamius/test-utils/commit/430d208e0ff3ab5d8752ecc1e72d3cf14f5a8252
[6]: https://github.com/Xunnamius/test-utils/commit/cd28a9a0a06981edb7d180139ceb629dc4313139
[7]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-argv@2.0.2...@-xun/test-mock-argv@2.0.3
[8]: https://github.com/Xunnamius/test-utils/commit/7dcbc3df6d58971752b69bab5906c4a8f9cef8c5
[9]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-argv@2.0.1...@-xun/test-mock-argv@2.0.2
[10]: https://github.com/Xunnamius/test-utils/commit/9de5b7f35d84e6ff40c46ca5b8d0a9f323c59e51
[11]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-argv@2.0.0...@-xun/test-mock-argv@2.0.1
[12]: https://github.com/Xunnamius/test-utils/commit/fc4ea1561ab0eb466639e76ecec9142647b7bdae
[13]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/test-mock-argv@1.0.0
[14]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[15]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[16]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-argv@1.0.6...@-xun/test-mock-argv@1.0.7
[17]: https://github.com/Xunnamius/test-utils/commit/b82d8bdf40863bf8405cba23566f44d76e7ea3b2
[18]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-argv@1.0.5...@-xun/test-mock-argv@1.0.6
[19]: https://github.com/Xunnamius/test-utils/commit/c530cd2587565c000dcf4efd29c8fa7b41f456fa
[20]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-argv@1.0.4...@-xun/test-mock-argv@1.0.5
[21]: https://github.com/Xunnamius/test-utils/commit/0286dad11ad40c10f9ed8ec68d858b0245f66bad
[22]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-argv@1.0.3...@-xun/test-mock-argv@1.0.4
[23]: https://github.com/Xunnamius/test-utils/commit/6f689e10efcbac51bda6c5db872d36185d578002
[24]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-argv@1.0.2...@-xun/test-mock-argv@1.0.3
[25]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[26]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-argv@1.0.1...@-xun/test-mock-argv@1.0.2
[27]: https://github.com/Xunnamius/test-utils/commit/0fa1b071f369dbe1d4bcd1896de0bdc00b84cfdd
[28]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-argv@1.0.0...@-xun/test-mock-argv@1.0.1
[29]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
