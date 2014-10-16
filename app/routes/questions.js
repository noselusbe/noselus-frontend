import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    if (this.controllerFor('questions').get('model.content') === undefined) {
      return this.store.find('question', {limit: 20});
    }
  },

  titleToken: 'Recherchez dans les questions parlementaires belges',

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
          query = that.get('controller').get('q');

      if (query) {
        params = {q: query, first_element: next, limit: limit};
      } else{
        params = {first_element: next, limit: limit};
      }
      var new_questions = this.store.find('question', params);

      new_questions.then(function (data) {
        that.get('controller.model').addObjects(data);
        that.get('controller').send('gotMore');
      });
    }
  }
});
