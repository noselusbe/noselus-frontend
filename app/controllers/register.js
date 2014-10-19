import Ember from 'ember';

export default Ember.ObjectController.extend({
  username: '',
  password: '',
  actions: {
    register: function() {
      var that = this;
      var user = this.store.createRecord('user', {
        username: that.get('username'),
        password: that.get('password')
      });

      user.save().then(function() {
        //this is basically what happens when you trigger the LoginControllerMixin's "authenticate" action
        this.get('session').authenticate('app:authenticators:custom', {
          identification: this.get('username'),
          password: this.get('password')
        });
      });
    }
  }
});
