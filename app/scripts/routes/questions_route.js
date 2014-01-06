Noselus.QuestionsRoute = Ember.Route.extend({
  setupController: function (controller, model) {
    if (!controller.get('searchQuery')) {
      var content;
      content = this.store.find('question');
      controller.set('model', content);
    }
  }
});

