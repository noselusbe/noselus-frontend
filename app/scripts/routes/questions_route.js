Noselus.QuestionsRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.filter('question', { limit: 5 }, function(data) {
      return true;
    });
  },

  actions: {
    getMore: function(){
      var meta   = this.store.metadataFor('question'),
          next   = meta.next,
          limit  = meta.limit || 5,
          items;

      items = this.send('fetchPage', next, limit);
    },

    fetchPage: function(next, limit){
      var that = this,
          params,
          query = that.get('controller').get('searchQuery');

      if (query) {
        params = {q: query, first_element: next, limit: limit};
      } else{
        params = {first_element: next, limit: limit};
      }

      this.get('store').findQuery('question', params).then(function (data) {
        that.get('controller').send('gotMore');
      });
    }
  }

});

