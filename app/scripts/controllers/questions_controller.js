Noselus.QuestionsController = Ember.ArrayController.extend({
  searchQuery: null,

  search: function() {
    var controller = this;
    var query = controller.get('searchQuery').split(' ').join('+');
    var content;

    if (query === '') {
      content = this.store.find('question');
    } else {
      content = this.store.find('question', {q: query});
    }
    controller.set('content', content);

  }.observes('searchQuery'),

  activateSpinner: function() {
    $('.spinner').spin();
  }.observes('content.isLoaded')
});
