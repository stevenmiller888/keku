
/**
 * Imports.
 */

import {tree,render,dom} from 'segmentio/deku';
import dispatcher from '../dispatcher';

/**
 * Expose `plugin`.
 */

export default plugin;

/**
 * Store.
 */

function plugin(options) {
  // ...

  /**
   * Dispatcher.
   */

  dispatcher
    .on('', () => );

  /**
   * Whenever the model changes, set a prop on the app.
   */

  return function(app){
    // ...
  };
}
