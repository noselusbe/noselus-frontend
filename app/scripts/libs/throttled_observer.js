Ember.throttledObserver = function (func, key, time) {
  return Em.observer(function () {
    Em.run.throttle(this, func, time);
  }, key);
};