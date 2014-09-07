/*global highlightWordsFromQuery:true*/
import Ember from 'ember';
import HighlightableMixin from '../mixins/highlightable';

export default Ember.View.extend(HighlightableMixin, {
  classNames: ['container'],
  didInsertElement: function () {
    Ember.$('body').animate({scrollTop: 0}, 'fast'); // Scroll top
  }
});
