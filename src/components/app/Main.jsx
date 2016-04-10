import React from 'react';
import Land from '../land/Land.jsx';
import Home from '../home/Home.jsx';
import StoreRegistry from '../../core/StoreRegistry';
export default class Main extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isLogged: false
		};
	}

	componentDidMount() {
        StoreRegistry.register('LOGIN_STORE', this, this.onLogon.bind(this));
    }

    componentWillUnmount() {
        StoreRegistry.unregister('LOGIN_STORE', this);   
    }

	onLogon() {
		let logged = StoreRegistry.getStore('LOGIN_STORE').getData('/logged');
		if (logged) {
			this.setState({ isLogged: true });
		} else {
			this.setState({ isLogged: false });
		}
	}

	render() { 
		if (this.state.isLogged) {
			return(
				<Home/>
			);
		} else {
			return(
				<Land/>
			);
		}
	}
}