import { name as pkgName } from './package.json' with { type: 'json' };
import { name as pkgName2 } from './package2.json' with { type: 'json' };
import 'webpack~3/some/deep/import';
import '@some/namespaced/import';

const lib = () => import('../webpack/src/webpack-lib2.js');

export { lib };
