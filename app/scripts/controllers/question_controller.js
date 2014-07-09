Noselus.QuestionController = Em.ObjectController.extend({
  needs: ['application'],
  previousPath: Ember.computed.alias('controllers.application.previousPath')
});
