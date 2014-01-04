var attr = DS.attr;

Noselus.Politician = DS.Model.extend({
  fullName   : attr('string'),
  party      : attr('string'),
  address    : attr('string'),
  postalCode : attr('string'),
  town       : attr('string'),
  phone      : attr('string'),
  fax        : attr('string'),
  email      : attr('string'),
  site       : attr('string'),
  assembly   : attr('string'),
  thumb: function() {
    return 'https://noselus-test.herokuapp.com/politicians/picture/'+this.get('id');
  }.property(),
  thumbImage: function() {
    return '<img src="https://noselus-test.herokuapp.com/politicians/picture/'+this.get('id')+'" class="avatar media-object"/>';
  }.property()
});
