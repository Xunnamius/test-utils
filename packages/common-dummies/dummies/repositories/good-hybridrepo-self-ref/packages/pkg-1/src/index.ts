// @ts-ignore
import { something } from '@black-flag/core';
// ! This is NOT a multiversal import (package name and id differ)!
// @ts-ignore
import { somethingElse } from 'universe+pkg-1:lib.ts';
import { name } from 'rootverse+pkg-1:package.json';

// eslint-disable-next-line no-console
console.log('raw source code here');
