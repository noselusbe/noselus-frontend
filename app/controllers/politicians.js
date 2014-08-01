import Ember from 'ember';

export default Ember.ArrayController.extend({
  searchQuery: null,
  isSearching: false,

  searchQueryObserver: function () {
    var query = this.get('searchQuery').toLowerCase();
    Ember.run.debounce(this, this.updateContent(query), 600);
  }.observes('searchQuery'),

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
    });

    politicians.then(function(data) {
      that.set('isSearching', false);
      that.set('model', data);
    });
  },

  clearResults: function () {
    this.set('isSearching', true);
    this.store.unloadAll('politician');
  }
});
