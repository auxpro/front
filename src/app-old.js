/*eslint-disable no-unused-vars */
import React from 'react';
/*eslint-enable no-unused-vars */
import ReactDOM from 'react-dom';
import Router from 'react-router';

import RestService from './services/RestService';

console.log(RestService.getUsers({token:"Basic YWRtaW46YWRtaW4="}));


ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('hello')
);



var MYRENDERER = {};
var data;
RestService.getUsers({token:"Basic YWRtaW46YWRtaW4="}).then(
function(result) {
	data = JSON.parse(result);
	console.log(result);
	MYRENDERER.render();
}
).catch(
function(result) {
	console.log('error');
	//console.log(result);
}
);

var marked = require('react-marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});
/*
var data = [
  {id: 1, name: "Pete Hunt", email: "This is one comment"},
  {id: 2, name: "Jordan Walke", email: "This is *another* comment"}
];
*/
var User = React.createClass({
  render: function() {
	console.log(this.props);
    return (
      <div className="user">
        <h2 className="userName">
          {this.props.name}
        </h2>
		{marked(this.props.children.toString())}
      </div>
    );
  }
});;
//        {marked(this.props.children.toString())}

var UserList = React.createClass({
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

var UsersBox = React.createClass({
  render: function() {
    return (
      <div className="usersBox">
		<h1>Users</h1>
        <UserList data={this.props.data} />
      </div>
    );
  }
});
MYRENDERER.render = function() { 
console.log("data");
console.log(data);
ReactDOM.render(
  <UsersBox data={data} />,
  document.getElementById('content')
);
};