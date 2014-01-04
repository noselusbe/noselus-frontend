Noselus.PoliticiansRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('politician');
  }
});

