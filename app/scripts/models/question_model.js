var attr = DS.attr;

Noselus.Question = DS.Model.extend({
  title        : attr('string'),
  excerpt      : attr('string'),
  questionText : attr('string'),
  answerText   : attr('string'),
  dateAsked    : attr('string'),
  askedBy      : DS.belongsTo('politician'),
  askedTo      : DS.belongsTo('politician'),
  assembly     : DS.belongsTo('assembly'),
  questionHasAnswer: function() {
    if (this.get('answerText') !== null) {
      return true;
    } else {
      return false;
    }
  }.property()
});

