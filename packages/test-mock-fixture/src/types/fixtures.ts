export type MockFixture<Name extends string> = {
  name: Name;
  description: string;
  setup?: FixtureAction<Context>;
  teardown?: FixtureAction<Context>;
};

export type FixtureAction<Context = FixtureContext> = (
  context: Context
) => Promise<unknown>;

export type FixtureContext<
  T extends MockFixture<string>,
  AdditionalContext extends Record<string, unknown> = never
> = {
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
};
