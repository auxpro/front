// Import React modules
import React from 'react';
import { Link } from 'react-router'
// Import Core modules
import Dispatcher from '../../core/Dispatcher';

class RegisterAux extends React.Component {

	register() {
		event.preventDefault();
    	let params = {
    		name: this.refs.name.value, 
    		email: this.refs.email.value, 
    		password: this.refs.password.value,
    		firstName: this.refs.firstName.value,
    		lastName: this.refs.lastName.value,
    		phone: this.refs.phone.value,
			civility: "Mr",
    		address: {
    			address: this.refs.address.value,
    			postalCode: this.refs.postalCode.value,
    			city: this.refs.city.value
    		}

    	};
    	Dispatcher.issue("POST_AUXILIARY", params);
		this.context.router.push("/");
	}

	render() { return (
		<div>
			<h2>Créer un compte Auxiliaire</h2>
		  	<div>
		  		<input ref='name' placeholder="Nom d'utilisateur"/>
		  	  	<input ref='email' placeholder='Addresse électronique'/>
		  		<input ref='password' placeholder='Mot de passe'/>
		  		</div>
		  	<div>
		 		<input ref='firstName' placeholder='Nom'/>
		 		<input ref='lastName' placeholder='Prénom'/>
		 		<input ref='phone' placeholder='Téléphone'/>
		 	<div>
		 	</div>
				<input ref='address' placeholder='Addresse'/>
				<input ref='postalCode' placeholder='Code Postal'/>
				<input ref='city' placeholder='Ville'/>
			</div>
			<button onClick={this.register.bind(this)}>Créer Compte</button>
			<Link to="/" className="btn btn-default" >Annuler</Link>
		</div>
	);}
}

RegisterAux.contextTypes = {
		router: React.PropTypes.object
		}

export default RegisterAux;
