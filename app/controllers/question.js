import Ember from 'ember';

export default Ember.ObjectController.extend({
  // needs: ['application', 'favorites'],
  needs: ['application', 'user', 'user/favorites'],
  previousPath: Ember.computed.alias('controllers.application.previousPath'),
  shouldDisplayActionBar: Ember.computed.or('isNotFavorited', 'previousPath'),
  favoritedQuestionsIds: Ember.computed.mapBy('controllers.user/favorites.model', 'question'),
  isFavorited: function () {
    var favoritedQuestionsIds = this.get('favoritedQuestionsIds');
    return _.contains(favoritedQuestionsIds, this.get('id'));
  }.property('favoritedQuestionsIds.length', 'controllers.user/favorites.model.length')
  // isNotFavorited: Ember.computed.not('isFavorited'),

//   getFavoritesQuestionsIds: function () {
//     var existingFavorites = this.get('favorites.content'),
//         questionsIds = [];
//
//     existingFavorites.forEach(function(favorite) {
//       questionsIds.push(favorite.get('question.id'));
//     });
//
//     return questionsIds;
//   },
//
//   isFavorited: function () {
//     var favoritesQuestionsIds = this.getFavoritesQuestionsIds();
//
//     if ($.inArray(this.get('model.id'), favoritesQuestionsIds) === -1) {
//       return false;
//     } else {
//       return true;
//     }
//   }.property('favorites.length')
});
