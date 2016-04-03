// Import React core
import React from 'react';
// Import components
import ServiceItem from './ServiceItem.jsx';

class ServicesList extends React.Component {

	constructor(props) {
		super(props);
	}

    render() { 
        var nodes = this.props.data.map(function(user) {
            return (
                <ServiceItem 
                    key={user.name}
                    name={user.name} 
                    email={user.email}
                    society={user.society}
                    phone={user.phone}/>
            );
        });
        return (
    	<table>    
            <thead>
                <ServiceItem name='Nom' key='header' email='Address électronique' society='Société' lastName='Nom' phone='Téléphone'/>
            </thead>
            <tbody>
                {nodes}
            </tbody>
    	</table>
    );}

    
}

export default ServicesList;