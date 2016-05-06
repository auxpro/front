// Import React Core
import React from 'react';

import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { Grid, Row, Col } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import FooterTable from './FooterTable.jsx'

class Footer extends React.Component {

	constructor(props) {
		super(props);  
	}
 
	render() { 
		var items1 = [
			{ url: '', name: 'Qui sommes-nous ?'},
			{ url: '', name: 'Nos services'}
		];
		var items2 = [
			{ url: '', name: 'CGU'},
			{ url: '', name: 'CGV'},
			{ url: '', name: 'Confidentialité'}
		];
		var items3 = [
			{ url: '', name: 'FAQ'},
			{ url: '', name: 'Aide'},
			{ url: '', name: 'Nous contacter'}
		];
		return (
		<footer className="footer"><Navbar><Grid><Row>
			<FooterTable title="AuxPro" items={items1}/>
			<FooterTable title="Informations Légales" items={items2}/>
			<FooterTable title="Questions" items={items3}/>
		</Row></Grid></Navbar></footer>
	);}
}

export default Footer;