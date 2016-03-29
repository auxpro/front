/*eslint-disable no-unused-vars */
import React from 'react';
/*eslint-enable no-unused-vars */
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router'

import Home from './components/home/Home.jsx';
import Land from './components/land/Land.jsx';
import Login from './components/login/Login.jsx';
import Users from './components/users/Users.jsx';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Land}/>
	<Route path="/login" component={Login}/>
	<Route path="/users" component={Users}/>
  </Router>
), document.getElementById('app'))