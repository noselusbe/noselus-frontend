/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'noselus',
    environment: environment,
    baseURL: '/',
    locationType: 'history',
    apiAdapterUrl: 'http://noselus.hurion.eu',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  // session: 'session:withCurrentUser',
  //
  ENV['simle-auth'] = {
    session: 'session:custom',
    routeAfterAuthentication: 'homepage',
    // crossOriginWhitelist: ['http://localhost:4200']
    // authorizer: 'simple-auth-authorizer:oauth2-bearer'
  };

  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint: '/auth_token',
    serverTokenRevocationEndpoint: '/revoke'
  };


  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    ENV['simple-auth'] = {
      store: 'simple-auth-session-store:ephemeral'
    };
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'history';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

    ENV['simple-auth-oauth2'] = {
      serverTokenEndpoint: ENV.apiAdapterUrl + '/auth_token',
      serverTokenRevocationEndpoint: '/revoke'
    };

    ENV.baseURL = '/';
    ENV.locationType = 'history';
  }

  return ENV;
};
