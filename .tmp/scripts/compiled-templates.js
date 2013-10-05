Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n  <!-- Brand and toggle get grouped for better mobile display -->\n  <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Nos Elus</a>\n      </div>\n\n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li><a href=\"#\">Questions parlementaires</a></li>\n          <li><a href=\"#\">Nos élus</a></li>\n          <li><a href=\"#\">Thématiques</a></li>\n        </ul>\n      </div><!-- /.navbar-collapse -->\n  </div>\n</nav>\n<div class=\"container\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/activityfeed-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n              ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "question.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"activityfeed--story\">\n  <div class=\"media\">\n      <div class=\"pull-left\">\n        <img src=\"/images/avatar.gif\" alt=\"\" class=\"avatar media-bject\">\n        <br>\n        <img src=\"/images/avatar.gif\" alt=\"\" class=\"avatar media-bject\">\n      </div>\n      <div class=\"media-body\">\n        <small class=\"activityfeed--header--authors text-muted small\"><a href=\"\">Boris Rorsvort</a> à demander à <a href=\"\">Elio Di Rupo</a></small>\n        <header class=\"activityfeed--header\">\n          <h4>\n            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "question", "question", options) : helperMissing.call(depth0, "linkTo", "question", "question", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n          </h4>\n        </header>\n        <div class=\"activityfeed--excerpt\">\n          <p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "excerpt", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n          <p><a href=\"\">Lire la suite</a></p>\n        </div>\n      </div>\n  </div>\n  <div class=\"activityfeed--socialbox\">\n    <ul class=\"activityfeed--socialbox--actions\">\n      <li><a href=''>J'aime</a></li>\n      <li><a href=''>Suivre</a></li>\n      <li><a href=''>Lire plus tard</a></li>\n    </ul>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/widget-authors"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<ul>\n  <li>\n    <img src=\"http://uifaces.com/faces/audrey_128.jpg\" alt=\"\" class=\"thumbnail\">\n  </li>\n  <li>\n    <img src=\"http://uifaces.com/faces/audrey_128.jpg\" alt=\"\" class=\"thumbnail\">\n  </li>\n</ul>\n");
  
});

Ember.TEMPLATES["components/widget-category"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    Thématiques\n  </div>\n  <div class=\"panel-body\">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ullam, repellat, quo, corporis eaque tenetur ipsum soluta nesciunt deserunt autem obcaecati maiores ab dolorem cupiditate numquam doloremque voluptatem rem voluptates.\n  </div>\n</div>\n");
  
});

Ember.TEMPLATES["components/widget-map"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    Carte\n  </div>\n  <div class=\"panel-body\">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ullam, repellat, quo, corporis eaque tenetur ipsum soluta nesciunt deserunt autem obcaecati maiores ab dolorem cupiditate numquam doloremque voluptatem rem voluptates.\n  </div>\n</div>\n");
  
});

Ember.TEMPLATES["components/widget-people"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  </div>\n  <div class=\"panel-body\">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ullam, repellat, quo, corporis eaque tenetur ipsum soluta nesciunt deserunt autem obcaecati maiores ab dolorem cupiditate numquam doloremque voluptatem rem voluptates.\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["components/widget-tagcloud"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    Tag Cloud\n  </div>\n  <div class=\"panel-body\">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ullam, repellat, quo, corporis eaque tenetur ipsum soluta nesciunt deserunt autem obcaecati maiores ab dolorem cupiditate numquam doloremque voluptatem rem voluptates.\n  </div>\n</div>\n");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("<div class=\"well\">\n    Welcome to Yeoman and Ember.js!\n</div>\n");
  
});

Ember.TEMPLATES["politician"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n  <tr>\n    <td>\n      <strong>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "key", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(":</strong>\n    </td>\n    <td>\n      ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "value", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n    </td>\n  </tr>\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Change");
  }

  data.buffer.push("<h1>Politician</h1>\n\n<table>\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "model.attributes", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</table>\n\n");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "user.edit", "model", options) : helperMissing.call(depth0, "linkTo", "user.edit", "model", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["politicians"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "politician", "", options) : helperMissing.call(depth0, "linkTo", "politician", "", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var hashTypes, hashContexts;
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  }

  data.buffer.push("<h1>Politicians</h1>\n\n<ul>\n ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "model", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</ul>\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["question"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n      Retours aux questions\n    ");
  }

  data.buffer.push("<div class=\"col-xs-8 panel question\">\n  <div class=\"panel-heading\">\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "questions", options) : helperMissing.call(depth0, "linkTo", "questions", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </div>\n  <div class=\"question--header page-header\">\n    <h1>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h1>\n    <small class=\"question--header--authors text-muted small\"><a href=\"\">Boris Rorsvort</a> à demandé à <a href=\"\">Elio Di Rupo</a></small>\n  </div>\n\n  <div class=\"question--text question--text-question\">\n    ");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack2 = helpers._triageMustache.call(depth0, "questionText", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </div>\n  <div class=\"question--text question--text-question\">\n    ");
  hashContexts = {'unescaped': depth0};
  hashTypes = {'unescaped': "STRING"};
  stack2 = helpers._triageMustache.call(depth0, "answerText", {hash:{
    'unescaped': ("true")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n  </div>\n\n</div>\n\n<aside class=\"col-xs-4 sidebar\">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "widget-authors", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "widget-map", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  ");
  hashContexts = {'title': depth0};
  hashTypes = {'title': "STRING"};
  options = {hash:{
    'title': ("People")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['widget-people']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "widget-people", options))));
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "widget-category", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "widget-tagcloud", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</aside>\n\n");
  return buffer;
  
});

Ember.TEMPLATES["question_list"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n              ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "question.title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"activityfeed--story\">\n  <div class=\"media\">\n      <div class=\"pull-left\">\n        <img src=\"/images/avatar.gif\" alt=\"\" class=\"avatar media-bject\">\n        <br>\n        <img src=\"/images/avatar.gif\" alt=\"\" class=\"avatar media-bject\">\n      </div>\n      <div class=\"media-body\">\n        <small class=\"activityfeed--header--authors text-muted small\"><a href=\"\">Boris Rorsvort</a> à demander à <a href=\"\">Elio Di Rupo</a></small>\n        <header class=\"activityfeed--header\">\n          <h4>\n            ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers.linkTo),stack1 ? stack1.call(depth0, "question", "question", options) : helperMissing.call(depth0, "linkTo", "question", "question", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n          </h4>\n        </header>\n        <div class=\"activityfeed--excerpt\">\n          <p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "question.excerpt", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n          <p><a href=\"\">Lire la suite</a></p>\n        </div>\n      </div>\n  </div>\n  <div class=\"activityfeed--socialbox\">\n    <ul class=\"activityfeed--socialbox--actions\">\n      <li><a href=''>J'aime</a></li>\n      <li><a href=''>Suivre</a></li>\n      <li><a href=''>Lire plus tard</a></li>\n    </ul>\n  </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["questions"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("\n    ");
  hashContexts = {'contentBinding': depth0};
  hashTypes = {'contentBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Noselus.QuestionListView", {hash:{
    'contentBinding': ("question")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"col-xs-8 activityfeed\">\n  ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers.each.call(depth0, "question", "in", "controller", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n\n<aside class=\"col-xs-4 sidebar\">\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "widget-map", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  ");
  hashContexts = {'title': depth0};
  hashTypes = {'title': "STRING"};
  options = {hash:{
    'title': ("People")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['widget-people']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "widget-people", options))));
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "widget-category", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n  ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "widget-tagcloud", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n</aside>\n");
  return buffer;
  
});