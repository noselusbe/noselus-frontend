Noselus.Politician = DS.Model.extend({
  fullName: DS.attr('string'),
  party: DS.attr('string'),
  address: DS.attr('string'),
  postalCode: DS.attr('string'),
  town: DS.attr('string'),
  phone: DS.attr('string'),
  fax: DS.attr('string'),
  email: DS.attr('string'),
  site: DS.attr('string'),
  thumb: function() {
    return 'https://noselus-test.herokuapp.com/politicians/picture/'+this.get('id')
  }.property(),
  thumbImage: function() {
    return '<img src="https://noselus-test.herokuapp.com/politicians/picture/'+this.get('id')+'" class="avatar media-object"/>'
  }.property()
});
