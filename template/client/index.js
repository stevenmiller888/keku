
/**
 * Imports.
 */

import {tree,render,dom} from 'segmentio/deku';
import * as App from './app';

/**
 * App.
 */

var app = tree(<App/>);

/**
 * Create the router channel.
 */

app.use(router());

/**
 * Create the store channel.
 */

app.use(store());

/**
 * Render.
 */

render(app, document.body);
