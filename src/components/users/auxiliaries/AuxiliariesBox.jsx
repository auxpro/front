// Import React core
import React from 'react';
// Import utilities
import Utils from '../../../utils/Utils';
// Import core objects
import Dispatcher from '../../../core/Dispatcher';
import StoreRegistry from '../../../core/StoreRegistry';
// Import components
import AuxiliariesList from './AuxiliariesList.jsx';

class AuxiliariesBox extends React.Component {

	constructor(props) {
		super(props);
        StoreRegistry.getStore('AUXILIARY_STORE').register(this, this.onAuxiliaryUpdate.bind(this));
        this.state = {
            data: []
        };
	}

    onAuxiliaryUpdate() {
        this.setState({ data: StoreRegistry.getStore('AUXILIARY_STORE').getData('/auxiliaries') });
    }

    componentDidMount () {
        var params = { token: StoreRegistry.getStore('LOGIN_STORE').getData('/token') }
        Dispatcher.issue('GET_AUXILIARIES', params);
    }

    render() { return (
    	<div>
    		<h2>Auxiliares de santé</h2>
            <AuxiliariesList data={this.state.data}/>
            <h2>Sociétés d'aide a la personne</h2>
    	</div>
    );}

    
}

export default AuxiliariesBox;