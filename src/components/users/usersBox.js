import React from 'react';
import UserList from './usersList'
import RestService from './../../services/RestService'

let UsersBox = React.createClass({
	
	getInitialState: function() {
		return {data: []};
	},
  
	componentDidMount: function() {
		var data;
		var myThis = this;
		RestService.getUsers({token:"Basic YWRtaW46YWRtaW4="}).then(
		function(result) {
			data = JSON.parse(result);
			console.log(result);
			myThis.setState({data: data});
		}
		).catch(
		function(result) {
			console.log('error');
			console.log(result);
		}
		);
	},
  
	render: function() {
		return (
			<div className="usersBox">
				<h1>Users</h1>
				<UserList data={this.state.data} />
			</div>
		);
	}
});

export default UsersBox;


