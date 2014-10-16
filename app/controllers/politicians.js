import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['q'],
  q: null,
  isSearching: false,

  searchQueryObserver: function () {
    Ember.run.debounce(this, this.updateContent, 600);
  }.observes('q'),

  updateContent: function () {
    var that = this;
    var query = this.get('q').toLowerCase();
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
