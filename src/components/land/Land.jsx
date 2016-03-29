import React from 'react';
import ReactDOM from 'react-dom';

/**
 *
 */ 
export default class Land extends React.Component {

    constructor(props) {
        super(props);
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
    render() { return (
      <div>
            <button onClick={this.navToLogin.bind(this)}>Se Connecter</button>
            <button onClick={this.navToRegisterAux.bind(this)}>Creer Compte Auxiliaire</button>
            <button onClick={this.navToRegisterSad.bind(this)}>Creer Compte Societe</button>
            <button>Acces Invite</button>
        </div>
    )};
}
