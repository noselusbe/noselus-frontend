Noselus.PoliticianRoute = Ember.Route.extend({
  model: function(attr) {
    return Noselus.Politician.find(attr.politician_id);
  },
  setupController: function(controller) {
    controller.set('questions', Noselus.Question.find());
  }
});

