Noselus.Assembly = DS.Model.extend({
  name: DS.attr('string'),
  level: DS.attr('string'),
  initials: DS.attr('string')
  // questions: DS.hasMany('question', {async: true})
});
