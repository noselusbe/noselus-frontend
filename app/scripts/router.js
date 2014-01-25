Noselus.Router.map(function () {

  this.route('homepage', {path: '/'});

  this.resource('politicians');
  this.resource('politician', { path: '/politicians/:politician_id' });

  this.resource('questions');
  this.resource('question', { path: '/questions/:question_id' });

});

Noselus.Router.reopen({
  location: 'hashbang'
});

Ember.Route.reopen({
  deactivate: function() {
    // Store previous path
    var applicationController = this.controllerFor('application');
    Noselus.previousPath = applicationController.get('currentPath');
  }
});

(function () {

  var get = Ember.get;
  var set = Ember.set;

  Ember.Location.registerImplementation('hashbang', Ember.HashLocation.extend({
    getURL: function () {
      return get(this, 'location').hash.substr(2);
    },

    setURL: function (path) {
      get(this, 'location').hash = '!' + path;
      set(this, 'lastSetURL', path);
    },

    onUpdateURL: function (callback) {
      var self = this;
      var guid = Ember.guidFor(this);

      Ember.$(window).bind('hashchange.ember-location-' + guid, function () {
        Ember.run(function () {
          var path = location.hash.substr(2);
          if (get(self, 'lastSetURL') === path) { return; }

          set(self, 'lastSetURL', null);

          callback(path);
        });
      });
    },

    formatURL: function (url) {
      return '#!' + url;
    }

  }));

})();
