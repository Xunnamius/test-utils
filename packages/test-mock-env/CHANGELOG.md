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

### 🏗️ Patch @-xun/test-mock-env[@1.0.3][6] (2025-02-15)

#### 🪄 Fixes

- **packages/test-mock-env:** ensure `process.env` is cleared properly ([a86a1d3][7])

<br />

### 🏗️ Patch @-xun/test-mock-env[@1.0.2][8] (2025-02-07)

#### 🪄 Fixes

- **packages/test-mock-env:** do not mangle DEBUG\_COLORS env variable by default ([d64b533][9])

<br />

### 🏗️ Patch @-xun/test-mock-env[@1.0.1][10] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][11])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/test-mock-env@1.0.0
[4]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[5]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[6]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@1.0.2...@-xun/test-mock-env@1.0.3
[7]: https://github.com/Xunnamius/test-utils/commit/a86a1d348cccc04562fca1cc8f7b15ce48d927da
[8]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@1.0.1...@-xun/test-mock-env@1.0.2
[9]: https://github.com/Xunnamius/test-utils/commit/d64b533f7386e4c6a3a5dea683b5648054b37b16
[10]: https://github.com/Xunnamius/test-utils/compare/@-xun/test-mock-env@1.0.0...@-xun/test-mock-env@1.0.1
[11]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
