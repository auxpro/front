import React from 'react';

export default class UserDetails extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="user">
                <h2 className="userName">{this.props.name}</h2>
                {this.props.children.toString()}
            </div>
        );
    }
});


