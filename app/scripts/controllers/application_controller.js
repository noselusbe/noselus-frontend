Noselus.ApplicationController = Ember.Controller.extend({
  init: function () {
    // Tooltips
    $('body').tooltip({
      selector: '[rel=tooltip]'
    });
  }
});
