/** @jsx dom */

/**
 * Imports.
 */

import {dom} from 'deku';

/**
 * Define `App` properties.
 */

export var propTypes = {
  route: { type: 'object', source: 'currentRoute' }
};

/**
 * Render.
 */

export function render({ props, state }, setState){
  let route = props.route;

  // Keep UI transitions clean
  if (!route) return <noscript></noscript>;

  return (
    <div class='App'>
      <h1>{route.name}</h1>
    </div>
  );
}