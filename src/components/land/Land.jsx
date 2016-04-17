// React Modules
import React from 'react';
import { IndexLink, Link } from 'react-router'

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
                <Link to="/login" className="btn btn-success">Se Connecter</Link>
                <Link to="/registerAux" className="btn btn-info">Creer Compte Auxiliaire</Link>
                <Link to="/registerSad" className="btn btn-primary">Creer Compte Societe</Link>
                <button className="btn btn-default" onClick={this.guestLogin}>Acces Invite</button>
            </div>
            );
    };
}

Land.contextTypes = {
		router: React.PropTypes.object
		}


export default Land;