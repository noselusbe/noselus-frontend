Noselus.FavoritesRoute = Em.Route.extend({
  // activate: function() {},
  // deactivate: function() {},
  // setupController: function(controller, model) {},
  // renderTemplate: function() {},
  // beforeModel: function() {},
  // afterModel: function() {},

  model: function() {
    return this.store.find('favorite');
  },

  actions: {
    removeFavorite: function (favorite) {
      favorite.deleteRecord();
      favorite.save();
    }
  }
});
