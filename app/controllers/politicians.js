import Ember from 'ember';
import DebouncedPropertiesMixin from '../mixins/debounced-properties';


export default Ember.ArrayController.extend(DebouncedPropertiesMixin, {
  queryParams: ['q'],
  q: null,
  isSearching: false,
  debouncedProperties: ['q'],
  qDelay: 600,

  filteredPoliticians: function () {
    var query = this.get('q') || '';
    var regexp = new RegExp(query.toLowerCase()),
        politicians = this.get('model');

    return politicians.filter(function(politician) {
      if (query !== '') {
        return regexp.test(politician.get('fullName').toLowerCase());
      } else {
        return true;
      }
    });

  }.property('debouncedQ', 'model'),

  clearResults: function () {
    this.set('q', null);
  }
});
