Ember.Handlebars.registerBoundHelper('format-date', function(date) {
  return moment(date, 'YYYY-MM-DD').fromNow();
});
