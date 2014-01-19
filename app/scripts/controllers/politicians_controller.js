Noselus.PoliticiansController = Ember.ArrayController.extend({
  searchQuery: null,

  searchQueryObserver: Ember.throttledObserver(function() {
    var query = this.get('searchQuery').split(' ').join('+');
    this.updateContent(query);
  }, 'searchQuery', 600),

  updateContent: function (query) {
    var that = this;
    var regexp = new RegExp(query);

    that.clearResults();
    var politicians = that.store.filter('politician', {}, function(item) {
      that.nameMatcher(item);
    }).then(function(data) {
      that.set('isSearching', false);
      that.set('model', data);
    });
  },

  nameMatcher: function (item) {
    var data;
    if (query !== '') {
      data = regexp.test(item.get('fullName'));
    } else {
      data = true;
    }
    return data;
  },

  clearResults: function () {
    this.set('isSearching', true);
    this.store.unloadAll('politician');
  }
});

