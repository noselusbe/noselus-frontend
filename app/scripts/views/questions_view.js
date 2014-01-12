Noselus.QuestionsView = Ember.View.extend(InfiniteScroll.ViewMixin, {
  templateName: 'questions',
  classNames: ['container'],
  didInsertElement: function(){
    var that = this;
    setTimeout(function() {
      that.setupInfiniteScrollListener();
    }, 1000);
  },
  willDestroyElement: function(){
    var that = this;
    setTimeout(function() {
      that.teardownInfiniteScrollListener();
    }, 1000);
  }
});
