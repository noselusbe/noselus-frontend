import ENV from '../config/environment';

export default {
  name: 'simple-auth-config',
  before: 'simple-auth',
  initialize: function() {
    window.ENV = ENV;
  }
};
