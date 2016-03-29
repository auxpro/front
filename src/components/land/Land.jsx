import React from 'react';
import ReactDOM from 'react-dom';
 
export default class Land extends React.Component {
  	clicked() {
  		this.props.history.push('/login');
  	};
    render() { return (
    	<div>
  	        <button onClick={this.clicked.bind(this)}>Se Connecter</button>
  	        <button>Creer Compte Auxiliaire</button>
  	        <button>Creer Compte Societe</button>
  	        <button>Acces Invite</button>
  	    </div>
  	)};
}
