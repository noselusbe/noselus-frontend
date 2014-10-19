import Ember from 'ember';
import Session from 'simple-auth/session';
// export default {
//   name: 'authentication',
//   before: 'simple-auth',
//   initialize: function(container, application) {
//     // application.deferReadiness();
//     Session.reopen({
//       currentUser: function() {
//         var userId = this.get('user_id');
//         if (!Ember.isEmpty(userId)) {
//           return this.container.lookup('store:main').find('user', userId);
//         }
//       }.property('user_id')
//     });
//     // application.advanceReadiness();
//   }
// };
// export default {
//   name: 'authentication',
//   before: 'simple-auth',
//   initialize: function(container, application) {
//     // application.deferReadiness();
//     Session.reopen({
//       updateCurrentUser: function() {
//         var self = this;
//         Ember.$.ajax({
//           url: "/me",
//         }).then(function(response) {
//           response.favorites.forEach(function (favorite) {
//             container.lookup('store:main').push('favorite', favorite);
//           });
//           container.lookup('store:main').push('user', response.user);
//           self.set("currentUser", container.lookup('store:main').getById('user', response.user.id));
//         });
//       }.observes('token')
//     });
//     // application.advanceReadiness();
//   }
// };

var SessionWithCurrentUser = Session.extend({
  currentUser: function() {
    var userId = this.get('user_id');
    alert();
    if (!Ember.isEmpty(userId)) {
      return this.container.lookup('store:main').find('user', userId);
    }
  }.property('user_id')
});

export default {
  name: 'custom-session',
  after: 'simple-auth',
  initialize: function(container) {
    container.register('session:custom', SessionWithCurrentUser);
  }
};
