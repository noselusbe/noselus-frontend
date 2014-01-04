Noselus.QuestionsController = Ember.ArrayController.extend({

  search: function() {
    var _this = this;
    var result = Noselus.Question.search($('.search-field').val());
    this.set('content', result);
  },

  removeSpinner: function() {
    setTimeout(function() {
      $('.spinner').spin(false).hide();
    }, 500);
  }.observes('content.isLoaded')
});
