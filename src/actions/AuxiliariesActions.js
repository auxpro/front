import ActionBase from '../core/ActionBase.js';
import Utils from '../utils/Utils.js';
import RestService from '../services/rest/RestService.js';

/**
 *
 */
let GetAuxiliaries = new ActionBase({ name: 'GET_AUXILIARIES' });
GetAuxiliaries.do = function (args) {
	Utils.checkMembers(args, ['token']);
	return RestService.getAuxiliaries(args);
}

/**
 *
 */
let PostAuxiliary = new ActionBase({ name: 'POST_AUXILIARY' });
PostAuxiliary.do = function (args) {
	Utils.checkMembers(args, ['name', 'password', 'email']);
	var params = {
		token: Utils.encode('guest', 'guest'),
		data: args
	};
	return RestService.postAuxiliary(params);	
}
