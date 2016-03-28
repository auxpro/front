import React from 'react';
import User from './user'

let UserList = React.createClass({
  render: function() {
    var userNodes = this.props.data.map(function(user) {
      return (
        <User name={user.name} key={user.email}>
          {user.email}
        </User>
      );
    });
    return (
      <div className="userList">
        {userNodes}
      </div>
    );
  }
});

export default UserList;


