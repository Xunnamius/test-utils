# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/common-dummies[@2.0.0][3] (2025-05-30)

### 💥 BREAKING CHANGES 💥

- Minimum supported node version is now 20.18.0

### 🪄 Fixes

- **packages/common-dummies:** use correct import syntax for dummy testverse imports ([420c8b6][4])

### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 1.2.0 to 2.0.0 ([71d70a9][5])
- **deps:** bump @-xun/project-types from 1.0.4 to 2.0.0 ([a700857][6])
- **deps:** bump core-js from 3.41.0 to 3.42.0 ([f4f8b29][7])
- **deps:** bump type-fest from 4.37.0 to 4.41.0 ([b451a3b][8])
- **package:** drop support for node\@18 ([cd28a9a][9])

<br />

### 🏗️ Patch @-xun/common-dummies[@2.0.6][10] (2025-06-14)

#### 🪄 Fixes

- **packages/common-dummies:** repair dummies that were damaged from misconfigured .gitignore ([22581cf][11])

<br />

### 🏗️ Patch @-xun/common-dummies[@2.0.5][12] (2025-06-14)

#### ⚙️ Build System

- **deps:** bump core-js from 3.42.0 to 3.43.0 ([58d7b9c][13])
- **deps:** bump rejoinder from 1.2.5 to 2.0.0 ([f36354b][14])

<br />

### 🏗️ Patch @-xun/common-dummies[@2.0.4][15] (2025-06-03)

#### ⚙️ Build System

- **package:** update jest peer dependency to prefer 30 first, then 30-beta second, then 30-alpha last ([fc4ea15][16])

<br />

### 🏗️ Patch @-xun/common-dummies[@2.0.3][17] (2025-06-03)

#### ⚙️ Build System

- Use correct jest peer dependency ([c9249f4][18])

<br />

### 🏗️ Patch @-xun/common-dummies[@2.0.2][19] (2025-06-01)

#### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 2.0.0 to 2.0.1 ([c90c163][20])
- **deps:** bump @-xun/project-types from 2.0.0 to 2.0.1 ([5143d9f][21])

<br />

### 🏗️ Patch @-xun/common-dummies[@2.0.1][22] (2025-06-01)

#### ⚙️ Build System

- **deps:** bump @-xun/fs from 1.0.0 to 2.0.0 ([bf93df8][23])

<br />

## @-xun/common-dummies[@1.3.0][24] (2025-03-13)

### ✨ Features

- **packages/common-dummies:** add new dummy "good-hybridrepo-complex-ignore" ([25cc06e][25])

### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 1.0.4 to 1.0.5 ([24db0cb][26])
- **deps:** bump @-xun/project-types from 1.0.3 to 1.0.4 ([c16fd38][27])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.3.1][28] (2025-03-19)

#### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 1.0.5 to 1.2.0 ([edc24e3][29])
- **deps:** bump core-js from 3.40.0 to 3.41.0 ([32ecd17][30])

<br />

## @-xun/common-dummies[@1.2.0][31] (2025-02-24)

### ✨ Features

- **packages/common-dummies:** replace `patchReadXPackageJsonAtRoot` with the more generic `patchJsonObjectReaders` ([fcb5784][32])

### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 1.0.2 to 1.0.3 ([df83dd3][33])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.2.2][34] (2025-03-06)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.36.0 to 4.37.0 ([621739c][35])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.2.1][36] (2025-03-03)

#### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 1.0.3 to 1.0.4 ([bb059a0][37])
- **deps:** bump @-xun/project-types from 1.0.2 to 1.0.3 ([dd24dd9][38])
- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([d1f07d5][39])

<br />

## @-xun/common-dummies[@1.1.0][40] (2025-02-24)

### ✨ Features

- **packages/common-dummies:** add new dummy repository "bad-polyrepo-empty-package-json" ([9233370][41])

### 🪄 Fixes

- **packages/common-dummies:** add missing names to dummy polyrepo package.json files ([69c8193][42])

<br />

## @-xun/common-dummies[@1.0.0][43] (2025-02-04)

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][44])
- **packages/common-dummies:** add package entry points ([8ae214d][45])
- **packages/common-dummies:** ignore dummies in local lint configuration ([bf9dad1][46])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.0.4][47] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][48])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.0.3][49] (2025-02-15)

#### 🪄 Fixes

- **packages/common-dummies:** ensure `patchReadXPackageJsonAtRoot` functions as described in documentation ([20fe7d6][50])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.0.2][51] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** release `getDummyPackage` fix ([5ff40c7][52])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.0.1][53] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][54])

#### ⚙️ Build System

- Add missing jest peer dependency ([af4e75f][55])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.3.1...@-xun/common-dummies@2.0.0
[4]: https://github.com/Xunnamius/test-utils/commit/420c8b62b0a0191fac7b4cbbb76caa2e57a70884
[5]: https://github.com/Xunnamius/test-utils/commit/71d70a9f31e6f9820e1826b5abab3bb4f60e5494
[6]: https://github.com/Xunnamius/test-utils/commit/a700857153ed055fe7a6b62808bdd14c767b6634
[7]: https://github.com/Xunnamius/test-utils/commit/f4f8b29d08aa7a40559b04464210a7acf01e16a8
[8]: https://github.com/Xunnamius/test-utils/commit/b451a3b3b207afe01c0f76f64777e94b4742dec0
[9]: https://github.com/Xunnamius/test-utils/commit/cd28a9a0a06981edb7d180139ceb629dc4313139
[10]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@2.0.5...@-xun/common-dummies@2.0.6
[11]: https://github.com/Xunnamius/test-utils/commit/22581cfc5e5d8631e4f7db402aefa2e14fa59432
[12]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@2.0.4...@-xun/common-dummies@2.0.5
[13]: https://github.com/Xunnamius/test-utils/commit/58d7b9c1cd40764769daf6e224284d1aab179af6
[14]: https://github.com/Xunnamius/test-utils/commit/f36354b040f3f0af5aef6d2549e5eb841502e588
[15]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@2.0.3...@-xun/common-dummies@2.0.4
[16]: https://github.com/Xunnamius/test-utils/commit/fc4ea1561ab0eb466639e76ecec9142647b7bdae
[17]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@2.0.2...@-xun/common-dummies@2.0.3
[18]: https://github.com/Xunnamius/test-utils/commit/c9249f4ac0db649fa05aa28798447a40ec9c9fad
[19]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@2.0.1...@-xun/common-dummies@2.0.2
[20]: https://github.com/Xunnamius/test-utils/commit/c90c163d7a06e67db091dea2a7fdc5ec0c37ad4e
[21]: https://github.com/Xunnamius/test-utils/commit/5143d9ff2db9e8c1eaa8608c6d67c7185e4a6d20
[22]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@2.0.0...@-xun/common-dummies@2.0.1
[23]: https://github.com/Xunnamius/test-utils/commit/bf93df8950410ad98e847255911683e86fb081ff
[24]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.2.2...@-xun/common-dummies@1.3.0
[25]: https://github.com/Xunnamius/test-utils/commit/25cc06edbd1eb70099f3eebf1d0070499362b637
[26]: https://github.com/Xunnamius/test-utils/commit/24db0cb7e1f74f9232cda882564401d9a028c8b1
[27]: https://github.com/Xunnamius/test-utils/commit/c16fd38110d0f29b014ddbd0ce2df41e2193280f
[28]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.3.0...@-xun/common-dummies@1.3.1
[29]: https://github.com/Xunnamius/test-utils/commit/edc24e3eab43cb9e4e4e1bcc1035a690581a794c
[30]: https://github.com/Xunnamius/test-utils/commit/32ecd177b85561a8b56d5470a190edf96851138c
[31]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.1.0...@-xun/common-dummies@1.2.0
[32]: https://github.com/Xunnamius/test-utils/commit/fcb57846bd155af8f31af388dca019cd245ef5db
[33]: https://github.com/Xunnamius/test-utils/commit/df83dd30f9e67352f8ab16eb2fce0e37c0271bfc
[34]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.2.1...@-xun/common-dummies@1.2.2
[35]: https://github.com/Xunnamius/test-utils/commit/621739c50f825156bde3af5db515a939050a8857
[36]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.2.0...@-xun/common-dummies@1.2.1
[37]: https://github.com/Xunnamius/test-utils/commit/bb059a0654fefa93a2c83bafb1c1981ccb4a1745
[38]: https://github.com/Xunnamius/test-utils/commit/dd24dd93cb0e3b3cfc3fc54c21ab921b4fc12c1d
[39]: https://github.com/Xunnamius/test-utils/commit/d1f07d525045ab6d400f22651f3a92577b41a24b
[40]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.4...@-xun/common-dummies@1.1.0
[41]: https://github.com/Xunnamius/test-utils/commit/923337024cbc623bc2fa0a5a01535854a589bd24
[42]: https://github.com/Xunnamius/test-utils/commit/69c8193aa5c89489bde2b1fe45ecd3ae64694cb3
[43]: https://github.com/Xunnamius/test-utils/compare/8ae214d3b2af53c3db3a28f45d32879c57e7abed...@-xun/common-dummies@1.0.0
[44]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[45]: https://github.com/Xunnamius/test-utils/commit/8ae214d3b2af53c3db3a28f45d32879c57e7abed
[46]: https://github.com/Xunnamius/test-utils/commit/bf9dad1dc32da28cbc1e037209c9470095d7efa6
[47]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.3...@-xun/common-dummies@1.0.4
[48]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[49]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.2...@-xun/common-dummies@1.0.3
[50]: https://github.com/Xunnamius/test-utils/commit/20fe7d62494fb77ea173fac80554b55d46ebc25a
[51]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.1...@-xun/common-dummies@1.0.2
[52]: https://github.com/Xunnamius/test-utils/commit/5ff40c77a98ed0a1d0df44772fe12318f1efb439
[53]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.0...@-xun/common-dummies@1.0.1
[54]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
[55]: https://github.com/Xunnamius/test-utils/commit/af4e75f9b436c758cd44a902f489c5640d8b2b47
