Noselus.PoliticianRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('politician', params.politician_id);
  },
  setupController: function(controller, model) {
    controller.set('questions', this.store.find('question', {asked_by: model.id}));
    controller.set('model', model);
  }
});

