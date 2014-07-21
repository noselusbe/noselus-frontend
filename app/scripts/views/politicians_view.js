Noselus.PoliticiansView = Ember.View.extend({
  templateName: 'politicians',
  classNames: ['container main-wrapper'],
  didInsertElement: function(){
    $('.spinner').spin();
  }
});
