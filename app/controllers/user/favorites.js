import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    removeFavorite: function (favorite) {
      favorite.destroyRecord();
      this.get('model').removeObject(favorite);
    }
  }
});
