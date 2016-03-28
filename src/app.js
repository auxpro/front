/*eslint-disable no-unused-vars */
import React from 'react';
/*eslint-enable no-unused-vars */
import ReactDOM from 'react-dom';

import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import Home from './components/home/wrapper'
import Login from './components/login/wrapper'
import Users from './components/users/wrapper'


ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('hello')
);


render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
	<Route path="/login" component={Login}/>
	<Route path="/users" component={Users}/>
  </Router>
), document.getElementById('app'))