const splitUrlRegex = /^.*\bnode_modules[/\\]dum{2}y-[^-]+-pkg[/\\](.*)$/;
const splitSubUrlRegex = /^.*\bnode_modules[/\\](.*)$/;

export async function resolve(specifier, context, nextResolver) {
  // ? Remove default conditions
  context.conditions = context.conditions.slice(3);

  const resolved = await nextResolver(specifier, context, nextResolver);
  const { url } = resolved;
  let result = '<error>';

  // ? Ensure OS-agnostic relative path (or package-relative path) is returned

  const externalMatches = url.match(splitUrlRegex);

  if (externalMatches !== null) {
    result = externalMatches[1];
    const internalMatches = result.match(splitSubUrlRegex);

    result = internalMatches !== null ? internalMatches[1].replace(/(\/|\\)index\.\w+$/, '') : `./${result}`;
  }

  // eslint-disable-next-line no-console
  console.log(`${String(specifier)} => ${result.replace('\\', '/')}`);
  return resolved;
}
