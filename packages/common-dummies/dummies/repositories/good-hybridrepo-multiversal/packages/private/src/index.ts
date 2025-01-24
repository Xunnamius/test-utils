import 'some-package';
// ? Self-referential
import { something } from 'universe+private:lib/library2.ts'

import { name } from 'rootverse+private:package.json'

// eslint-disable-next-line no-console
console.log('raw source code here');
