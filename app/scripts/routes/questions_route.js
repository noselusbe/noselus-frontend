Noselus.QuestionsRoute = Ember.Route.extend({
  model: function(model) {
    return Noselus.Question.find();
  }
});

