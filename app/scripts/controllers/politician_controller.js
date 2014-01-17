Noselus.PoliticianController = Ember.ObjectController.extend(InfiniteScroll.ControllerMixin, {
  questions: []
});

Noselus.WidgetMiniProfileComponent = Ember.Component.extend({
  backgroundThumb: function() {
    return 'background-image: url("'+this.get('model.thumb')+'")';
  }.property()
});

