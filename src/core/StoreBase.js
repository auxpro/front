import ObjectBase from './ObjectBase.js';
import StoreRegistry from './StoreRegistry.js';

/**
 *
 */
export default class StoreBase extends ObjectBase {

	/**
	 *
	 */
	constructor(props) {
		super(props);
		this._content = props.content || {};
		this._callbacks = [];
		StoreRegistry.registerStore(this);
	}

	/**
	 *
	 */
	notify() {
		let length = this._callbacks.length;
		for (let i = 0 ; i < length ; i++) {
			let current = this._callbacks[i];
			current.callback();
		}
	}

	/**
	 *
	 */
	register(controller, callback) {
		if (callback) {
			this._callbacks.push({
				controller: controller,
				callback: callback
			})
		}
	}

	/**
	 *
	 */
	unregister(controller) {
		let length = this._callbacks.length;
		for (let i = 0 ; i < length ; i++) {
			let current = this._callbacks[i];
			if (current.controller === controller) {
				// remove the controller here
			}
		}
	}
}