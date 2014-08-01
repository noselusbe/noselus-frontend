import Ember from 'ember';

export default Ember.Mixin.create({
  setupInfiniteScrollListener: function(){
    $('body').on('scroll', $.proxy(this.didScroll, this));
  },
  teardownInfiniteScrollListener: function(){
    $('body').off('scroll', $.proxy(this.didScroll, this));
  },
  didScroll: function() {
    if (this.isScrolledToBottom()) {
      this.get('controller').send('getMore');
    }
  },
  isScrolledToBottom: function(){
    var distanceToViewportTop = ($(document).height() - $(window).height());
    var viewPortTop = $(document).scrollTop();

    if (viewPortTop === 0) {
      // if we are at the top of the page, don't do
      // the infinite scroll thing
      return false;
    }

    return (viewPortTop - distanceToViewportTop === 0);
  },

  activateSpinner: function() {
      Ember.run.schedule('afterRender', function () {
        $('.spinner-wrapper').spin('large');
      });
  }.observes('controller.loadingMore')
});
