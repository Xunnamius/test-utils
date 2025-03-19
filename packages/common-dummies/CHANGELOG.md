# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/common-dummies[@1.3.0][3] (2025-03-13)

### ✨ Features

- **packages/common-dummies:** add new dummy "good-hybridrepo-complex-ignore" ([25cc06e][4])

### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 1.0.4 to 1.0.5 ([24db0cb][5])
- **deps:** bump @-xun/project-types from 1.0.3 to 1.0.4 ([c16fd38][6])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.3.1][7] (2025-03-19)

#### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 1.0.5 to 1.2.0 ([edc24e3][8])
- **deps:** bump core-js from 3.40.0 to 3.41.0 ([32ecd17][9])

<br />

## @-xun/common-dummies[@1.2.0][10] (2025-02-24)

### ✨ Features

- **packages/common-dummies:** replace `patchReadXPackageJsonAtRoot` with the more generic `patchJsonObjectReaders` ([fcb5784][11])

### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 1.0.2 to 1.0.3 ([df83dd3][12])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.2.2][13] (2025-03-06)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.36.0 to 4.37.0 ([621739c][14])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.2.1][15] (2025-03-03)

#### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 1.0.3 to 1.0.4 ([bb059a0][16])
- **deps:** bump @-xun/project-types from 1.0.2 to 1.0.3 ([dd24dd9][17])
- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([d1f07d5][18])

<br />

## @-xun/common-dummies[@1.1.0][19] (2025-02-24)

### ✨ Features

- **packages/common-dummies:** add new dummy repository "bad-polyrepo-empty-package-json" ([9233370][20])

### 🪄 Fixes

- **packages/common-dummies:** add missing names to dummy polyrepo package.json files ([69c8193][21])

<br />

## @-xun/common-dummies[@1.0.0][22] (2025-02-04)

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][23])
- **packages/common-dummies:** add package entry points ([8ae214d][24])
- **packages/common-dummies:** ignore dummies in local lint configuration ([bf9dad1][25])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.0.4][26] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][27])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.0.3][28] (2025-02-15)

#### 🪄 Fixes

- **packages/common-dummies:** ensure `patchReadXPackageJsonAtRoot` functions as described in documentation ([20fe7d6][29])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.0.2][30] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** release `getDummyPackage` fix ([5ff40c7][31])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.0.1][32] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][33])

#### ⚙️ Build System

- Add missing jest peer dependency ([af4e75f][34])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.2.2...@-xun/common-dummies@1.3.0
[4]: https://github.com/Xunnamius/test-utils/commit/25cc06edbd1eb70099f3eebf1d0070499362b637
[5]: https://github.com/Xunnamius/test-utils/commit/24db0cb7e1f74f9232cda882564401d9a028c8b1
[6]: https://github.com/Xunnamius/test-utils/commit/c16fd38110d0f29b014ddbd0ce2df41e2193280f
[7]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.3.0...@-xun/common-dummies@1.3.1
[8]: https://github.com/Xunnamius/test-utils/commit/edc24e3eab43cb9e4e4e1bcc1035a690581a794c
[9]: https://github.com/Xunnamius/test-utils/commit/32ecd177b85561a8b56d5470a190edf96851138c
[10]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.1.0...@-xun/common-dummies@1.2.0
[11]: https://github.com/Xunnamius/test-utils/commit/fcb57846bd155af8f31af388dca019cd245ef5db
[12]: https://github.com/Xunnamius/test-utils/commit/df83dd30f9e67352f8ab16eb2fce0e37c0271bfc
[13]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.2.1...@-xun/common-dummies@1.2.2
[14]: https://github.com/Xunnamius/test-utils/commit/621739c50f825156bde3af5db515a939050a8857
[15]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.2.0...@-xun/common-dummies@1.2.1
[16]: https://github.com/Xunnamius/test-utils/commit/bb059a0654fefa93a2c83bafb1c1981ccb4a1745
[17]: https://github.com/Xunnamius/test-utils/commit/dd24dd93cb0e3b3cfc3fc54c21ab921b4fc12c1d
[18]: https://github.com/Xunnamius/test-utils/commit/d1f07d525045ab6d400f22651f3a92577b41a24b
[19]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.4...@-xun/common-dummies@1.1.0
[20]: https://github.com/Xunnamius/test-utils/commit/923337024cbc623bc2fa0a5a01535854a589bd24
[21]: https://github.com/Xunnamius/test-utils/commit/69c8193aa5c89489bde2b1fe45ecd3ae64694cb3
[22]: https://github.com/Xunnamius/test-utils/compare/8ae214d3b2af53c3db3a28f45d32879c57e7abed...@-xun/common-dummies@1.0.0
[23]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[24]: https://github.com/Xunnamius/test-utils/commit/8ae214d3b2af53c3db3a28f45d32879c57e7abed
[25]: https://github.com/Xunnamius/test-utils/commit/bf9dad1dc32da28cbc1e037209c9470095d7efa6
[26]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.3...@-xun/common-dummies@1.0.4
[27]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[28]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.2...@-xun/common-dummies@1.0.3
[29]: https://github.com/Xunnamius/test-utils/commit/20fe7d62494fb77ea173fac80554b55d46ebc25a
[30]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.1...@-xun/common-dummies@1.0.2
[31]: https://github.com/Xunnamius/test-utils/commit/5ff40c77a98ed0a1d0df44772fe12318f1efb439
[32]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.0...@-xun/common-dummies@1.0.1
[33]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
[34]: https://github.com/Xunnamius/test-utils/commit/af4e75f9b436c758cd44a902f489c5640d8b2b47
