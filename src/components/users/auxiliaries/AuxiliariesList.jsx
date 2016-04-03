// Import React core
import React from 'react';
// Import utilities
import Utils from '../../../utils/Utils';
// Import components
import AuxiliaryItem from './AuxiliaryItem.jsx';

class AuxiliariesList extends React.Component {

	constructor(props) {
		super(props);
	}

    render() { 
        console.log(this.props);
        //
        var nodes = this.props.data.map(function(user) {
            return (
                <AuxiliaryItem 
                    key={user.name}
                    name={user.name} 
                    email={user.email}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    phone={user.phone}/>
            );
        });
        return (
    	<table>    
            <thead>
                <AuxiliaryItem name='Nom' key='header' email='Address électronique' firstName='Prénom' lastName='Nom' phone='Téléphone'/>
            </thead>
            <tbody>
                {nodes}
            </tbody>
    	</table>
    );}

    
}

export default AuxiliariesList;