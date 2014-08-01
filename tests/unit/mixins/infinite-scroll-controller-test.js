import Ember from 'ember';
import InfiniteScrollControllerMixin from 'noselus/mixins/infinite-scroll-controller';

module('InfiniteScrollControllerMixin');

// Replace this with your real tests.
test('it works', function() {
  var InfiniteScrollControllerObject = Ember.Object.extend(InfiniteScrollControllerMixin);
  var subject = InfiniteScrollControllerObject.create();
  ok(subject);
});
