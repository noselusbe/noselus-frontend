Noselus.PoliticianView = Ember.View.extend({
  templateName: 'politician',
  classNames: ['container main-wrapper'],
  didInsertElement: function (argument) {
    $('body').animate({scrollTop: 0}, 'fast'); // Scroll top
  }
});
