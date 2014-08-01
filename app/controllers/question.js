import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['application', 'favorites'],
  previousPath: Ember.computed.alias('controllers.application.previousPath'),
  shouldDisplayActionBar: Ember.computed.or('isNotFavorited', 'previousPath'),
  isNotFavorited: Ember.computed.not('isFavorited'),

  getFavoritesQuestionsIds: function () {
    var existingFavorites = this.get('favorites.content'),
        questionsIds = [];

    existingFavorites.forEach(function(favorite) {
      questionsIds.push(favorite.get('question.id'));
    });

    return questionsIds;
  },

  isFavorited: function () {
    var favoritesQuestionsIds = this.getFavoritesQuestionsIds();

    if ($.inArray(this.get('model.id'), favoritesQuestionsIds) === -1) {
      return false;
    } else {
      return true;
    }
  }.property('favorites.length')
});
