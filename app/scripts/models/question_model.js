var attr = DS.attr;

Noselus.Question = DS.Model.extend({
  title        : attr('string'),
  excerpt      : attr('string'),
  questionText : attr('string'),
  answerText   : attr('string'),
  askedBy      : DS.belongsTo('politician'),
  askedTo      : DS.belongsTo('politician'),
  dateAsked    : attr('string'),
  questionHasAnswer: function() {
    if (this.get('answerText') !== null) {
      return true;
    } else {
      return false;
    }
  }.property(),

  isFavorited: function () {
    if (this.store.find('favorite', {question: this}).length) {
      return true;
    } else {
      return false;
    }
  }.observes('controllers.favorite.model@each')
});

