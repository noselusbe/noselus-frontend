import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('question', params.question_id);
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
      var user = store.getById('user', 1);
      // if (user) {
        var favorite = this.store.createRecord('favorite', {
          question: question
        });

        this.get('controller').set('isFavorited', true);

        // user.get('favorites').pushObject(favorite);
        this.controllerFor('user/favorites').get('model').addObject(favorite);
        // user.save();
      // }
    }
  }
});
