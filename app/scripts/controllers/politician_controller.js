Noselus.PoliticianController = Ember.ObjectController.extend(InfiniteScroll.ControllerMixin, {
  questions: [],
  searchQuery: null,
  isSearching: false,

  searchQueryObserver: Ember.throttledObserver(function() {
    var query = this.get('searchQuery').split(' ').join('+');
    this.execQuery(query);
  }, 'searchQuery', 600),

  execQuery: function (query) {
    var content,
        limit = 20,
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
    setTimeout(function() {
      $('.spinner').spin();
    }, 100);
  }.observes('isSearching'),
});
