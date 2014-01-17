Noselus.QuestionsController = Ember.ArrayController.extend( InfiniteScroll.ControllerMixin, {
  searchQuery: null,

  // Throttle the text field value binding so you dont get 10000 requests while typing
  searchQueryObserver: Ember.throttledObserver(function() {
    var query = this.get('searchQuery').split(' ').join('+');
    this.execQuery(query);
  }, 'searchQuery', 600),

  execQuery: function (query) {
    var content;
    var limit = 10;

    if (query !== '') {
      content = this.store.find('question', {q: query, limit: limit});
    } else {
      content = this.store.find('question', {limit: limit});
    }

    this.set('content', content);
  },

  activateSpinner: function() {
    $('.spinner').spin();
  }.observes('content.isLoaded')
});
