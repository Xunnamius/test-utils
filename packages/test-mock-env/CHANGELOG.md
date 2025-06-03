# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/test-mock-env[@2.0.0][3] (2025-05-30)

### 💥 BREAKING CHANGES 💥

- Minimum supported node version is now 20.18.0

### ⚙️ Build System

- **deps:** bump core-js from 3.41.0 to 3.42.0 ([00896fe][4])
- **deps:** bump type-fest from 4.37.0 to 4.41.0 ([7b1357e][5])
- **package:** drop support for node\@18 ([cd28a9a][6])

<br />

### 🏗️ Patch @-xun/test-mock-env[@2.0.1][7] (2025-06-03)

#### ⚙️ Build System

- **package:** update jest peer dependency to prefer 30 first, then 30-beta second, then 30-alpha last ([fc4ea15][8])

<br />

## @-xun/test-mock-env[@1.0.0][9] (2025-02-04)

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][10])
- **packages:** split test/setup blob into distinct packages ([857d3ea][11])

<br />

### 🏗️ Patch @-xun/test-mock-env[@1.0.8][12] (2025-03-19)

#### ⚙️ Build System

- **deps:** bump core-js from 3.40.0 to 3.41.0 ([8ad0ed1][13])

<br />

### 🏗️ Patch @-xun/test-mock-env[@1.0.7][14] (2025-03-06)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.36.0 to 4.37.0 ([f825acf][15])

<br />

### 🏗️ Patch @-xun/test-mock-env[@1.0.6][16] (2025-03-03)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([0f0912a][17])

<br />

### 🏗️ Patch @-xun/test-mock-env[@1.0.5][18] (2025-02-18)

#### ⚙️ Build System

- Make warning comments bold; refactor outdated typeof checks ([6f689e1][19])

<br />

### 🏗️ Patch @-xun/test-mock-env[@1.0.4][20] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][21])

<br />

### 🏗️ Patch @-xun/test-mock-env[@1.0.3][22] (2025-02-15)

#### 🪄 Fixes

- **packages/test-mock-env:** ensure `process.env` is cleared properly ([a86a1d3][23])

<br />

### 🏗️ Patch @-xun/test-mock-env[@1.0.2][24] (2025-02-07)

#### 🪄 Fixes

- **packages/test-mock-env:** do not mangle DEBUG\_COLORS env variable by default ([d64b533][25])

<br />

### 🏗️ Patch @-xun/test-mock-env[@1.0.1][26] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][27])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@1.0.8...@-xun/test-mock-env@2.0.0
[4]: https://github.com/Xunnamius/test-utils/commit/00896fe678ea68a4088f95df3206221acd75844d
[5]: https://github.com/Xunnamius/test-utils/commit/7b1357e2545eee2d368871555a4f7030bfde9b72
[6]: https://github.com/Xunnamius/test-utils/commit/cd28a9a0a06981edb7d180139ceb629dc4313139
[7]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@2.0.0...@-xun/test-mock-env@2.0.1
[8]: https://github.com/Xunnamius/test-utils/commit/fc4ea1561ab0eb466639e76ecec9142647b7bdae
[9]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/test-mock-env@1.0.0
[10]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[11]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[12]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@1.0.7...@-xun/test-mock-env@1.0.8
[13]: https://github.com/Xunnamius/test-utils/commit/8ad0ed1615998c0b8c8764aeae26e3eccc2308a8
[14]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@1.0.6...@-xun/test-mock-env@1.0.7
[15]: https://github.com/Xunnamius/test-utils/commit/f825acf9c6cb0ebc01da5435ec4a165c2a4c3881
[16]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@1.0.5...@-xun/test-mock-env@1.0.6
[17]: https://github.com/Xunnamius/test-utils/commit/0f0912ad51d66dd5f51796cbf0c0ca12f8a97fb0
[18]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@1.0.4...@-xun/test-mock-env@1.0.5
[19]: https://github.com/Xunnamius/test-utils/commit/6f689e10efcbac51bda6c5db872d36185d578002
[20]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@1.0.3...@-xun/test-mock-env@1.0.4
[21]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[22]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@1.0.2...@-xun/test-mock-env@1.0.3
[23]: https://github.com/Xunnamius/test-utils/commit/a86a1d348cccc04562fca1cc8f7b15ce48d927da
[24]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@1.0.1...@-xun/test-mock-env@1.0.2
[25]: https://github.com/Xunnamius/test-utils/commit/d64b533f7386e4c6a3a5dea683b5648054b37b16
[26]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@1.0.0...@-xun/test-mock-env@1.0.1
[27]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
