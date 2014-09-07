/*global ScrollableMixin:false*/
import Ember from 'ember';
import InfiniteScrollViewMixin from '../mixins/infinite-scroll-view';
import ScrollableMixin from '../mixins/scrollable';

export default Ember.View.extend(InfiniteScrollViewMixin, ScrollableMixin, {
  classNames: ['container'],
  didInsertElement: function(){
    // we want to make sure 'this' inside `didScroll` refers
    // to the IndexView, so we use jquery's `proxy` method to bind it
    Ember.$(window).on('scroll', Ember.$.proxy(this.didScroll, this));
    Ember.run.schedule('afterRender', function () {
      $('.spinner-wrapper').spin('large');
    });
  },
  willDestroyElement: function(){
    // have to use the same argument to `off` that we did to `on`
    Ember.$(window).off('scroll', Ember.$.proxy(this.didScroll, this));
  }
});
