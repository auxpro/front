/*eslint-disable no-unused-vars */
import React from 'react';
/*eslint-enable no-unused-vars */
import ReactDOM from 'react-dom';

import { Router, Route, hashHistory } from 'react-router'

import Header from './components/app/Header.jsx';
import Main from './components/app/Main.jsx';
import Footer from './components/app/Footer.jsx';

import Bootstrap from './core/Bootstrap.js';

ReactDOM.render((
	<div>
		<Header/>
	  	<h1>AUXPRO</h1>
		<Router history={hashHistory}>
			<Route path="/" component={Main}/>
		</Router>
		<Footer/>
	</div>
), document.getElementById('app'))