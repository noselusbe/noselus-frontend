Noselus.QuestionsRoute = Ember.Route.extend({
  setupController: function (controller, model) {
    if (!controller.get('searchQuery')) {
      var content;
      content = this.store.find('question', {limit: 5});
      controller.set('model', content);
    }
  },
  actions: {
    getMore: function(){
      var controller = this.get('controller'),
          nextPage   = controller.get('page') + 1,
          perPage    = controller.get('perPage'),
          items;

      items = this.send('fetchPage', nextPage, perPage);
    },

    fetchPage: function(page, perPage){
      var that = this;
      this.store.find('question', {page: page, limit: perPage}).then(function (data) {
        that.get('controller').send('gotMore', data.get('content'), page);
      });
    }
  }

});

