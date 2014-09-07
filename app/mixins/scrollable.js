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
      console.log('After redner: ' + that.get('controller.currentPos'));
      Ember.$(window).scrollTop(that.get('controller.currentPos'));
    });
  }.on('didInsertElement'),

  runScrolled: function() {
    var position = Ember.$(document).height() - Ember.$(window).scrollTop();
    var viewportHeight = document.documentElement.clientHeight;
    console.log(Ember.$(window).scrollTop());
    // debugger;
    this.set('controller.currentPos', Ember.$(window).scrollTop());
  }
});
