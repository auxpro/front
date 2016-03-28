import React from 'react';

let User = React.createClass({
  render: function() {
	console.log(this.props);
    return (
      <div className="user">
        <h2 className="userName">
          {this.props.name}
        </h2>
		{this.props.children.toString()}
      </div>
    );
  }
});

export default User;


