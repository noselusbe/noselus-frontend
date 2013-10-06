Noselus.PoliticianRoute = Ember.Route.extend({
  model: function(model) {
    return Noselus.Politician.find(model.politician_id);
  },
  setupController: function(controller, model) {
    controller.set('questions', Noselus.Question.find({asked_by: model.id}));
    controller.set('model', model);
  }
});

