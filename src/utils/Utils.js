
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

	/**
     * 
	 * @param {object} [obj1]
	 * @param {object} [obj2]
	 * @param {boolean} [overwrite]
	 * @returns
	 */
    static merge(obj1, obj2, overwrite) {
    	if (!obj1) return obj2;
    	if (!obj2) return obj1;
    	var result = {};
    	for (var att1 in obj1) {
    		result[att1] = obj1[att1];
    	}
    	for (var att2 in obj2) {
    		if (overwrite || !result[att2]) {
    			result[att2] = obj2[att2];
    		}
    	}
    	return result;
	}
}