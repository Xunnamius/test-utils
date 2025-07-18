[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / reconfigureJestGlobalsToSkipTestsInThisFileIfRequested

# Function: reconfigureJestGlobalsToSkipTestsInThisFileIfRequested()

> **reconfigureJestGlobalsToSkipTestsInThisFileIfRequested**(`targets?`): `object`

Defined in: [packages/jest/src/index.ts:191](https://github.com/Xunnamius/test-utils/blob/4fc2dc9b5529a12a6f15193a82e6144613d89845/packages/jest/src/index.ts#L191)

This function replaces Jest's `describe`, `test`, and `it` functions in the
current file with `describe.skip`, `test.skip`, and `it.skip` if
`process.env.SYMBIOTE_TEST_JEST_SKIP_SLOW_TESTS >= 1`. The replaced functions
also have a `noskip` method which are aliases for their respective original
versions.

Essentially, this function changes Jest's execution semantics such that all
tests in a given file are skipped by default. Use the `noskip` method to opt
a test into always being run.

To prevent a file from being executed in its entirety (for example, a test
file with hundreds or thousands of tests that still take a noticeable amount
of time to skip), include the string `-slow.` in the file's name, e.g.
`unit-my-slow.test.ts`, and set
`process.env.SYMBIOTE_TEST_JEST_SKIP_SLOW_TESTS >= 2`.

See the [symbiote wiki](https://github.com/Xunnamius/symbiote/wiki) for more
details.

## Parameters

### targets?

Determines which Jest globals are targeted for reconfiguration.

By default, only `describe` is reconfigured while `test` and `it` are left
alone. This makes it easier to apply `noskip` to a collection of tests, but
sometimes it's prudent to reconfigure the other globals as well.

#### describe?

`boolean`

**Default**

```ts
true
```

#### it?

`boolean`

**Default**

```ts
false
```

#### test?

`boolean`

**Default**

```ts
false
```

## Returns

`object`

### describe

> **describe**: `Describe` = `describe_`

### it

> **it**: `It` = `it_`

### test

> **test**: `It` = `test_`
