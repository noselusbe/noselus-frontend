Noselus.PoliticiansRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('politician', {}, function(data) {
      return true;
    });
  }
});

