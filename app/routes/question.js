import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('question', params.question_id);
  },

  setupController: function (controller, model) {
    controller.set('model', model);
    var favorites = this.store.find('favorite');
    favorites.then(function (data) {
      controller.set('favorites', data);
    });
  },

  titleToken: function(model) {
    return model.get('title');
  },

  actions: {
    goBack: function (politician) {
      if (this.controllerFor('application').get('previousPath') === 'politician') {
        this.transitionTo('politician', politician);
      } else {
        this.transitionTo('questions');
      }
    },

    createFavoriteFromQuestion: function (question) {
      var store = this.store;
      var questionsIds = Ember.A([]);
      this.get('controller.favorites.model').forEach(function(favorite) {
        questionsIds.push(favorite.get('question.id'));
      });

      if ($.inArray(question.id, questionsIds) === -1) {
        console.dir(questionsIds);
        var favorite = store.createRecord('favorite', {
          question: question
        });

        favorite.save();
        this.get('controller.favorites').pushObject(favorite);

      } else {
        alert('Cette question est deja dans votre liste de question sauvegardées');
      }
    }
  }
});
