import Ember from 'ember';

export default Ember.Mixin.create({
  loadingMore: false,
  actions: {
    getMore: function(){
      if (this.get('loadingMore')) {
        return;
      }
      this.set('loadingMore', true);
      this.get('target').send('getMore');
    },

    gotMore: function(){
      this.set('loadingMore', false);
    }
  }
});
