/*eslint-disable no-unused-vars */
import React from 'react';
/*eslint-enable no-unused-vars */
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router'

import App from './components/app/App.jsx';

import Bootstrap from './core/Bootstrap.js';

ReactDOM.render((
  <Router history={hashHistory}>
  	<Route path="/" component={App}/>
  </Router>
), document.getElementById('app'))