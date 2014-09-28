import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.filter('politician', {}, function() {
      return true;
    });
  },

  titleToken: 'Politiciens belges de la chambre et du parlement wallon'
});
