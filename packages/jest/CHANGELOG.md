# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/jest[@2.2.0][3] (2025-06-05)

### ✨ Features

- **packages/jest:** improve types of `expectExceptionsWithMatchingErrors`; implement slightly expanded feature set ([dc3c2c9][4])

<br />

### 🏗️ Patch @-xun/jest[@2.2.1][5] (2025-06-05)

#### 🪄 Fixes

- **packages/jest:** fix `expectExceptionsWithMatchingErrors` handling of spec-related types ([ddc98d6][6])

<br />

## @-xun/jest[@2.1.0][7] (2025-06-01)

### ✨ Features

- **packages/jest:** add `mockDateNowMs`, `useMockDateNow`, and `expectExceptionsWithMatchingErrors` ([49f9360][8])

### ⚙️ Build System

- **deps:** bump @-xun/fs from 1.0.0 to 2.0.0 ([9c37c69][9])
- **deps:** bump internal monorepo interdependencies to latest versions ([a2ae5ed][10])

<br />

### 🏗️ Patch @-xun/jest[@2.1.3][11] (2025-06-03)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([8e39702][12])
- **package:** update jest peer dependency to prefer 30 first, then 30-beta second, then 30-alpha last ([fc4ea15][13])

<br />

### 🏗️ Patch @-xun/jest[@2.1.2][14] (2025-06-03)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([00be67a][15])
- Use correct jest peer dependency ([c9249f4][16])

<br />

### 🏗️ Patch @-xun/jest[@2.1.1][17] (2025-06-01)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([1c6a125][18])

<br />

## @-xun/jest[@2.0.0][19] (2025-05-30)

### 💥 BREAKING CHANGES 💥

- Minimum supported node version is now 20.18.0

### ⚙️ Build System

- **deps:** bump bidirectional-resolve from 1.0.3 to 1.0.4 ([0ffeaca][20])
- **deps:** bump bidirectional-resolve from 1.0.4 to 2.0.0 ([8209bd5][21])
- **deps:** bump core-js from 3.41.0 to 3.42.0 ([6d58710][22])
- **deps:** bump glob from 11.0.1 to 11.0.2 ([a3b0d13][23])
- **deps:** bump internal monorepo interdependencies to latest versions ([73e6fed][24])
- **deps:** bump type-fest from 4.37.0 to 4.41.0 ([9965a67][25])
- **package:** drop support for node\@18 ([cd28a9a][26])

<br />

## @-xun/jest[@1.1.0][27] (2025-02-06)

### ✨ Features

- **packages/jest:** implement `ensurePackageHasBeenBuilt` export ([c463bf1][28])

<br />

### 🏗️ Patch @-xun/jest[@1.1.11][29] (2025-03-19)

#### ⚙️ Build System

- **deps:** bump core-js from 3.40.0 to 3.41.0 ([cc9a690][30])

<br />

### 🏗️ Patch @-xun/jest[@1.1.10][31] (2025-03-13)

#### ⚙️ Build System

- **deps:** bump bidirectional-resolve from 1.0.2 to 1.0.3 ([cf90c14][32])

<br />

### 🏗️ Patch @-xun/jest[@1.1.9][33] (2025-03-08)

#### 🪄 Fixes

- **packages/jest:** remove use of builtin `glob` (lesser node versions do not support it) ([3b314bc][34])

#### ⚙️ Build System

- **deps:** bump @-xun/test-mock-fixture from 1.4.1 to 1.5.0 ([700829e][35])

<br />

### 🏗️ Patch @-xun/jest[@1.1.8][36] (2025-03-06)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.36.0 to 4.37.0 ([ebfd71a][37])

<br />

### 🏗️ Patch @-xun/jest[@1.1.7][38] (2025-03-03)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([323d1bb][39])

<br />

### 🏗️ Patch @-xun/jest[@1.1.6][40] (2025-02-24)

#### ⚙️ Build System

- **deps:** bump @-xun/test-mock-fixture from 1.3.0 to 1.3.1 ([1c357c9][41])

<br />

### 🏗️ Patch @-xun/jest[@1.1.5][42] (2025-02-18)

#### 🪄 Fixes

- **packages/jest:** re-add ::todo method to replaced jest globals ([eb1c479][43])

<br />

### 🏗️ Patch @-xun/jest[@1.1.4][44] (2025-02-18)

#### 🪄 Fixes

- **packages/jest:** ensure `ensurePackageHasBeenBuilt` supports asterisk paths ([2d231c0][45])

<br />

### 🏗️ Patch @-xun/jest[@1.1.3][46] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][47])

<br />

### 🏗️ Patch @-xun/jest[@1.1.2][48] (2025-02-15)

#### 🪄 Fixes

- **packages/jest:** leverage bidirectional-resolve to analyze package exports ([ec060af][49])

<br />

### 🏗️ Patch @-xun/jest[@1.1.1][50] (2025-02-07)

#### 🪄 Fixes

- **packages/jest:** use less aggressive and more useful `ensurePackageHasBeenBuilt` check ([08c172f][51])

<br />

## @-xun/jest[@1.0.0][52] (2025-02-04)

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][53])
- **packages:** split test/setup blob into distinct packages ([857d3ea][54])

<br />

### 🏗️ Patch @-xun/jest[@1.0.1][55] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][56])
- **packages/jest:** ensure `asMocked` returns an instance of `jest.fn()` if no function provided ([83619bd][57])

#### ⚙️ Build System

- Add missing jest peer dependency ([af4e75f][58])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@2.1.3...@-xun/jest@2.2.0
[4]: https://github.com/Xunnamius/test-utils/commit/dc3c2c9cf0d49938e10c5803e629f9457c84f104
[5]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@2.2.0...@-xun/jest@2.2.1
[6]: https://github.com/Xunnamius/test-utils/commit/ddc98d6724564c6aa1b8c427a63c41e54d5d77d6
[7]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@2.0.0...@-xun/jest@2.1.0
[8]: https://github.com/Xunnamius/test-utils/commit/49f9360c5310eaab3dc0f63437084aa2e9ce98c5
[9]: https://github.com/Xunnamius/test-utils/commit/9c37c693284632d94f8c4e6b9d03416477d1503f
[10]: https://github.com/Xunnamius/test-utils/commit/a2ae5edac3426d5caf545577d06eeec6cf595388
[11]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@2.1.2...@-xun/jest@2.1.3
[12]: https://github.com/Xunnamius/test-utils/commit/8e397024c19f96899e2524077e08fd0b8fc867bd
[13]: https://github.com/Xunnamius/test-utils/commit/fc4ea1561ab0eb466639e76ecec9142647b7bdae
[14]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@2.1.1...@-xun/jest@2.1.2
[15]: https://github.com/Xunnamius/test-utils/commit/00be67a6c5831049df2eaafd10f161af0aebd1b3
[16]: https://github.com/Xunnamius/test-utils/commit/c9249f4ac0db649fa05aa28798447a40ec9c9fad
[17]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@2.1.0...@-xun/jest@2.1.1
[18]: https://github.com/Xunnamius/test-utils/commit/1c6a1257a26b3170aba6b495740828db908931f8
[19]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.11...@-xun/jest@2.0.0
[20]: https://github.com/Xunnamius/test-utils/commit/0ffeaca8b2c36971ec5448b236f275b7174e88a2
[21]: https://github.com/Xunnamius/test-utils/commit/8209bd57dde6d7b26befb6f41ceaa87eb0deaa6f
[22]: https://github.com/Xunnamius/test-utils/commit/6d587106e786f2212d32e927aff9f1268a7719e6
[23]: https://github.com/Xunnamius/test-utils/commit/a3b0d1324af3693b7ff17b21913f92dbeddf8cc4
[24]: https://github.com/Xunnamius/test-utils/commit/73e6fed22cde60f6eae1d9c4855f6ea39feb85a7
[25]: https://github.com/Xunnamius/test-utils/commit/9965a675d2234a263d11823b4ccb7d8ec6b18bc5
[26]: https://github.com/Xunnamius/test-utils/commit/cd28a9a0a06981edb7d180139ceb629dc4313139
[27]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.0.1...@-xun/jest@1.1.0
[28]: https://github.com/Xunnamius/test-utils/commit/c463bf1463aea0453e6a08cbbcb204aba8b229ef
[29]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.10...@-xun/jest@1.1.11
[30]: https://github.com/Xunnamius/test-utils/commit/cc9a690c6793c5eb9ffcadb7f30fb4ee014cf1db
[31]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.9...@-xun/jest@1.1.10
[32]: https://github.com/Xunnamius/test-utils/commit/cf90c14c038e2a501540d2c551d03595082f73ec
[33]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.8...@-xun/jest@1.1.9
[34]: https://github.com/Xunnamius/test-utils/commit/3b314bc406540af303ab44ed657a090059f493b7
[35]: https://github.com/Xunnamius/test-utils/commit/700829e1ae21be9bdd14d701afce45cfe08203d7
[36]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.7...@-xun/jest@1.1.8
[37]: https://github.com/Xunnamius/test-utils/commit/ebfd71ae5254a3c4cb33b94c4c1777fdaa1f559c
[38]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.6...@-xun/jest@1.1.7
[39]: https://github.com/Xunnamius/test-utils/commit/323d1bbb2784524bc0fd6ac2a04430a19fc414c4
[40]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.5...@-xun/jest@1.1.6
[41]: https://github.com/Xunnamius/test-utils/commit/1c357c951aa527f86e5a3a850b3c904c7d633ae0
[42]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.4...@-xun/jest@1.1.5
[43]: https://github.com/Xunnamius/test-utils/commit/eb1c4791975c2e404ed1d1fa0124c3bbd9ef41f4
[44]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.3...@-xun/jest@1.1.4
[45]: https://github.com/Xunnamius/test-utils/commit/2d231c008d107baf61eba939013d58df61adad65
[46]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.2...@-xun/jest@1.1.3
[47]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[48]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.1...@-xun/jest@1.1.2
[49]: https://github.com/Xunnamius/test-utils/commit/ec060af799a2bd987617106ad6f035907c4f4f42
[50]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.1.0...@-xun/jest@1.1.1
[51]: https://github.com/Xunnamius/test-utils/commit/08c172fd86063ef2cb40963f770391649cfb8900
[52]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/jest@1.0.0
[53]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[54]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[55]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.0.0...@-xun/jest@1.0.1
[56]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
[57]: https://github.com/Xunnamius/test-utils/commit/83619bdf03d91fda9056a40b5dc66ce530cc9131
[58]: https://github.com/Xunnamius/test-utils/commit/af4e75f9b436c758cd44a902f489c5640d8b2b47
