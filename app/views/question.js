import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['container main-wrapper'],
  didInsertElement: function () {
    Ember.$('body').animate({scrollTop: 0}, 'fast'); // Scroll top
  }
});
