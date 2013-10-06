Noselus.ApplicationRoute = Ember.Route.extend({
});

Noselus.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('questions');
  }
});
