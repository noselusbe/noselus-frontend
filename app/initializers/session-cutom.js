import Ember from 'ember';
import Session from 'simple-auth/session';

export default {
  name: 'authentication',

  initialize: function(container, application) {
    Session.reopen({
      updateCurrentUser: function() {
        var self = this;
         Ember.$.ajax({
          url: "/me",
        }).then(function(response) {
          container.lookup('store:main').push('user', response.user);
          self.set("currentUser", container.lookup('store:main').getById('user', response.user));
        });
      }.observes('token')
    });
  }
};
