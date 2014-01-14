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
      var meta   = this.store.metadataFor('question'),
          next   = meta.next,
          limit  = meta.limit || 20,
          items;

      items = this.send('fetchPage', next, limit);
    },

    fetchPage: function(next, limit){
      var that = this;
      this.store.find('question', {next: next, limit: limit}).then(function (data) {
        that.get('controller').send('gotMore', data.get('content'), that.store.metadataFor('question'));
      });
    }
  }

});

