Noselus.PoliticianView = Ember.View.extend(InfiniteScroll.ViewMixin,{
  templateName: 'politician',
  classNames: ['container'],

  didInsertElement: function(){
    $('body').animate({scrollTop: 0}, 'fast'); // Scroll top
    // we want to make sure 'this' inside `didScroll` refers
    // to the IndexView, so we use jquery's `proxy` method to bind it
    $(window).on('scroll', $.proxy(this.didScroll, this));
    $('.spinner').spin();
  },

  willDestroyElement: function(){
    // have to use the same argument to `off` that we did to `on`
    $(window).off('scroll', $.proxy(this.didScroll, this));
  }
});
