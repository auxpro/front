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
                <button className="btn btn-default" onClick={this.guestLogin}>Acces Invite</button>
				<div className="row">
					<div className="col-sm-6 col-xs-12"> </div>
					<div className="col-sm-6 col-xs-12">
						<div>
							<p>Je Recherche un Soutien</p>
							<label>Commune</label>
							<input></input>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-3">
						<Link to="/registerAux" className="btn btn-info">Creer Compte Auxiliaire</Link>
					</div>
					<div className="col-sm-3">
						  <Link to="/registerSad" className="btn btn-primary">Creer Compte Societe</Link>
					</div>
					<div className="col-sm-3"></div>
					<div className="col-sm-3"></div>
				</div>
				<div className="row">
					<div className="col-sm-2"></div>
					<div className="col-sm-2">
						 <Link to="/login" className="btn btn-success">Se Connecter</Link>
					</div>
					<div className="col-sm-2"></div>
					<div className="col-sm-2"></div>
					<div className="col-sm-2"></div>
					<div className="col-sm-2"></div>
				</div>
            </div>
            );
    };
}

Land.contextTypes = {
		router: React.PropTypes.object
		}


export default Land;