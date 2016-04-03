// Import React Core
import React from 'react';
// Import core modules
import Dispatcher from '../../core/Dispatcher';
// Import Components
import AuxiliariesBox from '../users/auxiliaries/AuxiliariesBox.jsx'
import ServicesBox from '../users/services/ServicesBox.jsx'


export default class Home extends React.Component {

	logout() {
		event.preventDefault();
    	Dispatcher.issue("LOGOUT", {});
	}

	render() { return (
		<div>
			<button onClick={this.logout.bind(this)}>Déconnexion</button>
			<h1>Home</h1>
			<AuxiliariesBox/>
			<ServicesBox/>
		</div>
	);}
}
