[**@-xun/test-mock-output**](../README.md)

***

[@-xun/test-mock-output](../README.md) / MockedOutputSpies

# Type Alias: MockedOutputSpies

> **MockedOutputSpies** = `object`

Defined in: [index.ts:33](https://github.com/Xunnamius/test-utils/blob/e7c48c9e7d68b0c741fd0d4ce98c0f35bde174d7/packages/test-mock-output/src/index.ts#L33)

## See

[withMockedOutput](../functions/withMockedOutput.md)

## Properties

### errorSpy

> **errorSpy**: `jest.SpyInstance`

Defined in: [index.ts:45](https://github.com/Xunnamius/test-utils/blob/e7c48c9e7d68b0c741fd0d4ce98c0f35bde174d7/packages/test-mock-output/src/index.ts#L45)

Spies on `globalThis.console.error`.

***

### infoSpy

> **infoSpy**: `jest.SpyInstance`

Defined in: [index.ts:49](https://github.com/Xunnamius/test-utils/blob/e7c48c9e7d68b0c741fd0d4ce98c0f35bde174d7/packages/test-mock-output/src/index.ts#L49)

Spies on `globalThis.console.info`.

***

### logSpy

> **logSpy**: `jest.SpyInstance`

Defined in: [index.ts:37](https://github.com/Xunnamius/test-utils/blob/e7c48c9e7d68b0c741fd0d4ce98c0f35bde174d7/packages/test-mock-output/src/index.ts#L37)

Spies on `globalThis.console.log`.

***

### nodeErrorSpy

> **nodeErrorSpy**: `jest.SpyInstance`

Defined in: [index.ts:61](https://github.com/Xunnamius/test-utils/blob/e7c48c9e7d68b0c741fd0d4ce98c0f35bde174d7/packages/test-mock-output/src/index.ts#L61)

Spies on `require('node:console').error`.

***

### nodeInfoSpy

> **nodeInfoSpy**: `jest.SpyInstance`

Defined in: [index.ts:65](https://github.com/Xunnamius/test-utils/blob/e7c48c9e7d68b0c741fd0d4ce98c0f35bde174d7/packages/test-mock-output/src/index.ts#L65)

Spies on `require('node:console').info`.

***

### nodeLogSpy

> **nodeLogSpy**: `jest.SpyInstance`

Defined in: [index.ts:53](https://github.com/Xunnamius/test-utils/blob/e7c48c9e7d68b0c741fd0d4ce98c0f35bde174d7/packages/test-mock-output/src/index.ts#L53)

Spies on `require('node:console').log`.

***

### nodeWarnSpy

> **nodeWarnSpy**: `jest.SpyInstance`

Defined in: [index.ts:57](https://github.com/Xunnamius/test-utils/blob/e7c48c9e7d68b0c741fd0d4ce98c0f35bde174d7/packages/test-mock-output/src/index.ts#L57)

Spies on `require('node:console').warn`.

***

### stderrSpy

> **stderrSpy**: `jest.SpyInstance`

Defined in: [index.ts:73](https://github.com/Xunnamius/test-utils/blob/e7c48c9e7d68b0c741fd0d4ce98c0f35bde174d7/packages/test-mock-output/src/index.ts#L73)

Spies on `process.stderr.write`.

***

### stdoutSpy

> **stdoutSpy**: `jest.SpyInstance`

Defined in: [index.ts:69](https://github.com/Xunnamius/test-utils/blob/e7c48c9e7d68b0c741fd0d4ce98c0f35bde174d7/packages/test-mock-output/src/index.ts#L69)

Spies on `process.stdout.write`.

***

### warnSpy

> **warnSpy**: `jest.SpyInstance`

Defined in: [index.ts:41](https://github.com/Xunnamius/test-utils/blob/e7c48c9e7d68b0c741fd0d4ce98c0f35bde174d7/packages/test-mock-output/src/index.ts#L41)

Spies on `globalThis.console.warn`.
