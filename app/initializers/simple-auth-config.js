import ENV from '../config/environment';

// export var initialize = function(/* container, application */) {
//   // application.inject('route', 'foo', 'service:foo');
// };

export default {
  name: 'simple-auth-config',
  before: 'simple-auth',
  initialize: function() {
    window.ENV = ENV;
  }
};
