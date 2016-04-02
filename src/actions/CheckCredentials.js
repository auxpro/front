import ActionBase from '../core/ActionBase.js';
import Utils from '../utils/Utils.js';
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
	var params = {
		token: Utils.encode(args.user, args.pass)
	}
	return RestService.getAuth(params);
}

export default CheckCredentials;
