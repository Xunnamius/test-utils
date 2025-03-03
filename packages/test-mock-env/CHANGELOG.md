# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/test-mock-env[@1.0.0][3] (2025-02-04)

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][4])
- **packages:** split test/setup blob into distinct packages ([857d3ea][5])

<br />

### 🏗️ Patch @-xun/test-mock-env[@1.0.6][6] (2025-03-03)

#### ⚙️ Build System

- **deps:** bump type-fest from 4.35.0 to 4.36.0 ([0f0912a][7])

<br />

### 🏗️ Patch @-xun/test-mock-env[@1.0.5][8] (2025-02-18)

#### ⚙️ Build System

- Make warning comments bold; refactor outdated typeof checks ([6f689e1][9])

<br />

### 🏗️ Patch @-xun/test-mock-env[@1.0.4][10] (2025-02-17)

#### ⚙️ Build System

- Update @-xun/run to 1.0.1 ([b33fea8][11])

<br />

### 🏗️ Patch @-xun/test-mock-env[@1.0.3][12] (2025-02-15)

#### 🪄 Fixes

- **packages/test-mock-env:** ensure `process.env` is cleared properly ([a86a1d3][13])

<br />

### 🏗️ Patch @-xun/test-mock-env[@1.0.2][14] (2025-02-07)

#### 🪄 Fixes

- **packages/test-mock-env:** do not mangle DEBUG\_COLORS env variable by default ([d64b533][15])

<br />

### 🏗️ Patch @-xun/test-mock-env[@1.0.1][16] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][17])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/test-mock-env@1.0.0
[4]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[5]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[6]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@1.0.5...@-xun/test-mock-env@1.0.6
[7]: https://github.com/Xunnamius/test-utils/commit/0f0912ad51d66dd5f51796cbf0c0ca12f8a97fb0
[8]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@1.0.4...@-xun/test-mock-env@1.0.5
[9]: https://github.com/Xunnamius/test-utils/commit/6f689e10efcbac51bda6c5db872d36185d578002
[10]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@1.0.3...@-xun/test-mock-env@1.0.4
[11]: https://github.com/Xunnamius/test-utils/commit/b33fea8db53369e4e821d273ed05fd0d4c91b749
[12]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@1.0.2...@-xun/test-mock-env@1.0.3
[13]: https://github.com/Xunnamius/test-utils/commit/a86a1d348cccc04562fca1cc8f7b15ce48d927da
[14]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@1.0.1...@-xun/test-mock-env@1.0.2
[15]: https://github.com/Xunnamius/test-utils/commit/d64b533f7386e4c6a3a5dea683b5648054b37b16
[16]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@1.0.0...@-xun/test-mock-env@1.0.1
[17]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
