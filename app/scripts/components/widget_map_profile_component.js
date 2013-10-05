// Noselus.WidgetMapProfileComponent = Ember.Component.extend({
//   classNames: ['widget'],
//   style: function() {
//     return 'style';
//   }
// });


Ember.Handlebars.helper('staticMap', function(model) {
  src = 'http://maps.googleapis.com/maps/api/staticmap?center='+model.address+'&zoom=13&size=400x300&maptype=roadmap&sensor=false';
  style = 'style="background-image: url('+src+');"';
  img = new Handlebars.SafeString("<div class='mini-profile thumbnail centered-background' "+style+"></div>");
  return img;
}, 'address');
