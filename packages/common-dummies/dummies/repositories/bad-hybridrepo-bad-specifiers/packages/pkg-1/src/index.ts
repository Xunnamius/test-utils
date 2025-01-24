// @ts-ignore
import { something } from '@black-flag/core';
// ! This is a "suboptimal" multiversal import (should be rootverse)
// @ts-ignore
import { somethingElse } from 'multiverse+pkg-1:lib.ts';

// eslint-disable-next-line no-console
console.log('raw source code here');
