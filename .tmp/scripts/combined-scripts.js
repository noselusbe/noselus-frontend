(function() {

var Noselus = window.Noselus = Ember.Application.create({

  // Basic logging, e.g. "Transitioned into 'post'"
  LOG_TRANSITIONS: true,

  // Extremely detailed logging, highlighting every internal
  // step made while transitioning into a route, including
  // `beforeModel`, `model`, and `afterModel` hooks, and
  // information about redirects and aborted transitions
  LOG_VIEW_LOOKUPS: true,
  LOG_ACTIVE_GENERATION: true

});

/* Order and include as you please. */


})();

(function() {

Noselus.CategoriesController = Ember.ObjectController.extend({
  // Implement your controller here.
});



})();

(function() {

Noselus.PoliticianController = Ember.ObjectController.extend();


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

Noselus.Category = DS.Model.extend({});

// probably should be mixed-in...
Noselus.Category.reopen({
  // certainly I'm duplicating something that exists elsewhere...
  attributes: function(){
    var attrs = [];
    var model = this;
    $.each(Em.A(Ember.keys(this.get('data.attributes'))), function(idx, key){
      var pair = { key: key, value: model.get(key) };
      attrs.push(pair);
    });
    return attrs;
  }.property()
});

// delete below here if you do not want fixtures
Noselus.Category.FIXTURES = [
  
  {
    id: 0,
    
  },
  
  {
    id: 1,
    
  }
  
];


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

Noselus.CategoriesRoute = Ember.Route.extend({
  model: function() {
    return Noselus.Category.find();
  }
});



})();

(function() {

Noselus.CategoryRoute = Ember.Route.extend({
  model: function(model) {
    return Noselus.Category.find(model.category_id);
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

Noselus.CategoriesView = Ember.View.extend({
    templateName: 'categories'
});


})();

(function() {

Noselus.CategoryView = Ember.View.extend({
    templateName: 'category'
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

  this.resource('categories');
  this.resource('category', { path: '/categories/:category_id' });

  this.resource('politicians');
  this.resource('politician', { path: '/politicians/:politician_id' });

  this.resource('questions');
  this.resource('question', { path: '/questions/:question_id' });

});


})();

(function() {

// Noselus.WidgetMapProfileComponent = Ember.Component.extend({
//   classNames: ['widget'],
//   style: function() {
//     return 'style';
//   }
// });


Ember.Handlebars.helper('staticMap', function(model) {
  src = 'http://maps.googleapis.com/maps/api/staticmap?center='+model.address+'&zoom=13&size=400x300&maptype=roadmap&sensor=false';
  style = 'style="background-image: url('+src+');"';
  img = new Handlebars.SafeString("<div class='mini-profile thumbnail centered-background' "+style+"></div>");
  return img;
}, 'address');


})();