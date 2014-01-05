Noselus.PoliticianView = Ember.View.extend({
  templateName: 'politician',
  classNames: ['container'],
  didInsertElement: function (argument) {
    $('body').animate({scrollTop: 0}, 'fast'); // Scroll top
  }
});
