import React from 'react';

export default class RegisterAux extends React.Component {
	render() { return (
		<div>
			<h2>Créer un compte Auxiliaire</h2>
		  	<div>
		  	  	<input placeholder='Addresse électronique'/>
		  		<input placeholder='Mot de passe'/>
		  		</div>
		  	<div>
		 		<input placeholder='Nom'/>
		 		<input placeholder='Prénom'/>
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
