import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['questions'],

  search: function() {
    var that = this;
    var searchQuery = $('.search-field').val();

    that.get('controllers.questions').set('searchQuery', searchQuery);
    that.transitionToRoute('questions');
  }
});
