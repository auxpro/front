// Import React core
import React from 'react';

class AuxiliariesItem extends React.Component {

	constructor(props) {
		super(props);
	}

    render() { return (
    	<tr>
            <td>{this.props.name}</td>
            <td>{this.props.email}</td>
            <td>{this.props.firstName}</td>
            <td>{this.props.lastName}</td>
            <td>{this.props.phone}</td>
    	</tr>
    );}

    
}

export default AuxiliariesItem;