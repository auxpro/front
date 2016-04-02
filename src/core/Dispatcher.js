import ObjectBase from './ObjectBase.js';
import ActionRegistry from './ActionRegistry.js';

/**
 * The dispatcher receives actions request, triggers the actions and notify the registered stores.
 * Note: actions with no registered stores will NOT be executed.
 */
class Dispatcher extends ObjectBase {

	/**
	 * 
	 * @constructor
	 */
	constructor() {
		super({ name: 'Dispatcher'});
		this._callbacks = [];
	}

	/**
	 * 
	 * @public
	 */
	register(action, callback) {
		var a = ActionRegistry.getAction(action);
		if (a) {
			console.log('Registered callback on action: ' + action);
			this._callbacks[a.getName()] = this._callbacks[a.getName()] || [];
			this._callbacks[a.getName()].push(callback);
		} else {
			console.error('Unknown action: ' + action);
		}
	}

	/**
	 * 
	 * @public
	 */
	issue (action, param) {
		var a = ActionRegistry.getAction(action);
		this._exec(action, param).
		then( (result) => {
			console.log("Dispatcher.issue >> OK " + action);
			console.log("    ( " + JSON.stringify(param) + " )");
			console.log(">> " + result);
			var callbacks = this._callbacks[a.getName()] || [];
			var length = callbacks.length;
			for (var i = 0 ; i < length ; i++) {
				callbacks[i](result);
			}
		}).
		catch( (error) => {
			console.log("Dispatcher.issue >> ERR " + action);
			console.log("    ( " + JSON.stringify(param) + " )");
			console.log(">> " + error);
		});
	}

	/**
	 * 
	 * @private
	 */
	_exec (action, param) {
		var a = ActionRegistry.getAction(action);
		if (a && a.do) {
			return a.do(param);
		} else {
			return new Promise(function(resolve, reject) {
				if (a) reject( { error: "Dispatcher._exec ERR: " + action + " missing do" } );
				else   reject( { error: "Dispatcher._exec ERR: " + action + " unknown action" } );
			});
		}
	};
}

// Singleton pattern: create the Dispatcher unique instance
var Disp = new Dispatcher();

// Export the Dispatcher unique instance
export default Disp;