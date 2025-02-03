// Normal default and named imports

// @ts-ignore
import React from 'react';
// @ts-ignore
import { niceTool, helper as someHelper } from './some-utils.js';

// Duplicated import
// @ts-ignore
import { somethingAwful } from './some-utils.js';

// Importing for side effects only
import 'side-effects.js';

// Extension doesn't matter
// @ts-ignore
import styles from './styles.css';

// Importing all as namespace
// @ts-ignore
import * as namespaceImport from 'some-lib';

// With import attribute
// @ts-ignore
import { name as pkgName } from 'package.json' with { type: 'json' };

// Type imports
// @ts-ignore
import type { Promisable } from 'type-fest-1';
// @ts-ignore
import { type Arrayable } from 'type-fest-2';

// NOT a type (type-only) import!
// @ts-ignore
import { type SomeType, someNotType } from 'my-neat-lib';

// Exporting from source
// @ts-ignore
export { default as something } from './source.js';

// Exporting everything from a source
// @ts-ignore
export * from './another-source.js';

// Type exports
// @ts-ignore
export type { default as something } from './type-fest-3.js';
// @ts-ignore
export type * from '@type/fest4';

// NOT a type (type-only) export!
// @ts-ignore
export { type SomeType, someNotType } from 'my-neat-lib-2';

// Dynamic imports
// @ts-ignore
await import('dynamic');
// @ts-ignore
await import('package.json', { with: { type: 'json' } });
// @ts-ignore
type X = typeof import('this-is-a-typeof-import');
// @ts-ignore
type XX = import('this-is-a-type-import');
