// Import React core
import React from 'react';
// Import utilities
import Utils from '../../utils/Utils';
// Import core modules
import Dispatcher from '../../core/Dispatcher';
import StoreRegistry from '../../core/StoreRegistry';

class Login extends React.Component {

	constructor(props) {
		super(props);
        this.state = {
            error: ''
        };
	}

    componentDidMount() {
        StoreRegistry.register('ERROR_STORE', this, this.onLogonError.bind(this));
    }

    componentWillUnmount() {
        StoreRegistry.unregister('ERROR_STORE', this);   
    }

    onLogonError() {
        let error = StoreRegistry.getStore('ERROR_STORE').getData('/logon/error');
        if (error) {
            this.setState({ error: 'Echec de connexion' });
        }
    }

	login(event) {
		event.preventDefault();
    	let params = {
    		user: this.refs.user.value, 
    		pass: this.refs.pass.value
    	};
    	Dispatcher.issue("CHECK_CREDENTIALS", params);
	}

    render() { return (
    	<div>
    		<form role='form'>
    			<div className='form-group'>
    				<input type='text' ref='user' placeholder="Nom d'utilisateur ou addresse électronique" />
    				<input type='password' ref='pass' placeholder='Mot de passe' />
    			</div>
                <div>
                    {this.state.error}
                </div>
    			<button type='submit' onClick={this.login.bind(this)}>Connexion</button>
    		</form>
    	</div>
    );}

    
}

export default Login;