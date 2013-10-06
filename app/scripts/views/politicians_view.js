Noselus.PoliticiansView = Ember.View.extend({
  templateName: 'politicians',
  didInsertElement: function(){
    $('.spinner').spin();
  }
});
