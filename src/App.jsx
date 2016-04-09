import 'bootstrap/dist/css/bootstrap.css';

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
		<div className="container">
			<div className="page-header">
	  			<h1>AUXPRO</h1>
	  		</div>
				<Router history={hashHistory}>
					<Route path="/" component={Main}/>
				</Router>
			<Footer/>
		</div>
	</div>
), document.getElementById('app'))