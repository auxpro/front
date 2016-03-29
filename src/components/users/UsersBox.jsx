import React from 'react';
import UserList from './UsersList'
import RestService from './../../services/RestService'

export default class UsersBox extends React.Component {
	
	getInitialState() {
		return {data: []};
	};
  
	componentDidMount() {
		var data;
		var myThis = this;
		RestService.getUsers({token:"Basic YWRtaW46YWRtaW4="}).
		then( function(result) {
			data = JSON.parse(result);
			console.log(result);
			myThis.setState({data: data});
		}).
		catch( function(result) {
			console.log('error');
			console.log(result);
		});
	};
  
	render() {
		return (
			<div className="usersBox">
				<h1>Users</h1>
				<UsersList data={this.state.data}/>
			</div>
		);
	};
});


