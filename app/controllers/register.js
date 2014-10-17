import Ember from 'ember';

export default Ember.ObjectController.extend({
  firstname: '',
  lastname: '',
  username: '',
  password: '',
  actions: {
    registerUser: function(){
      var user = this.store.createRecord('user', {
        first_name: this.get('firstname'),
        last_name: this.get('lastname'),
        username: this.get('username')
      });
      user.set('typedPass', this.get('password'));
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
