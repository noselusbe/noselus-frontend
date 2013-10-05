Noselus.PoliticianRoute = Ember.Route.extend({
  model: function(model) {
    return Noselus.Politician.find(model.politician_id);
  }
});

