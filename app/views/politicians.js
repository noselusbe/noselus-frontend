import Ember from 'ember';
import ScrollableMixin from '../mixins/scrollable';

export default Ember.View.extend(ScrollableMixin, {
  templateName: 'politicians',
  classNames: ['container']
});
