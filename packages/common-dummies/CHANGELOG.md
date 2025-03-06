# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/common-dummies[@1.2.0][3] (2025-02-24)

### ✨ Features

- **packages/common-dummies:** replace `patchReadXPackageJsonAtRoot` with the more generic `patchJsonObjectReaders` ([fcb5784][4])

### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 1.0.2 to 1.0.3 ([df83dd3][5])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.2.2][6] (2025-03-06)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.36.0 to 4.37.0 ([621739c][7])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.2.1][8] (2025-03-03)

#### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 1.0.3 to 1.0.4 ([bb059a0][9])
- **deps:** bump @-xun/project-types from 1.0.2 to 1.0.3 ([dd24dd9][10])
- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([d1f07d5][11])

<br />

## @-xun/common-dummies[@1.1.0][12] (2025-02-24)

### ✨ Features

- **packages/common-dummies:** add new dummy repository "bad-polyrepo-empty-package-json" ([9233370][13])

### 🪄 Fixes

- **packages/common-dummies:** add missing names to dummy polyrepo package.json files ([69c8193][14])

<br />

## @-xun/common-dummies[@1.0.0][15] (2025-02-04)

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][16])
- **packages/common-dummies:** add package entry points ([8ae214d][17])
- **packages/common-dummies:** ignore dummies in local lint configuration ([bf9dad1][18])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.0.4][19] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][20])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.0.3][21] (2025-02-15)

#### 🪄 Fixes

- **packages/common-dummies:** ensure `patchReadXPackageJsonAtRoot` functions as described in documentation ([20fe7d6][22])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.0.2][23] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** release `getDummyPackage` fix ([5ff40c7][24])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.0.1][25] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][26])

#### ⚙️ Build System

- Add missing jest peer dependency ([af4e75f][27])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.1.0...@-xun/common-dummies@1.2.0
[4]: https://github.com/Xunnamius/test-utils/commit/fcb57846bd155af8f31af388dca019cd245ef5db
[5]: https://github.com/Xunnamius/test-utils/commit/df83dd30f9e67352f8ab16eb2fce0e37c0271bfc
[6]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.2.1...@-xun/common-dummies@1.2.2
[7]: https://github.com/Xunnamius/test-utils/commit/621739c50f825156bde3af5db515a939050a8857
[8]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.2.0...@-xun/common-dummies@1.2.1
[9]: https://github.com/Xunnamius/test-utils/commit/bb059a0654fefa93a2c83bafb1c1981ccb4a1745
[10]: https://github.com/Xunnamius/test-utils/commit/dd24dd93cb0e3b3cfc3fc54c21ab921b4fc12c1d
[11]: https://github.com/Xunnamius/test-utils/commit/d1f07d525045ab6d400f22651f3a92577b41a24b
[12]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.4...@-xun/common-dummies@1.1.0
[13]: https://github.com/Xunnamius/test-utils/commit/923337024cbc623bc2fa0a5a01535854a589bd24
[14]: https://github.com/Xunnamius/test-utils/commit/69c8193aa5c89489bde2b1fe45ecd3ae64694cb3
[15]: https://github.com/Xunnamius/test-utils/compare/8ae214d3b2af53c3db3a28f45d32879c57e7abed...@-xun/common-dummies@1.0.0
[16]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[17]: https://github.com/Xunnamius/test-utils/commit/8ae214d3b2af53c3db3a28f45d32879c57e7abed
[18]: https://github.com/Xunnamius/test-utils/commit/bf9dad1dc32da28cbc1e037209c9470095d7efa6
[19]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.3...@-xun/common-dummies@1.0.4
[20]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[21]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.2...@-xun/common-dummies@1.0.3
[22]: https://github.com/Xunnamius/test-utils/commit/20fe7d62494fb77ea173fac80554b55d46ebc25a
[23]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.1...@-xun/common-dummies@1.0.2
[24]: https://github.com/Xunnamius/test-utils/commit/5ff40c77a98ed0a1d0df44772fe12318f1efb439
[25]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.0...@-xun/common-dummies@1.0.1
[26]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
[27]: https://github.com/Xunnamius/test-utils/commit/af4e75f9b436c758cd44a902f489c5640d8b2b47
