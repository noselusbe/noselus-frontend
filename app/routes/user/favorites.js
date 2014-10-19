import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function() {
    var user = this.get('store').getById('user', 1);
    if (user) {
      var favorites = user.get('favorites');
      return favorites;
    }
  },

  titleToken: 'Vos questions parlementaires sauvegardées',

  // actions: {
  //   removeFavorite: function (favorite) {
  //     favorite.deleteRecord();
  //     favorite.save();
  //   }
  // }
});
