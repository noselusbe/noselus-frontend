Noselus.QuestionView = Ember.View.extend({
  classNames: ['container'],
  didInsertElement: function (argument) {
    $('body').animate({scrollTop: 0}, 'fast'); // Scroll top
  }
});
