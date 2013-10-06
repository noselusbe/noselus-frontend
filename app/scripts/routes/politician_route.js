Noselus.PoliticianRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('questions', Noselus.Question.find({asked_by: model.id}));
  }
});

