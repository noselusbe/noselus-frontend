Ember.GoogleAnalyticsTrackingMixin = Ember.Mixin.create({
  pageHasGa: function() {
    return window.ga && typeof window.ga === 'function';
  },

  trackPageView: function(page) {
    var loc;
    if (this.pageHasGa()) {
      if (!page) {
        loc = window.location;
        page = (loc.hash ? loc.hash.substring(1) : loc.pathname + loc.search);
      }
      return ga('send', 'pageview', page);
    }
  },
  trackEvent: function(category, action) {
    if (this.pageHasGa()) {
      return ga('send', 'event', category, action);
    }
  }
});

Ember.Application.initializer({
  name: 'googleAnalytics',
  initialize: function(container, application) {
    var router;
    router = container.lookup('router:main');
    return router.on('didTransition', function() {
      return this.trackPageView(this.get('url'));
    });
  }
});
