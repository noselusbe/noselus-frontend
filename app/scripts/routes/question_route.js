Noselus.QuestionRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('question', params.question_id);
  },

  actions: {
    goBack: function (politician) {
      if (Noselus.previousPath == 'questions') {
        this.transitionTo('questions');
      } else {
        this.transitionTo('politician', politician);
      }
    }
  }
});
