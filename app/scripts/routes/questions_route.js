Noselus.QuestionsRoute = Ember.Route.extend({
  setupController: function (controller, model) {
    if (!controller.get('searchQuery')) {
      var content;
      content = this.store.find('question');
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
      var params;
      var query = that.get('controller').get('searchQuery');

      if (query) {
        params = {q: query, first_element: next, limit: limit};
      } else{
        params = {first_element: next, limit: limit};
      }

      this.store.find('question', params).then(function (data) {
        that.get('controller').send('gotMore', data.get('content'), that.store.metadataFor('question'));
      });
    }
  }

});

