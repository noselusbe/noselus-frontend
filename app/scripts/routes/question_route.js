Noselus.QuestionRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('question', params.question_id);
  },

  setupController: function (controller, model) {
    controller.set('model', model);
    controller.set('favorites', this.store.findAll('favorite'));
  },

  actions: {
    goBack: function (politician) {
      if (Noselus.previousPath === 'politician') {
        this.transitionTo('politician', politician);
      } else {
        this.transitionTo('questions');
      }
    },

    createFavoriteFromQuestion: function (question) {
      var store = this.store;

      var existingFavorite = this.store.find('favorite', {question: question});

      if (existingFavorite) {
        debugger;
        var favorite = store.createRecord('favorite', {
          question: question
        });

        favorite.save();
      }
    }
  }
});
