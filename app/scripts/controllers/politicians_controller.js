Noselus.PoliticiansController = Ember.ArrayController.extend({
  politicianFromWal: function() {
    var politicians = this.filter(function(politician) {
      return politician.get('assembly') === 'WAL';
    });
    return politicians;
  }.property('@each.assembly'),

  politicianFromFed: function() {
    var politicians = this.filter(function(politician) {
      return politician.get('assembly') === 'FED';
    });
    return politicians;
  }.property('@each.duration')
});

