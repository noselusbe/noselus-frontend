import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function () {
    Ember.run.scheduleOnce('afterRender', function () {
      $('body').tooltip({
          selector: '[rel=tooltip]'
      });
    });
  }
});
