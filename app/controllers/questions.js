import Ember from 'ember';
import InfiniteScrollControllerMixin from '../mixins/infinite-scroll-controller';

export default Ember.ArrayController.extend(InfiniteScrollControllerMixin, {
  searchQuery: null,
  isSearching: false,

  foundQuestionsTotal: function () {
    var meta = this.store.metadataFor('question');
    return meta.total;
  }.property('model'),

  content : [],

  searchQueryObserver: function () {
    var query = this.get('searchQuery').split(' ').join('+');
    Ember.run.debounce(this, this.execQuery(query), 600);
  }.observes('searchQuery'),

  execQuery: function (query) {
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
