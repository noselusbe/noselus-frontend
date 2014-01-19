Noselus.PoliticianController = Ember.ObjectController.extend(InfiniteScroll.ControllerMixin, {
  questions: [],

  activateSpinner: function() {
    setTimeout(function() {
      $('.spinner').spin();
    }, 100);
  }.observes('isSearching'),
});
