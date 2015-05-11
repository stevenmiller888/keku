
/**
 * Module dependencies.
 */

var views = require('co-views');

/**
 * Expose views.
 */

module.exports = views(__dirname + '/../client', {
  map: { html: 'swig' }
});
