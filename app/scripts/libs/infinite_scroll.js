(function(window, Ember, $){
  var InfiniteScroll = {};

  InfiniteScroll.ControllerMixin = Ember.Mixin.create({
    loadingMore: false,
    actions: {
      getMore: function(){
        if (this.get('loadingMore')) return;
        this.set('loadingMore', true);
        this.get('target').send('getMore');
      },

      gotMore: function(items, nextPage){
        this.set('loadingMore', false);
      }
    }
  });

  InfiniteScroll.RouteMixin = Ember.Mixin.create({
    actions: {
      getMore: function() {
        throw new Error('Must override Route action getMore.');
      },
      fetchPage: function() {
        throw new Error('Must override Route action getMore.');
      }
    }
  });

  InfiniteScroll.ViewMixin = Ember.Mixin.create({
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
      setTimeout(function() {
        $('.spinner').spin();
      }, 100);
    }.observes('controller.loadingMore')
  });

  window.InfiniteScroll = InfiniteScroll;
})(this, Ember, jQuery);
