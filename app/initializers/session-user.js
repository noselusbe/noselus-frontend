export default {
  name:       'session-user',
  after:      'simple-auth',
  initialize: function(container, application) {
    var session = container.lookup('simple-auth-session:main');
    if (session.get('isAuthenticated')) {
      application.deferReadiness();
      session.get('currentUser').then(function() {
        application.advanceReadiness();
      }, function() {
        alert('error login');
      });
    }
  }
};
