/*eslint-disable no-unused-vars */
import React from 'react';
/*eslint-enable no-unused-vars */
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import Dispatcher from '../../core/Dispatcher';
import StoreRegistry from '../../core/StoreRegistry';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {

	componentDidMount() {
        StoreRegistry.register('LOGIN_STORE', this, this.onLogon.bind(this));
    }

    componentWillUnmount() {
        StoreRegistry.unregister('LOGIN_STORE', this);   
    }
	
	onLogon() {
		let logged = StoreRegistry.getStore('LOGIN_STORE').getData('/logged');
		if (logged) {
			this.context.router.push("/home");
		} else {
			this.context.router.push("/");
		}
	}

	render() { return (
		<div>
		<Header/>
		{this.props.children}
		<Footer/>
	</div>
	);}
}

App.contextTypes = {
		router: React.PropTypes.object
		}

export default App;
