// Import utilities module
import Utils from '../utils/Utils.js';
// Import core modules
import ActionBase from '../core/ActionBase.js';
import StoreRegistry from '../core/StoreRegistry.js';
// Import services
import RestService from '../services/rest/RestService.js';

var CheckCredentials = new ActionBase({
	name: 'CHECK_CREDENTIALS'
});

/**
 *
 * @param {object}   [args]
 * @param {string}   [args.user]
 * @param {string}   [args.pass]
 */
CheckCredentials.do = function (args) {
	Utils.checkMembers(args, ['user', 'pass']);
	var token = Utils.encode(args.user, args.pass);
	StoreRegistry.getStore('LOGIN_STORE').setToken(token);
	var params = { token: token };
	return RestService.getAuth(params);
}

export default CheckCredentials;
