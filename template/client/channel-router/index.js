
/**
 * Imports.
 */

import Router from 'ianstormtaylor/router';
import dispatcher from '../dispatcher';

/**
 * Expose `plugin`.
 */

export default plugin;

/**
 * Router.
 */

function plugin(options) {
  var rootUrl = '/';

  return function(app){
    var router = new Router();

    /**
     * Dispatcher.
     */

    dispatcher
      .on('router.index', () => router.go(rootUrl));
      // ...
      
    /**
     * Router.
     */

    router
      .on('/', (ctx) => app.set('currentRoute', { name: 'index' }));
      // ... add more routes

    /**
     * Start the router
     */

    requestAnimationFrame(function(){
      router.start();
    });
  };
}
