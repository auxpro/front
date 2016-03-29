import ActionBase from '../core/ActionBase.js';
import Utils from '../utils/Utils.js';
import RestService from '../services/rest/RestService.js';

/**
 * 
 */
export default class CheckAuth extends ActionBase {

	/**
 	 * 
 	 * @constructor
 	 * @param {object} [props]
 	 */
	constructor(props) {
		super({
			name: 'CHECK_AUTH'
		});
	};

	/**
	 *
	 * @param {object} [args]
	 * @param {string} [args.user]
	 * @param {string} [args.pass]
	 */
	do(args) {
		Utils.checkMembers(args, ['user', 'pass']);

		var params = {
			token: Utils.encode(args.user, args.pass)
		}

		RestService.getAuth(params).
		then(function (result) {
			console.log('ok');console.log(result);
			args.resolve();
		}).
		catch(function (error) {
			console.log('error');console.log(error);
			args.reject();
		});
	};
}	