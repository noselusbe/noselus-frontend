Noselus.QuestionsController = Ember.ArrayController.extend( InfiniteScroll.ControllerMixin, {
  searchQuery: null,

  // Throttle the text field value binding so you dont get 10000 requests while typing
  searchQueryObserver: Ember.throttledObserver(function() {
    var query = this.get('searchQuery').split(' ').join('+');
    this.execQuery(query);
  }, 'searchQuery', 600),

  execQuery: function (query) {
    var content;

    if (query !== '') {
      content = this.store.find('question', {q: query});
    }

    this.set('content', content);
  },

  activateSpinner: function() {
    $('.spinner').spin();
  }.observes('content.isLoaded')
});
