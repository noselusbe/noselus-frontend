Noselus.PoliticiansRoute = Ember.Route.extend({
  model: function() {
    return Noselus.Politician.find();
  }
});

