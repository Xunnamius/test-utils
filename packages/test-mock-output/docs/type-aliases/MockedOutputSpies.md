[**@-xun/test-mock-output**](../README.md)

***

[@-xun/test-mock-output](../README.md) / MockedOutputSpies

# Type Alias: MockedOutputSpies

> **MockedOutputSpies**: `object`

Defined in: [index.ts:33](https://github.com/Xunnamius/test-utils/blob/a98e386cc9e8c29a6e734073cd6d04355e369a31/packages/test-mock-output/src/index.ts#L33)

## Type declaration

### errorSpy

> **errorSpy**: `jest.SpyInstance`

Spies on `globalThis.console.error`.

### infoSpy

> **infoSpy**: `jest.SpyInstance`

Spies on `globalThis.console.info`.

### logSpy

> **logSpy**: `jest.SpyInstance`

Spies on `globalThis.console.log`.

### nodeErrorSpy

> **nodeErrorSpy**: `jest.SpyInstance`

Spies on `require('node:console').error`.

### nodeInfoSpy

> **nodeInfoSpy**: `jest.SpyInstance`

Spies on `require('node:console').info`.

### nodeLogSpy

> **nodeLogSpy**: `jest.SpyInstance`

Spies on `require('node:console').log`.

### nodeWarnSpy

> **nodeWarnSpy**: `jest.SpyInstance`

Spies on `require('node:console').warn`.

### stderrSpy

> **stderrSpy**: `jest.SpyInstance`

Spies on `process.stderr.write`.

### stdoutSpy

> **stdoutSpy**: `jest.SpyInstance`

Spies on `process.stdout.write`.

### warnSpy

> **warnSpy**: `jest.SpyInstance`

Spies on `globalThis.console.warn`.

## See

[withMockedOutput](../functions/withMockedOutput.md)
