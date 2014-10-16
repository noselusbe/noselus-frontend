import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['questions'],

  actions: {
    search: function() {
      var that = this;
      var q = $('.search-field').val();

      that.get('controllers.questions').set('q', q);
      that.transitionToRoute('questions');
    }
  }
});
