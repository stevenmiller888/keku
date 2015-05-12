
/**
 * Imports.
 */

import router from 'page';
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

    /**
     * Dispatcher.
     */

    dispatcher.on('router.index', () => router.show(rootUrl));
    // ...
      
    /**
     * Router.
     */

    router('/', () => app.set('currentRoute', { name: 'index' }));
    // ... add more routes

    /**
     * Start the router
     */

    requestAnimationFrame(function(){
      router.start();
    });
  };
}
