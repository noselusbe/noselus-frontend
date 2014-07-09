Noselus.QuestionRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('question', params.question_id);
  },

  actions: {
    goBack: function (politician) {
      if (Noselus.previousPath === 'politician') {
        this.transitionTo('politician', politician);
      } else {
        this.transitionTo('questions');
      }
    }
  }
});
