# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/jest[@1.1.0][3] (2025-02-06)

### ✨ Features

- **packages/jest:** implement `ensurePackageHasBeenBuilt` export ([c463bf1][4])

<br />

## @-xun/jest[@1.0.0][5] (2025-02-04)

### ⚙️ Build System

- **jest:** ensure jest haste-map utility ignores dummy test files ([f75c4cd][6])
- **packages:** split test/setup blob into distinct packages ([857d3ea][7])

<br />

### 🏗️ Patch @-xun/jest[@1.0.1][8] (2025-02-06)

#### 🪄 Fixes

- **packages/common-dummies:** pack and unpack "dummies" into/from a tarball to work around npm issues ([dc3b432][9])
- **packages/jest:** ensure `asMocked` returns an instance of `jest.fn()` if no function provided ([83619bd][10])

#### ⚙️ Build System

- Add missing jest peer dependency ([af4e75f][11])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.0.1...@-xun/jest@1.1.0
[4]: https://github.com/Xunnamius/test-utils/commit/c463bf1463aea0453e6a08cbbcb204aba8b229ef
[5]: https://github.com/Xunnamius/test-utils/compare/857d3eac80084608a88cbc27476cbe23e155ce7d...@-xun/jest@1.0.0
[6]: https://github.com/Xunnamius/test-utils/commit/f75c4cd929f5d1720d466436ad2ee5c68cced170
[7]: https://github.com/Xunnamius/test-utils/commit/857d3eac80084608a88cbc27476cbe23e155ce7d
[8]: https://github.com/Xunnamius/test-utils/compare/@-xun/jest@1.0.0...@-xun/jest@1.0.1
[9]: https://github.com/Xunnamius/test-utils/commit/dc3b432f6d15898a8396cf56c73f03cafcecb7a9
[10]: https://github.com/Xunnamius/test-utils/commit/83619bdf03d91fda9056a40b5dc66ce530cc9131
[11]: https://github.com/Xunnamius/test-utils/commit/af4e75f9b436c758cd44a902f489c5640d8b2b47
