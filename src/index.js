import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import ThemeStore from './api/theme.store';

// Bootstrap

/**
 * App Context
 * @type {{store: {theme: {set: setTheme, get: getTheme}}, print: function}}
 * @typedef AppCtx
 */
const appCtx = {
  store: {
    theme: ThemeStore(window),
  },
  print: window.print.bind(window),
};

// Hooray
ReactDOM.render(<App appCtx={appCtx} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
