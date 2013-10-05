Noselus.Router.map(function () {

  this.resource('categories');
  this.resource('category', { path: '/categories/:category_id' });

  this.resource('politicians');
  this.resource('politician', { path: '/politicians/:politician_id' });

  this.resource('questions');
  this.resource('question', { path: '/questions/:question_id' });

});
