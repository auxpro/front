/*eslint-disable no-unused-vars */
import React from 'react';
/*eslint-enable no-unused-vars */
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory, DefaultRoute } from 'react-router'

import App from './components/app/App.jsx';
import Land from './components/land/Land.jsx';
import Login from './components/login/Login.jsx';
import RegisterAux from './components/register/RegisterAux.jsx';
import RegisterSad from './components/register/RegisterSad.jsx';
import Home from './components/home/Home.jsx';

import Bootstrap from './core/Bootstrap.js';

ReactDOM.render((
  <Router history={hashHistory}>
  	<Route path="/" component={Land}/>
	<Route path="/login" component={Login}/>
	<Route path="/register/aux" component={RegisterAux}/>
	<Route path="/register/sad" component={RegisterSad}/>
	<Route path="/home" component={Home}/>
  </Router>
), document.getElementById('app'))