// Import React Core
import React from 'react';
// Import Components
import AuxiliariesBox from '../users/auxiliaries/AuxiliariesBox.jsx'
import ServicesBox from '../users/services/ServicesBox.jsx'

import Dispatcher from '../../core/Dispatcher';
import StoreRegistry from '../../core/StoreRegistry';

class Home extends React.Component {

	componentWillMount() {
		console.log("home mount");
        let logged = StoreRegistry.getStore('LOGIN_STORE').getData('/logged');
		if (!logged) {
			this.context.router.push("/login");
		}
    }

	logout(event) {
		event.preventDefault();
    	Dispatcher.issue("LOGOUT", {});
	}

	render() { return (
		<div className="container">
			<button onClick={this.logout.bind(this)}>Déconnexion</button>
			<h1>Home</h1>
			<AuxiliariesBox/>
			<ServicesBox/>
		</div>
	);}
}

Home.contextTypes = {
		router: React.PropTypes.object
		}


export default Home;
