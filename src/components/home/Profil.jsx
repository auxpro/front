// Import React Core
import React from 'react';

import Dispatcher from '../../core/Dispatcher';
import StoreRegistry from '../../core/StoreRegistry';

class Profil extends React.Component {

		constructor(props) {
			super(props);
			this.state = {
				data: StoreRegistry.getStore('AUXILIARY_STORE').getData('/auxiliary/' + StoreRegistry.getStore('LOGIN_STORE').getData('/name'))
			};
		}


	componentWillMount() {
        let logged = StoreRegistry.getStore('LOGIN_STORE').getData('/logged');
		if (!logged) {
			this.context.router.push("/login");
		}
    }

	render() { 
	console.log(this.state);
	let user = StoreRegistry.getStore('LOGIN_STORE').getData('/');
		return(
		<div className="container">
			<div className="row">
					<div className="col-sm-4">
						 <img src="./../../../assets/img/profil.jpeg"/>
					</div>
					<div className="col-sm-4"></div>
					<div className="col-sm-4">
						<div>Nom: {this.state.data.firstName} {this.state.data.lastName}</div>
						<div>Adresse electronique: {this.state.data.email}</div>
						<div>Telephone: {this.state.data.phone}</div>
						<div>Diplome: {this.state.data.diploma}</div>
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
