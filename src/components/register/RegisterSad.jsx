import React from 'react';

export default class RegisterSad extends React.Component {
	render() { return (
		<div>
			<h2>Créer un compte Société</h2>
		  	<div>
		  	  	<input placeholder='Addresse électronique'/>
		  		<input placeholder='Mot de passe'/>
		  		</div>
		  	<div>
		 		<input placeholder='Nom de société'/>
		 	<div>
		 	</div>
				<input placeholder='Addresse'/>
				<input placeholder='Code Postal'/>
				<input placeholder='Ville'/>
			</div>
			<button>Créer Compte</button>
		</div>
	);}
}
