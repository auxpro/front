import Utils from '../utils/Utils.js';
// Import core modules
import Dispatcher from '../core/Dispatcher.js';
import StoreBase from '../core/StoreBase.js';

var DEFAULT_CONTENT = { logged: false };

var LoginStore = new StoreBase ({ 
	name: 'LOGIN_STORE',
	content: DEFAULT_CONTENT
});

LoginStore.setToken = function (token) {
	LoginStore._content = Utils.merge(LoginStore._content, { token: token });
}
LoginStore.onLogon = function (args) {
	args.logged = true;
	LoginStore._content = Utils.merge(LoginStore._content, args);
	LoginStore.notify();
};

Dispatcher.register('CHECK_CREDENTIALS', LoginStore.onLogon);

export default LoginStore;