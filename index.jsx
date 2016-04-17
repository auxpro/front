import 'bootstrap/dist/css/bootstrap.css';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Bootstrap from './src/core/Bootstrap.js';

import App from './src/components/app/App.jsx'
import Land from './src/components/land/Land.jsx'
import Home from './src/components/home/Home.jsx'
import About from './src/components/about/About.jsx'
import Login from './src/components/login/Login.jsx'
import RegisterAux from './src/components/register/RegisterAux.jsx'
import RegisterSad from './src/components/register/RegisterSad.jsx'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
		<IndexRoute component={Land}/>
		<Route path="/about" component={About}/>
		<Route path="/login" component={Login}/>
		<Route path="/home" component={Home}/>
		<Route path="/registerAux" component={RegisterAux}/>
		<Route path="/registerSad" component={RegisterSad}/>
	</Route>
  </Router>
), document.getElementById('app'))