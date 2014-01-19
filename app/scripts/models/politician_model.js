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
    return AppConfig.apiAdapterUrl + '/politicians/picture/' + this.get('id');
  }.property('id'),

  thumbImage: function() {
    return '<img src="' + AppConfig.apiAdapterUrl + '/politicians/picture/'+this.get('id') + '" class="avatar media-object"/>';
  }.property('id'),

  backgroundThumb: function() {
    return 'background-image: url("'+this.get('thumb')+'")';
  }.property('thumb')
});
