import Ember from 'ember';
import InfiniteScrollControllerMixin from '../mixins/infinite-scroll-controller';

export default Ember.ArrayController.extend(InfiniteScrollControllerMixin, {
  isSearching: false,
  queryParams: ['q'],
  q: null,

  foundQuestionsTotal: function () {
    var meta = this.store.metadataFor('question');
    return meta.total;
  }.property('model'),

  model : [],

  searchQueryObserver: function () {
    Ember.run.debounce(this, this.execQuery, 300);
  }.observes('q'),

  execQuery: function () {
    var query = this.get('q').split(' ').join('+');

    var limit = 20,
        params;

    if (query !== '') {
      params = {q: query, limit: limit};
    } else {
      params = {limit: limit};
    }

    this.updateContent(params);
  },

  updateContent: function (params) {
    var that = this;
    var questions = that.store.find('question', params);
    questions.then(function(data) {
      that.set('isSearching', false);
      that.set('model', data);
    });
  },

  clearResults: function () {
    this.set('isSearching', true);
    this.store.unloadAll('question');
  },

  activateSpinner: function() {
    Ember.run.schedule('afterRender', function () {
      $('.spinner-wrapper').spin('large');
    });
  }.observes('isSearching')
});
