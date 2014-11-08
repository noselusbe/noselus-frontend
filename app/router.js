/*global ga:false*/
import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('homepage', {path: '/'});
  this.resource('questions');
  this.resource('question', { path: 'questions/:question_id' });
  this.resource('politician', { path: 'politicians/:politician_id' });
  this.route('politicians');
  // this.resource('favorites');
  this.route('login');
  this.route('user');
});

Ember.Route.reopen({
  deactivate: function() {
    // Store previous path
    var applicationController = this.controllerFor('application');
    applicationController.set('previousPath', applicationController.get('currentPath'));
  }
});

Router.reopen({
  notifyGoogleAnalytics: function() {
    if (config.environment === 'production') {
      return ga('send', 'pageview', {
          'page': this.get('url'),
          'title': this.get('url')
        });
    }
  }.on('didTransition')
});

export default Router;
