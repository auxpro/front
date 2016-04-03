
export default class RestService {

	static _request (reqParam) {
			 var _CONFIG = {
				BASE_URL : 'http://127.0.0.1:8090/rest',
				HEADER_TOKEN : "Authorization"
			};
			reqParam.url = _CONFIG.BASE_URL + reqParam.url;
			return new Promise(function (resolve, reject) {
				var xhr = new XMLHttpRequest();
				xhr.open(reqParam.method, reqParam.url, true);
				xhr.setRequestHeader(_CONFIG.HEADER_TOKEN, reqParam.token);
				xhr.onload = function(oEvt) {
					if (xhr.readyState === 4) {
						if (xhr.status === 200) {
							resolve(JSON.parse(xhr.responseText));
						} else if (xhr.status === 401) {
							reject({ error: 'UNAUTHORIZED', status: 401 });
						} else if (xhr.status === 500) {
							reject({ error: 'INTERNAL_ERROR', status: 500 });
						} else {
							reject(JSON.parse(xhr.responseText));
						}
					} else {
					}
				};
				xhr.send(reqParam.data);
			});
		};
	
	
	/**
	 *
	 * @param {object} [args]
	 * @param {string} [args.token] valid session token to be passed as header
	 * @returns a Promise object 
	 */
    static getAuth (args) {
        var reqParam = {};
        reqParam.url = '/auth';
        reqParam.method = 'GET';
        reqParam.token = args.token;
        return RestService._request(reqParam);
    };
	
	/**
	 *
	 * @param {object} [args]
	 * @param {string} [args.token] valid session token to be passed as header
	 * @returns a Promise object 
	 */
	static getUsers (args) {
		var reqParam = {};
		reqParam.url = '/users';
		reqParam.method = 'GET';
		reqParam.token = args.token;
		return RestService._request(reqParam);
	};
	
	/**
     *
     * @param {object} [args]
     * @param {string} [args.token] valid session token to be passed as header
     * @param {object} [args.data]
     * @returns a Promise object 
     */
    static postUser (args) {
        var reqParam = {};
        reqParam.url = '/users';
        reqParam.method = 'POST';
        reqParam.token = args.token;
        reqParam.data = args.data;
        return RestService._request(reqParam);
    };


	/**
	 *
	 * @param {object} [args]
	 * @param {string} [args.token] valid session token to be passed as header
	 * @returns a Promise object 
	 */
	static getAuxiliaries (args) {
		var reqParam = {};
		reqParam.url = '/auxiliaries';
		reqParam.method = 'GET';
		reqParam.token = args.token;
		return RestService._request(reqParam);
	};

	/**
	 *
	 * @param {object} [args]
	 * @param {string} [args.token] valid session token to be passed as header
	 * @returns a Promise object 
	 */
	static getServices (args) {
		var reqParam = {};
		reqParam.url = '/services';
		reqParam.method = 'GET';
		reqParam.token = args.token;
		return RestService._request(reqParam);
	};
}