import React from 'react';


export default class App extends React.Component {

	constructor(props) {
		super(props);
		
	}

	onLogon() {
		console.log('reached controller callback');
    	console.log(StoreRegistry.getStore('LOGIN_STORE')._content);
		let logged = StoreRegistry.getStore('LOGIN_STORE').getData('/logged');
		if (logged) {
			this.props.history.push('/home');
		}
	}

	render() { return (
		<h1>Home</h1>
	);}
}