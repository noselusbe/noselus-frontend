Noselus.PoliticiansController = Ember.ArrayController.extend({
  searchQuery: null,
  isSearching: false,

  searchQueryObserver: Ember.throttledObserver(function() {
    var query = this.get('searchQuery').toLowerCase();
    this.updateContent(query);
  }, 'searchQuery', 600),

  updateContent: function (query) {
    var that = this;
    var regexp = new RegExp(query);

    that.clearResults();
    var politicians = that.store.filter('politician', {}, function(item) {
      if (query !== '') {
        return regexp.test(item.get('fullName').toLowerCase());
      } else {
        return true;
      }
    }).then(function(data) {
      that.set('isSearching', false);
      that.set('model', data);
    });
  },

  clearResults: function () {
    this.set('isSearching', true);
    this.store.unloadAll('politician');
  }
});

