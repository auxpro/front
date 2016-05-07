// react modules
import React from 'react';

// core modules
import Dispatcher from '../../core/Dispatcher';
import StoreRegistry from '../../core/StoreRegistry';
// custom modules
import AuxiliariesBox from '../users/auxiliaries/AuxiliariesBox.jsx'
import ServicesBox from '../users/services/ServicesBox.jsx'
import Profil from './Profil.jsx'

class Home extends React.Component {

	componentWillMount() {
        let logged = StoreRegistry.getStore('LOGIN_STORE').getData('/logged');
		if (!logged) {
			this.context.router.push('/login');
		}
    }

	render() { 
		let type = StoreRegistry.getStore('LOGIN_STORE').getData('/type');
		switch (type){
			case 'services' :
			case 'auxiliary' : 
				return (
					<div className='container'>
						<Profil/>
					</div>
				);
			 case 'admin' :
			 case 'guest' :
				return (
					<div className='container'>
						<h1>Home</h1>
						<AuxiliariesBox/>
						<ServicesBox/>
					</div>
				);
			default: 
				return (
					<div className='container'>
						Utilisateur Non Typé
					</div>
				);
		}
	}
}

Home.contextTypes = {
	router: React.PropTypes.object
}

export default Home;
