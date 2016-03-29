import React from 'react';
import UserDetails from './UserDetails'

export default class UsersList extends React.Component {
    render() {
        var userNodes = this.props.data.map(function(user) {
            return (
                <UserDetails name={user.name} key={user.email}>{user.email}</UserDetails>
            );
        });
        return (
            <div className="userList">{userNodes}</div>
        );
    }
});


