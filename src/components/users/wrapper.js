import React from 'react';
import UsersBox from './usersBox'

let Wrapper = React.createClass({

	render: function() {
	   
		var data = [
						  {id: 1, name: "Pete Hunt", email: "This is one comment"},
						  {id: 2, name: "Jordan Walke", email: "This is *another* comment"}];
		return (
		  <div className="users-wrapper">
			<h1>Hello, world! USERS</h1>
			<UsersBox />
		  </div>
		);
	}

});

export default Wrapper;
