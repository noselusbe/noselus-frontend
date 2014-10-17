import Ember from 'ember';
import Session from 'simple-auth/session';

export default {
  name: 'authentication',

  initialize: function(container, application) {
    Session.reopen({
      updateCurrentUser: function() {
        var self = this;
        var userId = this.get('user_id');
        if (!Ember.isEmpty(userId)) {
          container.lookup('store:main').find('user', userId).then(function(user){
            self.set("currentUser", user);
          });
        }
      }.observes('user_id')
    });
  }
};
