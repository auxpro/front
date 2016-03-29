
/**
 *
 */
export default class Utils {

	/**
	 * 
	 * @param {string} [user]
	 * @param {string} [pass]
	 * @returns
	 */
    static encode(user, pass) {
    	return 'Basic ' + btoa(user + ':' + pass);
    }

    /**
     * 
	 * @param {object} [args]
	 * @param {array} [params]
	 * @returns
	 */
    static checkMembers(args, params) {
    	if (args && params) {
			for (var i = 0; i < params.length; i++) {
				if (!args[params[i]]) {
					throw 'Missing mandatory argument: ' + params[i];
				}
			}
		}
	}
}