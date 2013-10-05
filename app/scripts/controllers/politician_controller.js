Noselus.PoliticianController = Ember.ObjectController.extend({
  tags: [{
    id: 1,
    name: 'word',
    count: 4
  },{
    id: 2,
    name: 'word',
    count: 5
  },{
    id: 3,
    name: 'word',
    count: 6
  },{
    id: 4,
    name: 'word',
    count: 7
  },{
    id: 5,
    name: 'word',
    count: 8
  },{
    id: 6,
    name: 'word',
    count: 9
  },{
    id: 7,
    name: 'word',
    count: 10
  }]
});

Noselus.WidgetMiniProfileComponent = Ember.Component.extend({
  backgroundThumb: function() {
    return 'background-image: url("'+this.get('model.thumb')+'")'
  }.property('Noselus.Politician')
});

