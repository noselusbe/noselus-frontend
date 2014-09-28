import Ember from 'ember';

export default Ember.Mixin.create({
  scrollingTimeout: 100,
  bindScrolling: function() {
    var self = this,
    onScroll = function() {
      Ember.run.debounce(self, self.runScrolled, self.scrollingTimeout);
    };

    Ember.$(document).on('touchmove.scrollable', onScroll);
    Ember.$(window).on('scroll.scrollable', onScroll);
  }.on('didInsertElement'),

  unbindScrolling: function() {
    Ember.$(window).off('.scrollable');
    Ember.$(document).off('.scrollable');
  }.on('willDestroyElement'),

  preservePos: function() {
    var that = this;
    Ember.run.schedule('afterRender', function () {
      Ember.$(window).scrollTop(that.get('controller.currentPos'));
    });
  }.on('didInsertElement'),

  runScrolled: function() {
    this.set('controller.currentPos', Ember.$(window).scrollTop());
  }
});
