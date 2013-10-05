(function() {

var Noselus = window.Noselus = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

Noselus.PoliticianController = Ember.ArrayController.extend();


})();

(function() {

Noselus.PoliticiansController = Ember.ArrayController.extend();



})();

(function() {

Noselus.QuestionsController = Ember.ArrayController.extend();



})();

(function() {

Noselus.Adapter = DS.RESTAdapter.extend();

Noselus.Store = DS.Store.extend({
  revision: 12,
  adapter: Noselus.Adapter.create({
    url: 'https://noselus.herokuapp.com'
  })
});


})();

(function() {

Noselus.Politician = DS.Model.extend({
  fullName: DS.attr('string'),
  party: DS.attr('string'),
  address: DS.attr('string'),
  postalCode: DS.attr('string'),
  town: DS.attr('string'),
  phone: DS.attr('string'),
  fax: DS.attr('string'),
  email: DS.attr('string'),
  site: DS.attr('string')
});


})();

(function() {

Noselus.Question = DS.Model.extend({
  title: DS.attr('string'),
  excerpt: DS.attr('string'),
  questionText: DS.attr('string'),
  answerText: DS.attr('string'),
  askedBy: DS.attr('number'),
  askedByPolitician: function() {
    politician = Noselus.Politician.find(this.get('askedBy'));
    return politician;
  }.property()
});


})();

(function() {

Noselus.ApplicationRoute = Ember.Route.extend();


})();

(function() {

Noselus.PoliticianRoute = Ember.Route.extend({
  model: function(attr) {
    return Noselus.Politician.find(attr.politician_id);
  },
  setupController: function(controller) {
    controller.set('questions', Noselus.Question.find());
  }
});



})();

(function() {

Noselus.PoliticiansRoute = Ember.Route.extend({
  model: function() {
    return Noselus.Politician.find();
  }
});



})();

(function() {

Noselus.QuestionsRoute = Ember.Route.extend({
  model: function(model) {
    return Noselus.Question.find();
  }
});



})();

(function() {

Noselus.PoliticianView = Ember.View.extend({
    templateName: 'politician',
    classNames: ['row']
});


})();

(function() {

Noselus.PoliticiansView = Ember.View.extend({
    templateName: 'politicians'
});


})();

(function() {

Noselus.QuestionListView = Ember.View.extend({
    templateName: 'question_list'
});


})();

(function() {

Noselus.QuestionView = Ember.View.extend();


})();

(function() {

Noselus.QuestionsView = Ember.View.extend({
    templateName: 'questions',
    classNames: ['row'],
    didInsertElement: function (argument) {

    }
});


})();

(function() {

Noselus.Router.map(function () {
  this.resource('politicians');
  this.resource('politician', { path: '/politicians/:politician_id' });
  this.resource('questions');
  this.resource('question', { path: '/questions/:question_id' });
});


})();