// @ts-check

import {
  assertEnvironment,
  moduleExport
} from '@-xun/symbiote/assets/eslint.config.mjs';

import { createDebugLogger } from 'rejoinder';

const debug = createDebugLogger({ namespace: 'symbiote:config:eslint' });

const config = moduleExport({
  derivedAliases: getEslintAliases(),
  ...(await assertEnvironment())
});

config.push({
  /* Add custom config here, such as disabling certain rules */
  ignores: ['**/packages/common-dummies/dummies/**/*']
});

export default config;

debug('exported config: %O', config);

function getEslintAliases() {
  // ! These aliases are auto-generated by symbiote. Instead of modifying them
  // ! directly, consider regenerating aliases across the entire project with:
  // ! `npx symbiote project renovate --regenerate-assets --assets-preset ...`
  return [
    ['multiverse+common-dummies:*', './packages/common-dummies/src/*'],
    ['multiverse+jest:*', './packages/jest/src/*'],
    ['multiverse+test-mock-argv:*', './packages/test-mock-argv/src/*'],
    ['multiverse+test-mock-env:*', './packages/test-mock-env/src/*'],
    ['multiverse+test-mock-exit:*', './packages/test-mock-exit/src/*'],
    ['multiverse+test-mock-fixture:*', './packages/test-mock-fixture/src/*'],
    ['multiverse+test-mock-import:*', './packages/test-mock-import/src/*'],
    ['multiverse+test-mock-output:*', './packages/test-mock-output/src/*'],
    ['multiverse+common-dummies', './packages/common-dummies/src/index.ts'],
    ['multiverse+jest', './packages/jest/src/index.ts'],
    ['multiverse+test-mock-argv', './packages/test-mock-argv/src/index.ts'],
    ['multiverse+test-mock-env', './packages/test-mock-env/src/index.ts'],
    ['multiverse+test-mock-exit', './packages/test-mock-exit/src/index.ts'],
    ['multiverse+test-mock-fixture', './packages/test-mock-fixture/src/index.ts'],
    ['multiverse+test-mock-import', './packages/test-mock-import/src/index.ts'],
    ['multiverse+test-mock-output', './packages/test-mock-output/src/index.ts'],
    ['rootverse+common-dummies:*', './packages/common-dummies/*'],
    ['rootverse+jest:*', './packages/jest/*'],
    ['rootverse+test-mock-argv:*', './packages/test-mock-argv/*'],
    ['rootverse+test-mock-env:*', './packages/test-mock-env/*'],
    ['rootverse+test-mock-exit:*', './packages/test-mock-exit/*'],
    ['rootverse+test-mock-fixture:*', './packages/test-mock-fixture/*'],
    ['rootverse+test-mock-import:*', './packages/test-mock-import/*'],
    ['rootverse+test-mock-output:*', './packages/test-mock-output/*'],
    ['rootverse:*', './*'],
    ['universe+common-dummies:*', './packages/common-dummies/src/*'],
    ['universe+jest:*', './packages/jest/src/*'],
    ['universe+test-mock-argv:*', './packages/test-mock-argv/src/*'],
    ['universe+test-mock-env:*', './packages/test-mock-env/src/*'],
    ['universe+test-mock-exit:*', './packages/test-mock-exit/src/*'],
    ['universe+test-mock-fixture:*', './packages/test-mock-fixture/src/*'],
    ['universe+test-mock-import:*', './packages/test-mock-import/src/*'],
    ['universe+test-mock-output:*', './packages/test-mock-output/src/*'],
    ['universe+common-dummies', './packages/common-dummies/src/index.ts'],
    ['universe+jest', './packages/jest/src/index.ts'],
    ['universe+test-mock-argv', './packages/test-mock-argv/src/index.ts'],
    ['universe+test-mock-env', './packages/test-mock-env/src/index.ts'],
    ['universe+test-mock-exit', './packages/test-mock-exit/src/index.ts'],
    ['universe+test-mock-fixture', './packages/test-mock-fixture/src/index.ts'],
    ['universe+test-mock-import', './packages/test-mock-import/src/index.ts'],
    ['universe+test-mock-output', './packages/test-mock-output/src/index.ts'],
    ['universe:*', './src/*'],
    ['universe', './src/index.ts'],
    ['testverse+common-dummies:*', './packages/common-dummies/test/*'],
    ['testverse+jest:*', './packages/jest/test/*'],
    ['testverse+test-mock-argv:*', './packages/test-mock-argv/test/*'],
    ['testverse+test-mock-env:*', './packages/test-mock-env/test/*'],
    ['testverse+test-mock-exit:*', './packages/test-mock-exit/test/*'],
    ['testverse+test-mock-fixture:*', './packages/test-mock-fixture/test/*'],
    ['testverse+test-mock-import:*', './packages/test-mock-import/test/*'],
    ['testverse+test-mock-output:*', './packages/test-mock-output/test/*'],
    ['testverse:*', './test/*'],
    ['typeverse:*', './types/*']
  ];
}
