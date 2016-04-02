import React from 'react';
import ReactDOM from 'react-dom';
import StoreRegistry from '../../core/StoreRegistry';

/**
 *
 */ 
export default class Land extends React.Component {

    constructor(props) {
        super(props);
        StoreRegistry.getStore('LOGIN_STORE').register(this, this.onLogon.bind(this));
    }

    /**
     *
     */
    navToLogin() {
       this.props.history.push('/login');
    };

    /**
     *
     */
    navToRegisterAux() {
        this.props.history.push('/register/aux');
    };

    /**
     *
     */
    navToRegisterSad() {
        this.props.history.push('/register/sad');
    };

    /**
     *
     */
    onLogon() {
        let logged = StoreRegistry.getStore('LOGIN_STORE').getData('/logged');
        if (logged) {
            this.props.history.push('/home');
        }
    }

    /**
     *
     */
    render() { return (
      <div>
            <button onClick={this.navToLogin.bind(this)}>Se Connecter</button>
            <button onClick={this.navToRegisterAux.bind(this)}>Creer Compte Auxiliaire</button>
            <button onClick={this.navToRegisterSad.bind(this)}>Creer Compte Societe</button>
            <button>Acces Invite</button>
        </div>
    )};
}
