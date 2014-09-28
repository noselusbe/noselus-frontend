import DS from 'ember-data';
import ENV from '../config/environment';

var attr = DS.attr;

export default DS.Model.extend({
  fullName   : attr('string', {defaultValue: 'inconnu'}),
  party      : attr('string', {defaultValue: 'inconnu'}),
  address    : attr('string'),
  postalCode : attr('string'),
  town       : attr('string'),
  phone      : attr('string'),
  fax        : attr('string'),
  email      : attr('string'),
  site       : attr('string'),
  assembly   : attr('string'),
  function   : attr('string'),

  partyName: function () {
    var partyName = this.get('party');
    if (partyName) {
      return partyName.trim();
    }
  }.property('party'),

  partyThumbSmall: function () {
    return '/assets/images/parties/small/' + this.get('partyName').toLowerCase() + '.jpg';
  }.property('partyName'),

  partyThumbLarge: function () {
    return '/assets/images/parties/large/' + this.get('partyName').toLowerCase() + '.jpg';
  }.property('partyName'),

  thumb: function() {
    return ENV.apiAdapterUrl + '/politicians/' + this.get('id') + '/picture/300/300';
  }.property('id'),

  thumbImage: function() {
    return '<img src="' + ENV.apiAdapterUrl + '/politicians/'+this.get('id') + '/picture/100/100' + '" class="avatar media-object img-circle thumbnail"/>';
  }.property('id'),

  backgroundThumb: function() {
    return 'background-image: url("'+this.get('thumb')+'")';
  }.property('thumb')
});
