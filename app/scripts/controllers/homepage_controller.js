Noselus.HomepageController = Ember.ArrayController.extend({
  needs: ['questions'],

  search: function() {
    var that = this;
    var searchQuery = $('.search-field').val();

    that.get('controllers.questions').set('searchQuery', searchQuery);
    that.transitionToRoute('questions');
  }
});
