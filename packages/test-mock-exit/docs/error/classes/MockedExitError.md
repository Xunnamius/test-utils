[**@-xun/test-mock-exit**](../../README.md)

***

[@-xun/test-mock-exit](../../README.md) / [error](../README.md) / MockedExitError

# Class: MockedExitError

Defined in: [packages/test-mock-exit/src/error.ts:23](https://github.com/Xunnamius/test-utils/blob/bab62ff20b44278e684bb2f1efa7572487812960/packages/test-mock-exit/src/error.ts#L23)

Represents a call to `process.exit` when said function was mocked by
`withMockedExit`.

## Extends

- `Error`

## Constructors

### new MockedExitError()

> **new MockedExitError**(`code`): [`MockedExitError`](MockedExitError.md)

Defined in: [packages/test-mock-exit/src/error.ts:30](https://github.com/Xunnamius/test-utils/blob/bab62ff20b44278e684bb2f1efa7572487812960/packages/test-mock-exit/src/error.ts#L30)

Represents a call to `process.exit` when said function was mocked by
`withMockedExit`.

#### Parameters

##### code

`undefined` | `null` | `string` | `number`

#### Returns

[`MockedExitError`](MockedExitError.md)

#### Overrides

`Error.constructor`

### new MockedExitError()

> **new MockedExitError**(`code`, `message`, `superOptions`): [`MockedExitError`](MockedExitError.md)

Defined in: [packages/test-mock-exit/src/error.ts:35](https://github.com/Xunnamius/test-utils/blob/bab62ff20b44278e684bb2f1efa7572487812960/packages/test-mock-exit/src/error.ts#L35)

This constructor syntax is used by subclasses when calling this constructor
via `super`.

#### Parameters

##### code

`undefined` | `null` | `string` | `number`

##### message

`string`

##### superOptions

`ErrorOptions`

#### Returns

[`MockedExitError`](MockedExitError.md)

#### Overrides

`Error.constructor`

## Properties

### \[$type\]

> **\[$type\]**: `symbol`[]

Defined in: [packages/test-mock-exit/src/error.ts:25](https://github.com/Xunnamius/test-utils/blob/bab62ff20b44278e684bb2f1efa7572487812960/packages/test-mock-exit/src/error.ts#L25)

***

### cause?

> `optional` **cause**: `unknown`

Defined in: node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`Error.cause`

***

### message

> **message**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### stack?

> `optional` **stack**: `string`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/@types/node/globals.d.ts:143

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/@types/node/globals.d.ts:145

#### Inherited from

`Error.stackTraceLimit`

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Defined in: node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`
