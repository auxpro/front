import React from 'react';
import Utils from '../../utils/Utils';
import CheckAuth from '../../actions/CheckAuth';
import Dispatcher from '../../core/Dispatcher';
import ActionRegistry from '../../core/ActionRegistry';
import StoreRegistry from '../../core/StoreRegistry';

/**
 *
 */
class Login extends React.Component {

	/**
	 *
	 * @constructor
	 */
	constructor(props) {
		super(props);        
	}

	/**
     *
     */
    navToHome() {
       this.props.history.push('/home');
    };

    /**
     *
     */
	login(event) {
		event.preventDefault();
		let user = this.refs.user.value
    	let pass = this.refs.pass.value
    	let params = {
    		user: user, 
    		pass: pass
    	};
    	Dispatcher.issue("CHECK_CREDENTIALS", params);
		//let action = new CheckAuth();
		//action.do();
	}

	/**
	 * 
	 */
    render() { return (
    	<div>
    		<form role='form'>
    			<div className='form-group'>
    				<input type='text' ref='user' placeholder="Nom d'utilisateur ou addresse électronique" />
    				<input type='password' ref='pass' placeholder='Mot de passe' />
    			</div>
    			<button type='submit' onClick={this.login.bind(this)}>Connexion</button>
    		</form>
    	</div>
    );}

    
}

export default Login;