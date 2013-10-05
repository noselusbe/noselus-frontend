Noselus.CategoryRoute = Ember.Route.extend({
  model: function(model) {
    return Noselus.Category.find(model.category_id);
  }
});

