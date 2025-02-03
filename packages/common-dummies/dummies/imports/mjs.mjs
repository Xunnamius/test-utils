// one.ts + two.mts but with .js

// @ts-ignore
const React = require('react');
// @ts-ignore
const { niceTool, helper: someHelper } = require('./some-utils.js');

// Duplicated import
// @ts-ignore
const { somethingAwful } = require('./some-utils.js');

// Dynamic imports -or- importing for side effects only
require('side-effects.js');

// Extension doesn't matter
// @ts-ignore
const styles = require('./styles.css');

// Importing all as namespace
// @ts-ignore
const namespaceImport = require('some-lib');

// Exporting from source
// @ts-ignore
module.exports.something = require('./source.js');

// Exporting everything from a source
// @ts-ignore
module.exports = require('./another-source.js');

// Dynamic imports referencing an unchanged variable
const dynamicSrc = './tool.js';
var unchangedDynamicSrc = '../path/to/import.js';

require(dynamicSrc);
require(unchangedDynamicSrc);

// Non top-level dynamic imports
document.querySelector('#load-button')?.addEventListener('click', () => {
  (function () {
    // @ts-ignore
    require('string-literal');
    require(dynamicSrc);
    require(unchangedDynamicSrc);
  })();
});
