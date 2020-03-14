import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './client/App';

import'bootstrap/dist/css/bootstrap.min.css';
import $ from'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Provider } from 'react-redux';
import { Store } from './store';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={Store}>
  <App />
</Provider>, document.getElementById('root'));

serviceWorker.unregister()