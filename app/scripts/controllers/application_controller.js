Noselus.ApplicationController = Ember.Controller.extend({
  routeChanged: function () {
    mixpanel.track_pageview(window.location.hash);
  }.observes('currentPath'),

  init: function () {
    // Tooltips
    $('body').tooltip({
      selector: '[rel=tooltip]'
    });
  }
});
