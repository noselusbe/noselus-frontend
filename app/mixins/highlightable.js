import Ember from 'ember';

export default Ember.Mixin.create({
  highlightWordsFromQuery: function () {
    var searchQuery = this.get('controller.searchQuery');
    var container = 'body';
    console.log('highlightWordsFromQuery');
    if (searchQuery !== null && searchQuery !== '') {
      Ember.run.debounce(this, this.execHighlight(searchQuery, container), 600);
    }
  }.observes('controller.model.length', 'didInsertElement'),

  execHighlight: function (searchQuery, container) {
    Ember.run.schedule('afterRender', function () {
      $(container).highlight(searchQuery, true);
    });
  }

});
