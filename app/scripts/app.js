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

// Importing application files
require('scripts/initializers');
require('scripts/libs/*');
require('scripts/mixins/*');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
require('scripts/components/*');
