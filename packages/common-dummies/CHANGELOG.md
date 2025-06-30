# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/common-dummies[@2.1.0][3] (2025-06-30)

### ✨ Features

- **packages/common-dummies:** add new dummy repository "good-monorepo-similar-ids" ([7e12a1b][4])

### ⚙️ Build System

- Remove dead jest versions from peer deps ([29aea64][5])

<br />

## @-xun/common-dummies[@2.0.0][6] (2025-05-30)

### 💥 BREAKING CHANGES 💥

- Minimum supported node version is now 20.18.0

### 🪄 Fixes

- **packages/common-dummies:** use correct import syntax for dummy testverse imports ([420c8b6][7])

### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 1.2.0 to 2.0.0 ([71d70a9][8])
- **deps:** bump @-xun/project-types from 1.0.4 to 2.0.0 ([a700857][9])
- **deps:** bump core-js from 3.41.0 to 3.42.0 ([f4f8b29][10])
- **deps:** bump type-fest from 4.37.0 to 4.41.0 ([b451a3b][11])
- **package:** drop support for node\@18 ([cd28a9a][12])

<br />

### 🏗️ Patch @-xun/common-dummies[@2.0.8][13] (2025-06-14)

#### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 2.0.2 to 2.0.3 ([a98f71a][14])
- **deps:** bump rejoinder from 2.0.0 to 2.0.1 ([095dfda][15])

<br />

### 🏗️ Patch @-xun/common-dummies[@2.0.7][16] (2025-06-14)

#### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 2.0.1 to 2.0.2 ([e96a497][17])

<br />

### 🏗️ Patch @-xun/common-dummies[@2.0.6][18] (2025-06-14)

#### 🪄 Fixes

- **packages/common-dummies:** repair dummies that were damaged from misconfigured .gitignore ([22581cf][19])

<br />

### 🏗️ Patch @-xun/common-dummies[@2.0.5][20] (2025-06-14)

#### ⚙️ Build System

- **deps:** bump core-js from 3.42.0 to 3.43.0 ([58d7b9c][21])
- **deps:** bump rejoinder from 1.2.5 to 2.0.0 ([f36354b][22])

<br />

### 🏗️ Patch @-xun/common-dummies[@2.0.4][23] (2025-06-03)

#### ⚙️ Build System

- **package:** update jest peer dependency to prefer 30 first, then 30-beta second, then 30-alpha last ([fc4ea15][24])

<br />

### 🏗️ Patch @-xun/common-dummies[@2.0.3][25] (2025-06-03)

#### ⚙️ Build System

- Use correct jest peer dependency ([c9249f4][26])

<br />

### 🏗️ Patch @-xun/common-dummies[@2.0.2][27] (2025-06-01)

#### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 2.0.0 to 2.0.1 ([c90c163][28])
- **deps:** bump @-xun/project-types from 2.0.0 to 2.0.1 ([5143d9f][29])

<br />

### 🏗️ Patch @-xun/common-dummies[@2.0.1][30] (2025-06-01)

#### ⚙️ Build System

- **deps:** bump @-xun/fs from 1.0.0 to 2.0.0 ([bf93df8][31])

<br />

## @-xun/common-dummies[@1.3.0][32] (2025-03-13)

### ✨ Features

- **packages/common-dummies:** add new dummy "good-hybridrepo-complex-ignore" ([25cc06e][33])

### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 1.0.4 to 1.0.5 ([24db0cb][34])
- **deps:** bump @-xun/project-types from 1.0.3 to 1.0.4 ([c16fd38][35])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.3.1][36] (2025-03-19)

#### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 1.0.5 to 1.2.0 ([edc24e3][37])
- **deps:** bump core-js from 3.40.0 to 3.41.0 ([32ecd17][38])

<br />

## @-xun/common-dummies[@1.2.0][39] (2025-02-24)

### ✨ Features

- **packages/common-dummies:** replace `patchReadXPackageJsonAtRoot` with the more generic `patchJsonObjectReaders` ([fcb5784][40])

### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 1.0.2 to 1.0.3 ([df83dd3][41])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.2.2][42] (2025-03-06)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.36.0 to 4.37.0 ([621739c][43])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.2.1][44] (2025-03-03)

#### ⚙️ Build System

- **deps:** bump @-xun/project-fs from 1.0.3 to 1.0.4 ([bb059a0][45])
- **deps:** bump @-xun/project-types from 1.0.2 to 1.0.3 ([dd24dd9][46])
- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([d1f07d5][47])

<br />

## @-xun/common-dummies[@1.1.0][48] (2025-02-24)

### ✨ Features

- **packages/common-dummies:** add new dummy repository "bad-polyrepo-empty-package-json" ([9233370][49])

### 🪄 Fixes

- **packages/common-dummies:** add missing names to dummy polyrepo package.json files ([69c8193][50])

<br />

## @-xun/common-dummies[@1.0.0][51] (2025-02-04)

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][52])
- **packages/common-dummies:** add package entry points ([8ae214d][53])
- **packages/common-dummies:** ignore dummies in local lint configuration ([bf9dad1][54])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.0.4][55] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][56])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.0.3][57] (2025-02-15)

#### 🪄 Fixes

- **packages/common-dummies:** ensure `patchReadXPackageJsonAtRoot` functions as described in documentation ([20fe7d6][58])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.0.2][59] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** release `getDummyPackage` fix ([5ff40c7][60])

<br />

### 🏗️ Patch @-xun/common-dummies[@1.0.1][61] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][62])

#### ⚙️ Build System

- Add missing jest peer dependency ([af4e75f][63])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@2.0.8...@-xun/common-dummies@2.1.0
[4]: https://github.com/Xunnamius/test-utils/commit/7e12a1b163b21c43113c8108e46e449220763ab5
[5]: https://github.com/Xunnamius/test-utils/commit/29aea64b9bead509f8e64c12f7122c6fcac648df
[6]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.3.1...@-xun/common-dummies@2.0.0
[7]: https://github.com/Xunnamius/test-utils/commit/420c8b62b0a0191fac7b4cbbb76caa2e57a70884
[8]: https://github.com/Xunnamius/test-utils/commit/71d70a9f31e6f9820e1826b5abab3bb4f60e5494
[9]: https://github.com/Xunnamius/test-utils/commit/a700857153ed055fe7a6b62808bdd14c767b6634
[10]: https://github.com/Xunnamius/test-utils/commit/f4f8b29d08aa7a40559b04464210a7acf01e16a8
[11]: https://github.com/Xunnamius/test-utils/commit/b451a3b3b207afe01c0f76f64777e94b4742dec0
[12]: https://github.com/Xunnamius/test-utils/commit/cd28a9a0a06981edb7d180139ceb629dc4313139
[13]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@2.0.7...@-xun/common-dummies@2.0.8
[14]: https://github.com/Xunnamius/test-utils/commit/a98f71a4cce85c7879495a9b3a1575113a52043f
[15]: https://github.com/Xunnamius/test-utils/commit/095dfda6524fb5736bc2bd79651369a5d65dfdce
[16]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@2.0.6...@-xun/common-dummies@2.0.7
[17]: https://github.com/Xunnamius/test-utils/commit/e96a49726dd7a205076974a7c364db7a41c65c92
[18]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@2.0.5...@-xun/common-dummies@2.0.6
[19]: https://github.com/Xunnamius/test-utils/commit/22581cfc5e5d8631e4f7db402aefa2e14fa59432
[20]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@2.0.4...@-xun/common-dummies@2.0.5
[21]: https://github.com/Xunnamius/test-utils/commit/58d7b9c1cd40764769daf6e224284d1aab179af6
[22]: https://github.com/Xunnamius/test-utils/commit/f36354b040f3f0af5aef6d2549e5eb841502e588
[23]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@2.0.3...@-xun/common-dummies@2.0.4
[24]: https://github.com/Xunnamius/test-utils/commit/fc4ea1561ab0eb466639e76ecec9142647b7bdae
[25]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@2.0.2...@-xun/common-dummies@2.0.3
[26]: https://github.com/Xunnamius/test-utils/commit/c9249f4ac0db649fa05aa28798447a40ec9c9fad
[27]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@2.0.1...@-xun/common-dummies@2.0.2
[28]: https://github.com/Xunnamius/test-utils/commit/c90c163d7a06e67db091dea2a7fdc5ec0c37ad4e
[29]: https://github.com/Xunnamius/test-utils/commit/5143d9ff2db9e8c1eaa8608c6d67c7185e4a6d20
[30]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@2.0.0...@-xun/common-dummies@2.0.1
[31]: https://github.com/Xunnamius/test-utils/commit/bf93df8950410ad98e847255911683e86fb081ff
[32]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.2.2...@-xun/common-dummies@1.3.0
[33]: https://github.com/Xunnamius/test-utils/commit/25cc06edbd1eb70099f3eebf1d0070499362b637
[34]: https://github.com/Xunnamius/test-utils/commit/24db0cb7e1f74f9232cda882564401d9a028c8b1
[35]: https://github.com/Xunnamius/test-utils/commit/c16fd38110d0f29b014ddbd0ce2df41e2193280f
[36]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.3.0...@-xun/common-dummies@1.3.1
[37]: https://github.com/Xunnamius/test-utils/commit/edc24e3eab43cb9e4e4e1bcc1035a690581a794c
[38]: https://github.com/Xunnamius/test-utils/commit/32ecd177b85561a8b56d5470a190edf96851138c
[39]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.1.0...@-xun/common-dummies@1.2.0
[40]: https://github.com/Xunnamius/test-utils/commit/fcb57846bd155af8f31af388dca019cd245ef5db
[41]: https://github.com/Xunnamius/test-utils/commit/df83dd30f9e67352f8ab16eb2fce0e37c0271bfc
[42]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.2.1...@-xun/common-dummies@1.2.2
[43]: https://github.com/Xunnamius/test-utils/commit/621739c50f825156bde3af5db515a939050a8857
[44]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.2.0...@-xun/common-dummies@1.2.1
[45]: https://github.com/Xunnamius/test-utils/commit/bb059a0654fefa93a2c83bafb1c1981ccb4a1745
[46]: https://github.com/Xunnamius/test-utils/commit/dd24dd93cb0e3b3cfc3fc54c21ab921b4fc12c1d
[47]: https://github.com/Xunnamius/test-utils/commit/d1f07d525045ab6d400f22651f3a92577b41a24b
[48]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.4...@-xun/common-dummies@1.1.0
[49]: https://github.com/Xunnamius/test-utils/commit/923337024cbc623bc2fa0a5a01535854a589bd24
[50]: https://github.com/Xunnamius/test-utils/commit/69c8193aa5c89489bde2b1fe45ecd3ae64694cb3
[51]: https://github.com/Xunnamius/test-utils/compare/8ae214d3b2af53c3db3a28f45d32879c57e7abed...@-xun/common-dummies@1.0.0
[52]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[53]: https://github.com/Xunnamius/test-utils/commit/8ae214d3b2af53c3db3a28f45d32879c57e7abed
[54]: https://github.com/Xunnamius/test-utils/commit/bf9dad1dc32da28cbc1e037209c9470095d7efa6
[55]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.3...@-xun/common-dummies@1.0.4
[56]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[57]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.2...@-xun/common-dummies@1.0.3
[58]: https://github.com/Xunnamius/test-utils/commit/20fe7d62494fb77ea173fac80554b55d46ebc25a
[59]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.1...@-xun/common-dummies@1.0.2
[60]: https://github.com/Xunnamius/test-utils/commit/5ff40c77a98ed0a1d0df44772fe12318f1efb439
[61]: https://github.com/Xunnamius/test-utils/compare/@-xun/common-dummies@1.0.0...@-xun/common-dummies@1.0.1
[62]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
[63]: https://github.com/Xunnamius/test-utils/commit/af4e75f9b436c758cd44a902f489c5640d8b2b47
