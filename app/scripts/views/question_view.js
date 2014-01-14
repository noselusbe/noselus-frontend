Noselus.QuestionView = Ember.View.extend({
  classNames: ['container main-wrapper'],
  didInsertElement: function (argument) {
    $('body').animate({scrollTop: 0}, 'fast'); // Scroll top
  }
});
