/** @jsx dom */

/**
 * Imports.
 */

import {tree,render,dom} from 'deku';
import router from './channel-router';
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
 * Render.
 */

render(app, document.body);
