[**@-xun/jest**](../../README.md)

***

[@-xun/jest](../../README.md) / [index](../README.md) / NodeImportAndRunTestFixtureOptions

# Type Alias: NodeImportAndRunTestFixtureOptions

> **NodeImportAndRunTestFixtureOptions**: `Tagged`\<\{ `npmInstall`: `string` \| `string`[]; `runInstallScripts`: `boolean`; `runWith`: \{ `args`: `string`[]; `binary`: `string`; `runnerOptions`: `RunOptions`; \}; \}, *typeof* [`nodeImportAndRunTestFixtureName`](../variables/nodeImportAndRunTestFixtureName.md)\>

Defined in: packages/test-mock-fixture/dist/packages/test-mock-fixture/src/fixtures/node-import-and-run-test.d.ts:20

Contains any additional options properties this fixture expects or allows.

This type is Tagged so that it can be differentiated from `XContext`
types provided by other fixtures, even when they contain the same keys (or no
keys).

## See

[nodeImportAndRunTestFixture](../functions/nodeImportAndRunTestFixture.md)
