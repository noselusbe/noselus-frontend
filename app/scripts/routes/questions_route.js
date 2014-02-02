Noselus.QuestionsRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('question', {limit: 20});
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
      var that = this,
          params,
          query = that.get('controller').get('searchQuery');

      if (query) {
        params = {q: query, first_element: next, limit: limit};
      } else{
        params = {first_element: next, limit: limit};
      }
      var new_questions = this.store.find('question', params);
      // debugger
      new_questions.then(function (data) {
        that.get('controller.model').addObjects(data);
        that.get('controller').send('gotMore');
      });
      // this.get('store').findQuery('question', params).then(function (data) {
      //   that.get('controller').send('gotMore');
      // });
    }
  }

});

