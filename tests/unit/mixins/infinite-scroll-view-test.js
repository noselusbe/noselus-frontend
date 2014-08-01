import Ember from 'ember';
import InfiniteScrollViewMixin from 'noselus/mixins/infinite-scroll-view';

module('InfiniteScrollViewMixin');

// Replace this with your real tests.
test('it works', function() {
  var InfiniteScrollViewObject = Ember.Object.extend(InfiniteScrollViewMixin);
  var subject = InfiniteScrollViewObject.create();
  ok(subject);
});
