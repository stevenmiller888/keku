
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

    /**
     * Router.
     */

    router
      .on('/', (ctx) => app.set('route', { name: 'index' });

    /**
     * Start the router
     */

    requestAnimationFrame(function(){
      router.start();
    });
  };
}
