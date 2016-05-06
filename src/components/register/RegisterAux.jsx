// Import React modules
import React from 'react';
// react-bootstrap modules
import { Button, Panel, Nav, Navbar } from 'react-bootstrap'
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { Grid, Row, Col } from 'react-bootstrap'
// react-router-bootstrap modules
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

// Import Core modules
import Dispatcher from '../../core/Dispatcher';

class RegisterAux extends React.Component {
	
	constructor(props) {
		super(props);
        this.state = {
            error: ''
        };
	}

	register() {
		event.preventDefault();
    	let params = {
    		name: this.state.user, 
    		email: this.state.user, 
    		password: this.state.pass
    	};
    	Dispatcher.issue("POST_AUXILIARY", params);
		this.context.router.push("/");
	}

	handleEmailChanged(e) {  this.state.user = e.target.value; }
    handlePasswordChanged(e) { this.state.pass = e.target.value; }

	render() { return (
		<div className="container">
			<br/>
            <Col smOffset={1} sm={10} mdOffset={2} md={8}>
            <Panel 
                header={this.state.error?this.state.error:'Création compte Auxiliaire'} 
                bsStyle={this.state.error?'danger':'default'}>
            <Form onSubmit={this.register.bind(this)}>
                <FormGroup controlId='user'>
                    <ControlLabel>Adresse électronique</ControlLabel>
                    <FormControl typeDISABLED='email' onChange={this.handleEmailChanged.bind(this)} placeholder='Adresse électronique'/>
                </FormGroup>
                <FormGroup controlId='pass'>
                    <ControlLabel>Mot de passe</ControlLabel>
                    <FormControl type='password' onChange={this.handlePasswordChanged.bind(this)}  placeholder='Mot de passe'/>
                </FormGroup>
                <br/>
                <Row>
                <Col sm={6} md={5} mdOffset={1} lg={4} lgOffset={2}>
                    <Button type='submit' bsStyle='success' bsSize='large' block>Créer Compte</Button>
                </Col>
                <br className="visible-xs-block"/>
                <Col sm={6} md={5} lg={4}>
                    <LinkContainer to='/'>
                        <Button bsStyle='default' bsSize='large' block>Annuler</Button>
                    </LinkContainer>
                </Col>                
                </Row>
            </Form>
            </Panel>
            </Col>
            <br/>
		</div>
	);}
}

RegisterAux.contextTypes = {
		router: React.PropTypes.object
		}

export default RegisterAux;
