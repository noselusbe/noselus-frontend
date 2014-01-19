var logger = {};

if (AppConfig.env === 'development') {
  logger = {
    LOG_TRANSITIONS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_ACTIVE_GENERATION: true
  };
}
// Create Ember App
var Noselus = window.Noselus = Ember.Application.create(logger);

Ember.throttledObserver = function (func, key, time) {
  return Em.observer(function () {
    Em.run.throttle(this, func, time);
  }, key);
};

// Importing application files
require('scripts/libs/*');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
require('scripts/components/*');
