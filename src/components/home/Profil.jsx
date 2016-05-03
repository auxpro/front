// Import React Core
import React from 'react';

import Dispatcher from '../../core/Dispatcher';
import StoreRegistry from '../../core/StoreRegistry';

class Profil extends React.Component {

	componentWillMount() {
        let logged = StoreRegistry.getStore('LOGIN_STORE').getData('/logged');
		if (!logged) {
			this.context.router.push("/login");
		}
    }

	render() { 
	let user = StoreRegistry.getStore('LOGIN_STORE').getData('/');
		return(
		<div className="container">
			<div className="row">
					<div className="col-sm-3">
						 <img src="./../../../assets/img/profil.jpeg"/>
					</div>
					<div className="col-sm-3"></div>
					<div className="col-sm-3"></div>
					<div className="col-sm-3">
						Nom: {user.name}
						Adresse electronique: {user.email}
					</div>
				</div>
		</div>
		);
	}
}

Profil.contextTypes = {
		router: React.PropTypes.object
		}


export default Profil;
