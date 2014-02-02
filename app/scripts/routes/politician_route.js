Noselus.PoliticianRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('politician', params.politician_id);
  },

  setupController: function(controller, model) {
    controller.set('questions', this.store.find('question', {asked_by: model.id, limit: 20}));
    controller.set('model', model);
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
      var params = {first_element: next, limit: limit, asked_by: that.get('controller.model').get('id')};

      var new_questions = this.store.find('question', params);
      new_questions.then(function (data) {
        that.get('controller.questions.content').addObjects(data);
        that.get('controller').send('gotMore');
      });
    }
  }
});

