
/**
 * Module dependencies.
 */

var babel = require('duo-babel');
var myth = require('duo-myth');

/**
 * Expose the plugins.
 */

module.exports = [
  babel({ onlyLocals: true }),
  myth()
];