
/**
 * Module dependencies.
 */

var bodyParser = require('koa-body-parser');
var serve = require('koa-static');
var mount = require('koa-mount');
var koa = require('koa');

/**
 * App.
 */

var app = koa();

/**
 * Config.
 */

app.name = '{{ name }}';
app.port = process.env.PORT || 3000;

/**
 * Serve.
 */

app.use(mount('/build'), serve('build'));

/**
 * Body parsing middleware.
 */

app.use(bodyParser());

/**
 * Listen.
 */

app.listen(app.port, function(){
  console.log('\n%s listening at http://%s/\n', app.name, app.port);
});
