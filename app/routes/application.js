import Ember from 'ember';
import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  title: function(tokens) {
    return tokens.join(' - ') + ' - Nos élus .be';
  }
});
