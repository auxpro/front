// Import React Core
import React from 'react';

class Footer extends React.Component {

	render() { return (
		<footer className="footer" >
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
					<div>A Propos D'AUXPRO</div>
					<div>Qui somme nous ?</div>
					<div>Nos Services</div>
					</div>
					<div className="col-sm-4">
					<div>Informations Legales</div>
					<div>CGU</div>
					<div>CGV</div>
					<div>Confidentialité</div>
					</div>
					<div className="col-sm-4">
					<div>Questions</div>
					<div>FAQ</div>
					<div>Aide</div>
					<div>Nous Contacter</div>
					</div>
				</div>
			</div>
		</footer>
	);}
}

export default Footer;