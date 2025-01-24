import type { SimpleGit } from 'simple-git';
import type { Promisable } from 'type-fest';

export interface MockFixture<Context = FixtureContext> {
  name: LiteralUnion<'root' | 'describe-root', string | symbol> | ReturnsString<Context>;
  description: string | ReturnsString<Context>;
  setup?: FixtureAction<Context>;
  teardown?: FixtureAction<Context>;
}

export interface FixtureContext<
  CustomOptions extends Record<string, unknown> = Record<string, unknown>
> extends Partial<TestResultProvider>,
    Partial<TreeOutputProvider>,
    Partial<GitProvider> {
  root: string;
  testIdentifier: string;
  options: FixtureOptions & CustomOptions;
  using: MockFixture[];
  fileContents: { [filePath: string]: string };
  debug: ExtendedDebugger;
  /**
   * Convenience filesystem functions. All paths are local to the current
   * context root.
   */
  fs: {
    writeFile: WithoutContextProperty<typeof writeFile>;
    readFile: WithoutContextProperty<typeof readFile>;
    accessFile: WithoutContextProperty<typeof accessFile>;
    symlink: WithoutContextProperty<typeof symlink>;
    mkdir: WithoutContextProperty<typeof mkdir>;
    remove: WithoutContextProperty<typeof remove>;
    copy: WithoutContextProperty<typeof copy>;
    rename: WithoutContextProperty<typeof rename>;
  };
}

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
