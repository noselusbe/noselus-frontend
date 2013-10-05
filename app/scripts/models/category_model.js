Noselus.Category = DS.Model.extend({});

// probably should be mixed-in...
Noselus.Category.reopen({
  // certainly I'm duplicating something that exists elsewhere...
  attributes: function(){
    var attrs = [];
    var model = this;
    $.each(Em.A(Ember.keys(this.get('data.attributes'))), function(idx, key){
      var pair = { key: key, value: model.get(key) };
      attrs.push(pair);
    });
    return attrs;
  }.property()
});

// delete below here if you do not want fixtures
Noselus.Category.FIXTURES = [
  
  {
    id: 0,
    
  },
  
  {
    id: 1,
    
  }
  
];
