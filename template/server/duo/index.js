var Duo = require('duo');
var path = require('path');
var plugins = require('./plugins');
var root = path.resolve(__dirname, '../../');
var send = require('koa-send');

module.exports = function *(next) {
  var entry = this.path.slice(1);
  var ext = path.extname(entry).slice(1);

  var duo = Duo(root)
    .entry(entry)
    .sourceMap('inline')
    .development(true)
    .use(plugins);
    
  if (ext === 'js' || ext === 'css') { // Handle js and css
    try {
      var src = yield duo.run();
      this.body = src.code;
      this.type = ext;
    } catch (err) {
      this.throw(500, 'could not compile ' + entry + ': ' + err.message);
    }
  } else {
    yield send(this, entry, { root: root }); // Handle assets
  }
};