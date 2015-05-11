
/**
 * Module dependencies.
 */

var bodyParser = require('koa-body-parser');
var logger = require('koa-logger');
var render = require('./render');
var koa = require('koa');

/**
 * App.
 */

var app = koa();

/**
 * Logging middleware.
 */

app.use(logger());

/**
 * Body parsing middleware.
 */

app.use(bodyParser());

/**
 * Render.
 */

app.use(function *(){
  yield render('index');
});

/**
 * Listen.
 */

app.listen(process.env.PORT || 3000);
