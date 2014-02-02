// Mixpanel config
// ===============

var mixpanelConfig = {};
if (AppConfig.env === 'development') {
  mixpanelConfig = {
    test: true,
    debug: true,
    verbose: true
  };
}

Ember.Application.initializer({
  name: 'initMixpanel',
  initialize: function(container, application) {
    mixpanel.set_config(mixpanelConfig);
  }
});