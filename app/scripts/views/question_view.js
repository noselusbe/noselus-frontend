Noselus.QuestionView = Ember.View.extend({
  didInsertElement: function (argument) {
    $('body').animate({scrollTop: 0}, 'fast'); // Scroll top
  }
});
