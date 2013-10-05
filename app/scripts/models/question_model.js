Noselus.Question = DS.Model.extend({
  title: DS.attr('string'),
  excerpt: DS.attr('string'),
  questionText: DS.attr('string'),
  answerText: DS.attr('string'),
  askedBy: DS.attr('number'),
  askedByPolitician: function() {
    politician = Noselus.Politician.find(this.get('askedBy'));
    return politician;
  }.property()
});
