import Dispatcher from '../core/Dispatcher.js';
import StoreBase from '../core/StoreBase.js';

var DEFAULT_CONTENT = { auxiliaries: [] };

var AuxiliaryStore = new StoreBase ({ 
	name: 'AUXILIARY_STORE',
	content: DEFAULT_CONTENT
});

AuxiliaryStore.onGetAuxiliaries = function (args) {
	AuxiliaryStore._content.auxiliaries = args;
	AuxiliaryStore.notify();
};

Dispatcher.register('GET_AUXILIARIES', AuxiliaryStore.onGetAuxiliaries);

export default AuxiliaryStore;