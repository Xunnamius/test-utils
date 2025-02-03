import type { FixtureContext } from 'universe+test-mock-fixture:types/fixtures.ts';

export async function getTreeOutput(context: FixtureContext) {
  if (process.platform === 'win32') {
    return '(this platform does not support the `tree` command)';
  } else {
    const { stdout } = await (
      await import('@-xun/run')
    ).runNoRejectOnBadExit('tree', ['-a', '-L', '2'], { cwd: context.root });
    return stdout || '(`tree` command did not return a result. Is it installed?)';
  }
}
