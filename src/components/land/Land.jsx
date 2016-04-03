// React Modules
import React from 'react';
// Core Modules
import StoreRegistry from '../../core/StoreRegistry';
// Components
import Login from '../login/Login.jsx';
import RegisterAux from '../register/RegisterAux.jsx';
import RegisterSad from '../register/RegisterSad.jsx';


/**
 *
 */ 
export default class Land extends React.Component {

    /**
     *
     */
    constructor(props) {
        super(props);
        this.state = {
            currentAuth: 'none'
        };
    }

    /**
     *
     */
    currentAuthSetter(value) {
        return function () {
            this.setState({ currentAuth: value });
        };
    };

    /**
     *
     */
    render() { 
        switch (this.state.currentAuth) {
        case 'login':
            return (
            <Login/>
            );
        case 'regAux':
            return (
            <RegisterAux/>
            );
        case 'regSad':
            return (
            <RegisterSad/>
            );
        default:
            return (
            <div>
                <button onClick={this.currentAuthSetter('login').bind(this)}>Se Connecter</button>
                <button onClick={this.currentAuthSetter('regAux').bind(this)}>Creer Compte Auxiliaire</button>
                <button onClick={this.currentAuthSetter('regSad').bind(this)}>Creer Compte Societe</button>
                <button>Acces Invite</button>
            </div>
            );
        }
    };
}
