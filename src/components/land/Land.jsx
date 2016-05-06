// react Modules
import React from 'react';
// react-bootstrap modules
import { Button, Panel } from 'react-bootstrap'
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { Grid, Row, Col } from 'react-bootstrap'
// react-router-bootstrap modules
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

import { IndexLink, Link } from 'react-router'
// custom modules
import Dispatcher from '../../core/Dispatcher';
import StoreRegistry from '../../core/StoreRegistry';

class Land extends React.Component {

    constructor(props) {
        super(props);
    }
	
	componentDidMount() {
        let logged = StoreRegistry.getStore('LOGIN_STORE').getData('/logged');
		if (logged) {
			this.context.router.push("/home");
		}
    }
	
    guestLogin(event) {
        event.preventDefault();
        let params = {
            user: 'guest', 
            pass: 'guest'
        };
        Dispatcher.issue('LOGON', params);
    }

    render() { 
            return (
            <div className="container">
            	<br/>
            	<Grid>
            		<Row>
            			<Col sm={6} xs={12}>
            				<Panel header="Je recherche un soutien">
	            				<Form horizontal>
    								<FormGroup controlId="formHorizontalEmail">
    									<Col sm={3} componentClass={ControlLabel}>
    										Commune
    									</Col>
    									<Col sm={9}>
    										<FormControl placeholder="Code postal" />
    									</Col>
    								</FormGroup>
    								<FormGroup>
    									<Col smOffset={3} sm={9}>
    										<Button onClick={this.guestLogin}>Valider</Button>
    									</Col>
    								</FormGroup>
    							</Form>
    						</Panel>
            				<Row>
            					<Col smOffset={1} sm={5} mdOffset={2} md={4}>
            						<LinkContainer to='/registerAux'>
                        				<Button bsStyle="info" block>Créer Compte<br/>Auxiliaire</Button>
                    				</LinkContainer>
                    			</Col>
                    			<br className="visible-xs-block"/>
                    			<Col sm={5} md={4}>
                    				<LinkContainer to='/registerSad'>
	                        			<Button bsStyle="primary" block>Créer Compte<br/>Société</Button>
    	                			</LinkContainer>
    	                		</Col>
    	                	</Row>
    	                	<br/>
    	                	<Row>
    	                		<Col smOffset={4} sm={4}>
    	                			<LinkContainer to='/login'>
                        				<Button bsStyle="success" block>Connexion</Button>
                    				</LinkContainer>
                    			</Col>
                    		</Row>
            			</Col>
            		</Row>
            	</Grid>
            	<br/>
            </div>
            );
    };
}

Land.contextTypes = {
	router: React.PropTypes.object
}

export default Land;