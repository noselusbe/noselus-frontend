Noselus.PoliticiansView = Ember.View.extend({
  templateName: 'politicians',
  classNames: ['container'],
  didInsertElement: function(){
    $('.spinner').spin();
  }
});
