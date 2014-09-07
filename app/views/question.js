import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['container'],
  didInsertElement: function () {
    Ember.$('body').animate({scrollTop: 0}, 'fast'); // Scroll top
  }
});
