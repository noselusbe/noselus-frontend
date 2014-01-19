var attr = DS.attr;

Noselus.Question = DS.Model.extend({
  title        : attr('string'),
  excerpt      : attr('string'),
  questionText : attr('string'),
  answerText   : attr('string'),
  askedBy      : attr('number'),
  askedTo      : attr('number'),
  dateAsked    : attr('string'),
  askedByPolitician: function() {
    var politician = this.store.find('politician', this.get('askedBy'));
    return politician;
  }.property(),
  askedToPolitician: function() {
    var politician = this.store.find('politician',this.get('askedTo'));
    return politician;
  }.property(),
  questionHasAnswer: function() {
    if (this.get('answerText') !== null) {
      return true;
    } else {
      return false;
    }
  }.property()
});

Ember.Handlebars.registerBoundHelper('format-date', function(date) {
  return moment(date, 'YYYY-MM-DD').fromNow();
});
