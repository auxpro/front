// React Modules
import React from 'react';
// Core Modules
import Dispatcher from '../../core/Dispatcher';
import StoreRegistry from '../../core/StoreRegistry';
// Components
import Login from '../login/Login.jsx';
import RegisterAux from '../register/RegisterAux.jsx';
import RegisterSad from '../register/RegisterSad.jsx';

export default class Land extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentAuth: 'none'
        };
    }

    currentAuthSetter(value) {
        return function (event) {
            event.preventDefault();
            this.setState({ currentAuth: value });
        };
    };

    handleCancel(event) {
        this.currentAuthSetter('none').bind(this)(event);
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
        switch (this.state.currentAuth) {
        case 'login':
            return (
            <Login onCancel={this.handleCancel.bind(this)}/>
            );
        case 'regAux':
            return (
            <RegisterAux onCancel={this.handleCancel.bind(this)}/>
            );
        case 'regSad':
            return (
            <RegisterSad onCancel={this.handleCancel.bind(this)}/>
            );
        default:
            return (
            <div className="container">
                <button className="btn btn-success" onClick={this.currentAuthSetter('login').bind(this)}>Se Connecter</button>
                <button className="btn btn-info" onClick={this.currentAuthSetter('regAux').bind(this)}>Creer Compte Auxiliaire</button>
                <button className="btn btn-primary" onClick={this.currentAuthSetter('regSad').bind(this)}>Creer Compte Societe</button>
                <button className="btn btn-default" onClick={this.guestLogin}>Acces Invite</button>
            </div>
            );
        }
    };
}
