import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('politician');
  },

  titleToken: 'Politiciens belges de la chambre et du parlement wallon'
});
