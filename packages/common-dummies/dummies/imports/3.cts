// Dynamic imports referencing an unchanged variable
const dynamicSrc = './tool.js';
var unchangedDynamicSrc = '../path/to/import.js';

require(dynamicSrc);
require(unchangedDynamicSrc);

// Non top-level dynamic imports
document.querySelector('#load-button')?.addEventListener('click', () => {
  void (async function () {
    // @ts-ignore
    await import('string-literal');
    await import(dynamicSrc);
    await import(unchangedDynamicSrc);
  })();
});
