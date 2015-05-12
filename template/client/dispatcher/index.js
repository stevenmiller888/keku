
/**
 * Imports.
 */

import events from 'events';

/**
 * Expose a singleton emitter
 */

var Emitter = events.EventEmitter;
export default new Emitter();