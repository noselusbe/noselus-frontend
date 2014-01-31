Ember.Handlebars.registerBoundHelper('clean-text', function(text) {
  return  text.replace(/^(<br \/\><br \/\>|<br\>|<br \/\>)/, '').htmlSafe();
});
