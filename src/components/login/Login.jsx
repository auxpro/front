import React from 'react';
import Utils from '../../utils/Utils';
import CheckAuth from '../../actions/CheckAuth';

/**
 *
 */
export default class Login extends React.Component {

	/**
	 *
	 */
	constructor(props) {
		super(props);
		console.log(Utils.encode('admin', 'secret'));
		console.log('login const');
		let action = new CheckAuth();
		action.do({user:'admin',pass:'secret'});
	}

	/*
	 *
	 */
    render() { return (
    	<div>
    		<input placeholder='email'/>
    		<input placeholder='password'/>
    		<button>Connexion</button>
    	</div>
    );}
}
