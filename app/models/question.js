import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  title        : attr('string'),
  excerpt      : attr('string'),
  questionText : attr('string'),
  answerText   : attr('string'),
  askedBy      : DS.belongsTo('politician', { async: true }),
  askedTo      : DS.belongsTo('politician', { async: true }),
  dateAsked    : attr('string'),
  questionHasAnswer: function() {
    if (this.get('answerText') !== undefined && this.get('answerText') !== null) {
      return true;
    } else {
      return false;
    }
  }.property()
});
