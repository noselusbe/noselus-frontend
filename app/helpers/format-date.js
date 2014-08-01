import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value) {
  return moment(value, 'YYYY-MM-DD').fromNow();
});
