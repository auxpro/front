import ObjectBase from './ObjectBase.js';

/**
 * This class lists the available stores in the application.
 * It is used as single entry point to access stores.
 */
class StoreRegistry extends ObjectBase {

	/**
	 * 
	 * @constructor
	 */
	constructor () {
		super({ name: 'StoreRegistry'});
		this._stores = {};
	}

	/**
	 * 
	 * @public
	 */
	registerStore (store) {
		if (store.getName()) {
			console.log('StoreRegistry.register: ' + store.getName());
			this._stores[store.getName().toLowerCase()] = store;
		} else {
			console.log('StoreRegistry.register: cannot registerr store with no name');
		}
	}

	/**
	 * 
	 * @public
	 */
	register (store, object, callback) {
		this._getStore(store).register(object, callback);
	}

	/**
	 * 
	 * @public
	 */
	unregister (store, object) {
    	this._getStore(store).unregister(object);
    }

    /**
	 * 
	 * @public
	 */
    getStore (store) {
    	return this._stores[store.toLowerCase()];
    }

    /**
	 * 
	 * @public
	 */
    _getStore (store) {
    	var s = this._stores[store.toLowerCase()];
    	if (s && s.register && s.unregister) {
    		return s;
    	} else {
    		if (s) {
    			if (s.register) {
    				throw "StoreRegistry.ERR: " + store + " missing unregister";
    			} else {
    				throw "StoreRegistry.ERR: " + store + " missing register";
    			}
    		} else {
    			throw "StoreRegistry.ERR: " + store + " missing store";
    		}
       	}
    };
}

// Singleton pattern: creates the StoreRegistry instance
var StoRegistry = new StoreRegistry();

// Exports the StoreRegistry unique instance
export default StoRegistry;