Noselus.QuestionsController = Ember.ArrayController.extend( InfiniteScroll.ControllerMixin, {
  searchQuery: null,
  isSearching: false,
  foundQuestionsTotal: function () {
    var meta = this.store.metadataFor('question');
    return meta.total;
  }.property('model'),

  content : [],
  // Throttle the text field value binding so you dont get 10000 requests while typing
  searchQueryObserver: Ember.throttledObserver(function() {
    var query = this.get('searchQuery').split(' ').join('+');
    this.execQuery(query);
  }, 'searchQuery', 600),

  execQuery: function (query) {
    var content,
        limit = 20,
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
    setTimeout(function() {
      $('.spinner').spin();
    }, 100);
  }.observes('isSearching')
});
