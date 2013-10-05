Noselus.CategoriesRoute = Ember.Route.extend({
  model: function() {
    return Noselus.Category.find();
  }
});

