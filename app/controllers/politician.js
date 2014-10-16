import Ember from 'ember';
import InfiniteScrollControllerMixin from '../mixins/infinite-scroll-controller';

export default Ember.ObjectController.extend(InfiniteScrollControllerMixin, {
  questions: [],
  queryParams: ['q'],
  q: null,
  isSearching: false,

  searchQueryObserver: function () {
    Ember.run.debounce(this, this.execQuery, 600);
  }.observes('q'),

  execQuery: function () {
    var query = this.get('q').split(' ').join('+');

    var limit = 20,
        politician_id = this.get('model').get('id'),
        params;

    if (query !== '') {
      params = {q: query, limit: limit, asked_by: politician_id};
    } else {
      params = {limit: limit, asked_by: politician_id};
    }

    this.updateContent(params);
  },

  updateContent: function (params) {
    var that = this;
    var questions = that.store.find('question', params);
    questions.then(function(data) {
      that.set('isSearching', false);
      that.set('questions', data);
    });
  },
  activateSpinner: function() {
    Ember.run.schedule('afterRender', function () {
      $('.spinner-wrapper').spin('large');
    });
  }.observes('isSearching')
});
