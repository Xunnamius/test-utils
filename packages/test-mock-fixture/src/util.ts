import { runNoRejectOnBadExit } from '@-xun/run';

import type { GenericFixtureContext } from 'universe+test-mock-fixture:types/fixtures.ts';

export async function getTreeOutput(context: GenericFixtureContext) {
  if (process.platform === 'win32') {
    return '(this platform does not support the `tree` command)';
  } else {
    const { stdout } = await runNoRejectOnBadExit('tree', ['-a', '-L', '2'], {
      cwd: context.root
    });

    return stdout || '(`tree` command did not return a result. Is it installed?)';
  }
}
