
/**
 * Module dependencies.
 */

var stream = require('fs').createReadStream;
var bodyParser = require('koa-body-parser');
var logger = require('koa-logger');
var join = require('path').join;
var koa = require('koa');

/**
 * Configure the app.
 */

var app = koa();
app.port = process.env.PORT || 3000;

/**
 * Logging middleware.
 */

app.use(logger());

/**
 * Body parsing middleware.
 */

app.use(bodyParser());

/**
 * Serve build.js / build.css
 */

app.use(function*(next){
  var skip = !/^\/build\.(?:js|css)$/.test(this.path);

  if (skip || 'GET' != this.method) {
    yield next;
    return;
  }

  var i = this.path.indexOf('.');
  this.type = this.path.slice(i);
  this.body = stream(root(this.path.slice(1)));
});

/**
 * Serve index.html
 */

app.use(function*(){
  if (this.accepts('html')) {
    this.type = 'html';
    this.body = stream(root('index.html'));
  }
});

/**
 * Listen.
 */

app.listen(app.port, function(){
  console.log('\nListening at http://localhost:%s\n', app.port);
});

/**
 * Return the root path of `path`.
 */

function root(path){
  return join(process.cwd(), path);
}
