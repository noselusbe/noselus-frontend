(function() {

var Noselus = window.Noselus = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

Noselus.PoliticiansController = Ember.ObjectController.extend({
  // Implement your controller here.
});



})();

(function() {

Noselus.QuestionsController = Ember.ArrayController.extend({
  // Implement your controller here.
});



})();

(function() {

Noselus.Adapter = DS.RESTAdapter.extend();

Noselus.Store = DS.Store.extend({
  revision: 12,
  adapter: Noselus.Adapter.create({
    url: 'https://noselus.herokuapp.com'
  })
});


})();

(function() {

Noselus.Politician = DS.Model.extend({});

// probably should be mixed-in...
Noselus.Politician.reopen({
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
Noselus.Politician.FIXTURES = [

  {
    id: 0,
    name: 'Elio Di Rupo'
  },

  {
    id: 1,
    name: 'Elio Di Rupo'
  }

];


})();

(function() {

Noselus.Question = DS.Model.extend({
  title: DS.attr('string'),
  excerpt: DS.attr('string'),
  questionText: DS.attr('string'),
  answerText: DS.attr('string')
});

// delete below here if you do not want fixtures
Noselus.Question.FIXTURES = [
{
  id: 1,
  title: "Open Data - Open Government",
  excerpt: "Les informations publiques, ou données ouvertes (open data), sont aujourd'hui en termes de potentiel, d'opportunités et d'enjeu au c?ur du développement ...",
  questionText: "Les informations publiques, ou données ouvertes (open data), sont aujourd'hui en termes de potentiel, d'opportunités et d'enjeu au c?ur du développement de multiples innovations sociales et économiques. En effet, grâce à leur mise en ligne par l'administration et les collectivités territoriales, elles peuvent contribuer à la création de nouveaux services tout en favorisant la transparence de l'action publique.\n\nDans ce cadre, des pays comme la France, les Etats-Unis, la Norvège ou encore l'Angleterre, utilisent cette nouvelle forme de gouvernance. En effet, tout organisme d'une certaine taille collecte, génère ou maintient un important volume de données électroniques (bases de données, systèmes d'information cartographiques, registres électroniques, etc.).\n\nAinsi, à titre d'exemple, les données que possède la Ville de Paris sont exploitées au mieux par les services municipaux dans le cadre de leurs missions, mais constituent également un patrimoine immatériel qui peut être mis en valeur pour l'ensemble de la collectivité :\n- les chercheurs peuvent y trouver matière à nourrir leurs travaux et expériences ;\n- les développeurs peuvent créer des services innovants utilisant ces données ;\n- les citoyens et journalistes y trouvent des informations brutes ;\n- les entreprises peuvent fournir une valeur ajoutée à ces données, et ainsi créer de l'emploi et de la richesse pour la collectivité.\n\nEn janvier 2011, la Ville de Paris, à l'initiative de son maire et de son adjoint en charge de l'innovation, de la recherche et des universités, a permis l'ouverture de ce site, marquant la fin d'un premier cycle d'exploration des données de la ville, mais surtout le début d'une nouvelle ère en matière de transparence. Cette démarche est intéressante et innovante, car elle permet aux habitants de devenir des co-concepteurs des évolutions de leur ville.\n\nCette démarche se fait, bien évidemment, dans le respect des règles sur la vie privée et il est clair qu'il n'est pas question de donner des informations sur des données personnelles, mais bien des informations d'ordre général.\n\nMonsieur le Ministre a-t-il déjà entendu parler de ce concept ?\nPense-t-il qu'il serait envisageable de le mettre en place dans notre région ?\nConcernant les communes wallonnes, ne serait-il pas intéressant d'étudier la question et, pourquoi pas, développer une expérience pilote en la matière ?\nMonsieur le Ministre a-t-il déjà été approché par des sociétés informatiques sur ce sujet ?",
  answerText: "Il n'est pas inutile de rappeler l'origine de la matière. Le Principe d'Open Data, c'est-à-dire la réutilisation des informations du secteur public, trouve sa source dans la Directive 2003/98 du même nom et à pour objet d'établir un cadre harmonisé fixant les conditions de réutilisation desdites informations.\n\nPar « réutilisation », on vise l'utilisation d'informations détenues par des organismes du secteur public à des fins commerciales ou non commerciales autres que l'objectif initial de la mission de service public pour lequel les informations ont été produites.\n\nAinsi, dans le cadre de l'exercice de ses multiples missions, le SPW collecte ou produit une grande variété d'informations afin :\n- de préparer ses décisions,\n- de fournir ses services,\n- d'évaluer son action.\n\nAppliqué au secteur public, le principe de l'Open Data consiste donc à permettre l'usage, commercial ou non, par d'autres acteurs (organismes publics, entreprises, associations, pouvoirs locaux ou citoyens) des données collectées par un organisme public donné.\nC'est en 2006 que le gouvernement adoptait définitivement le décret transposant la directive précitée.\n"
},
{
  id: 2,
  title: "Open Data - Open Government",
  excerpt: "Les informations publiques, ou données ouvertes (open data), sont aujourd'hui en termes de potentiel, d'opportunités et d'enjeu au c?ur du développement ...",
  questionText: "Les informations publiques, ou données ouvertes (open data), sont aujourd'hui en termes de potentiel, d'opportunités et d'enjeu au c?ur du développement de multiples innovations sociales et économiques. En effet, grâce à leur mise en ligne par l'administration et les collectivités territoriales, elles peuvent contribuer à la création de nouveaux services tout en favorisant la transparence de l'action publique.\n\nDans ce cadre, des pays comme la France, les Etats-Unis, la Norvège ou encore l'Angleterre, utilisent cette nouvelle forme de gouvernance. En effet, tout organisme d'une certaine taille collecte, génère ou maintient un important volume de données électroniques (bases de données, systèmes d'information cartographiques, registres électroniques, etc.).\n\nAinsi, à titre d'exemple, les données que possède la Ville de Paris sont exploitées au mieux par les services municipaux dans le cadre de leurs missions, mais constituent également un patrimoine immatériel qui peut être mis en valeur pour l'ensemble de la collectivité :\n- les chercheurs peuvent y trouver matière à nourrir leurs travaux et expériences ;\n- les développeurs peuvent créer des services innovants utilisant ces données ;\n- les citoyens et journalistes y trouvent des informations brutes ;\n- les entreprises peuvent fournir une valeur ajoutée à ces données, et ainsi créer de l'emploi et de la richesse pour la collectivité.\n\nEn janvier 2011, la Ville de Paris, à l'initiative de son maire et de son adjoint en charge de l'innovation, de la recherche et des universités, a permis l'ouverture de ce site, marquant la fin d'un premier cycle d'exploration des données de la ville, mais surtout le début d'une nouvelle ère en matière de transparence. Cette démarche est intéressante et innovante, car elle permet aux habitants de devenir des co-concepteurs des évolutions de leur ville.\n\nCette démarche se fait, bien évidemment, dans le respect des règles sur la vie privée et il est clair qu'il n'est pas question de donner des informations sur des données personnelles, mais bien des informations d'ordre général.\n\nMonsieur le Ministre a-t-il déjà entendu parler de ce concept ?\nPense-t-il qu'il serait envisageable de le mettre en place dans notre région ?\nConcernant les communes wallonnes, ne serait-il pas intéressant d'étudier la question et, pourquoi pas, développer une expérience pilote en la matière ?\nMonsieur le Ministre a-t-il déjà été approché par des sociétés informatiques sur ce sujet ?",
  answerText: "Il n'est pas inutile de rappeler l'origine de la matière. Le Principe d'Open Data, c'est-à-dire la réutilisation des informations du secteur public, trouve sa source dans la Directive 2003/98 du même nom et à pour objet d'établir un cadre harmonisé fixant les conditions de réutilisation desdites informations.\n\nPar « réutilisation », on vise l'utilisation d'informations détenues par des organismes du secteur public à des fins commerciales ou non commerciales autres que l'objectif initial de la mission de service public pour lequel les informations ont été produites.\n\nAinsi, dans le cadre de l'exercice de ses multiples missions, le SPW collecte ou produit une grande variété d'informations afin :\n- de préparer ses décisions,\n- de fournir ses services,\n- d'évaluer son action.\n\nAppliqué au secteur public, le principe de l'Open Data consiste donc à permettre l'usage, commercial ou non, par d'autres acteurs (organismes publics, entreprises, associations, pouvoirs locaux ou citoyens) des données collectées par un organisme public donné.\nC'est en 2006 que le gouvernement adoptait définitivement le décret transposant la directive précitée.\n"
},
{
  id: 3,
  title: "Open Data - Open Government",
  excerpt: "Les informations publiques, ou données ouvertes (open data), sont aujourd'hui en termes de potentiel, d'opportunités et d'enjeu au c?ur du développement ...",
  questionText: "Les informations publiques, ou données ouvertes (open data), sont aujourd'hui en termes de potentiel, d'opportunités et d'enjeu au c?ur du développement de multiples innovations sociales et économiques. En effet, grâce à leur mise en ligne par l'administration et les collectivités territoriales, elles peuvent contribuer à la création de nouveaux services tout en favorisant la transparence de l'action publique.\n\nDans ce cadre, des pays comme la France, les Etats-Unis, la Norvège ou encore l'Angleterre, utilisent cette nouvelle forme de gouvernance. En effet, tout organisme d'une certaine taille collecte, génère ou maintient un important volume de données électroniques (bases de données, systèmes d'information cartographiques, registres électroniques, etc.).\n\nAinsi, à titre d'exemple, les données que possède la Ville de Paris sont exploitées au mieux par les services municipaux dans le cadre de leurs missions, mais constituent également un patrimoine immatériel qui peut être mis en valeur pour l'ensemble de la collectivité :\n- les chercheurs peuvent y trouver matière à nourrir leurs travaux et expériences ;\n- les développeurs peuvent créer des services innovants utilisant ces données ;\n- les citoyens et journalistes y trouvent des informations brutes ;\n- les entreprises peuvent fournir une valeur ajoutée à ces données, et ainsi créer de l'emploi et de la richesse pour la collectivité.\n\nEn janvier 2011, la Ville de Paris, à l'initiative de son maire et de son adjoint en charge de l'innovation, de la recherche et des universités, a permis l'ouverture de ce site, marquant la fin d'un premier cycle d'exploration des données de la ville, mais surtout le début d'une nouvelle ère en matière de transparence. Cette démarche est intéressante et innovante, car elle permet aux habitants de devenir des co-concepteurs des évolutions de leur ville.\n\nCette démarche se fait, bien évidemment, dans le respect des règles sur la vie privée et il est clair qu'il n'est pas question de donner des informations sur des données personnelles, mais bien des informations d'ordre général.\n\nMonsieur le Ministre a-t-il déjà entendu parler de ce concept ?\nPense-t-il qu'il serait envisageable de le mettre en place dans notre région ?\nConcernant les communes wallonnes, ne serait-il pas intéressant d'étudier la question et, pourquoi pas, développer une expérience pilote en la matière ?\nMonsieur le Ministre a-t-il déjà été approché par des sociétés informatiques sur ce sujet ?",
  answerText: "Il n'est pas inutile de rappeler l'origine de la matière. Le Principe d'Open Data, c'est-à-dire la réutilisation des informations du secteur public, trouve sa source dans la Directive 2003/98 du même nom et à pour objet d'établir un cadre harmonisé fixant les conditions de réutilisation desdites informations.\n\nPar « réutilisation », on vise l'utilisation d'informations détenues par des organismes du secteur public à des fins commerciales ou non commerciales autres que l'objectif initial de la mission de service public pour lequel les informations ont été produites.\n\nAinsi, dans le cadre de l'exercice de ses multiples missions, le SPW collecte ou produit une grande variété d'informations afin :\n- de préparer ses décisions,\n- de fournir ses services,\n- d'évaluer son action.\n\nAppliqué au secteur public, le principe de l'Open Data consiste donc à permettre l'usage, commercial ou non, par d'autres acteurs (organismes publics, entreprises, associations, pouvoirs locaux ou citoyens) des données collectées par un organisme public donné.\nC'est en 2006 que le gouvernement adoptait définitivement le décret transposant la directive précitée.\n"
},
{
  id: 4,
  title: "Open Data - Open Government",
  excerpt: "Les informations publiques, ou données ouvertes (open data), sont aujourd'hui en termes de potentiel, d'opportunités et d'enjeu au c?ur du développement ...",
  questionText: "Les informations publiques, ou données ouvertes (open data), sont aujourd'hui en termes de potentiel, d'opportunités et d'enjeu au c?ur du développement de multiples innovations sociales et économiques. En effet, grâce à leur mise en ligne par l'administration et les collectivités territoriales, elles peuvent contribuer à la création de nouveaux services tout en favorisant la transparence de l'action publique.\n\nDans ce cadre, des pays comme la France, les Etats-Unis, la Norvège ou encore l'Angleterre, utilisent cette nouvelle forme de gouvernance. En effet, tout organisme d'une certaine taille collecte, génère ou maintient un important volume de données électroniques (bases de données, systèmes d'information cartographiques, registres électroniques, etc.).\n\nAinsi, à titre d'exemple, les données que possède la Ville de Paris sont exploitées au mieux par les services municipaux dans le cadre de leurs missions, mais constituent également un patrimoine immatériel qui peut être mis en valeur pour l'ensemble de la collectivité :\n- les chercheurs peuvent y trouver matière à nourrir leurs travaux et expériences ;\n- les développeurs peuvent créer des services innovants utilisant ces données ;\n- les citoyens et journalistes y trouvent des informations brutes ;\n- les entreprises peuvent fournir une valeur ajoutée à ces données, et ainsi créer de l'emploi et de la richesse pour la collectivité.\n\nEn janvier 2011, la Ville de Paris, à l'initiative de son maire et de son adjoint en charge de l'innovation, de la recherche et des universités, a permis l'ouverture de ce site, marquant la fin d'un premier cycle d'exploration des données de la ville, mais surtout le début d'une nouvelle ère en matière de transparence. Cette démarche est intéressante et innovante, car elle permet aux habitants de devenir des co-concepteurs des évolutions de leur ville.\n\nCette démarche se fait, bien évidemment, dans le respect des règles sur la vie privée et il est clair qu'il n'est pas question de donner des informations sur des données personnelles, mais bien des informations d'ordre général.\n\nMonsieur le Ministre a-t-il déjà entendu parler de ce concept ?\nPense-t-il qu'il serait envisageable de le mettre en place dans notre région ?\nConcernant les communes wallonnes, ne serait-il pas intéressant d'étudier la question et, pourquoi pas, développer une expérience pilote en la matière ?\nMonsieur le Ministre a-t-il déjà été approché par des sociétés informatiques sur ce sujet ?",
  answerText: "Il n'est pas inutile de rappeler l'origine de la matière. Le Principe d'Open Data, c'est-à-dire la réutilisation des informations du secteur public, trouve sa source dans la Directive 2003/98 du même nom et à pour objet d'établir un cadre harmonisé fixant les conditions de réutilisation desdites informations.\n\nPar « réutilisation », on vise l'utilisation d'informations détenues par des organismes du secteur public à des fins commerciales ou non commerciales autres que l'objectif initial de la mission de service public pour lequel les informations ont été produites.\n\nAinsi, dans le cadre de l'exercice de ses multiples missions, le SPW collecte ou produit une grande variété d'informations afin :\n- de préparer ses décisions,\n- de fournir ses services,\n- d'évaluer son action.\n\nAppliqué au secteur public, le principe de l'Open Data consiste donc à permettre l'usage, commercial ou non, par d'autres acteurs (organismes publics, entreprises, associations, pouvoirs locaux ou citoyens) des données collectées par un organisme public donné.\nC'est en 2006 que le gouvernement adoptait définitivement le décret transposant la directive précitée.\n"
},
{
  id: 5,
  title: "Open Data - Open Government",
  excerpt: "Les informations publiques, ou données ouvertes (open data), sont aujourd'hui en termes de potentiel, d'opportunités et d'enjeu au c?ur du développement ...",
  questionText: "Les informations publiques, ou données ouvertes (open data), sont aujourd'hui en termes de potentiel, d'opportunités et d'enjeu au c?ur du développement de multiples innovations sociales et économiques. En effet, grâce à leur mise en ligne par l'administration et les collectivités territoriales, elles peuvent contribuer à la création de nouveaux services tout en favorisant la transparence de l'action publique.\n\nDans ce cadre, des pays comme la France, les Etats-Unis, la Norvège ou encore l'Angleterre, utilisent cette nouvelle forme de gouvernance. En effet, tout organisme d'une certaine taille collecte, génère ou maintient un important volume de données électroniques (bases de données, systèmes d'information cartographiques, registres électroniques, etc.).\n\nAinsi, à titre d'exemple, les données que possède la Ville de Paris sont exploitées au mieux par les services municipaux dans le cadre de leurs missions, mais constituent également un patrimoine immatériel qui peut être mis en valeur pour l'ensemble de la collectivité :\n- les chercheurs peuvent y trouver matière à nourrir leurs travaux et expériences ;\n- les développeurs peuvent créer des services innovants utilisant ces données ;\n- les citoyens et journalistes y trouvent des informations brutes ;\n- les entreprises peuvent fournir une valeur ajoutée à ces données, et ainsi créer de l'emploi et de la richesse pour la collectivité.\n\nEn janvier 2011, la Ville de Paris, à l'initiative de son maire et de son adjoint en charge de l'innovation, de la recherche et des universités, a permis l'ouverture de ce site, marquant la fin d'un premier cycle d'exploration des données de la ville, mais surtout le début d'une nouvelle ère en matière de transparence. Cette démarche est intéressante et innovante, car elle permet aux habitants de devenir des co-concepteurs des évolutions de leur ville.\n\nCette démarche se fait, bien évidemment, dans le respect des règles sur la vie privée et il est clair qu'il n'est pas question de donner des informations sur des données personnelles, mais bien des informations d'ordre général.\n\nMonsieur le Ministre a-t-il déjà entendu parler de ce concept ?\nPense-t-il qu'il serait envisageable de le mettre en place dans notre région ?\nConcernant les communes wallonnes, ne serait-il pas intéressant d'étudier la question et, pourquoi pas, développer une expérience pilote en la matière ?\nMonsieur le Ministre a-t-il déjà été approché par des sociétés informatiques sur ce sujet ?",
  answerText: "Il n'est pas inutile de rappeler l'origine de la matière. Le Principe d'Open Data, c'est-à-dire la réutilisation des informations du secteur public, trouve sa source dans la Directive 2003/98 du même nom et à pour objet d'établir un cadre harmonisé fixant les conditions de réutilisation desdites informations.\n\nPar « réutilisation », on vise l'utilisation d'informations détenues par des organismes du secteur public à des fins commerciales ou non commerciales autres que l'objectif initial de la mission de service public pour lequel les informations ont été produites.\n\nAinsi, dans le cadre de l'exercice de ses multiples missions, le SPW collecte ou produit une grande variété d'informations afin :\n- de préparer ses décisions,\n- de fournir ses services,\n- d'évaluer son action.\n\nAppliqué au secteur public, le principe de l'Open Data consiste donc à permettre l'usage, commercial ou non, par d'autres acteurs (organismes publics, entreprises, associations, pouvoirs locaux ou citoyens) des données collectées par un organisme public donné.\nC'est en 2006 que le gouvernement adoptait définitivement le décret transposant la directive précitée.\n"
},
{
  id: 6,
  title: "Open Data - Open Government",
  excerpt: "Les informations publiques, ou données ouvertes (open data), sont aujourd'hui en termes de potentiel, d'opportunités et d'enjeu au c?ur du développement ...",
  questionText: "Les informations publiques, ou données ouvertes (open data), sont aujourd'hui en termes de potentiel, d'opportunités et d'enjeu au c?ur du développement de multiples innovations sociales et économiques. En effet, grâce à leur mise en ligne par l'administration et les collectivités territoriales, elles peuvent contribuer à la création de nouveaux services tout en favorisant la transparence de l'action publique.\n\nDans ce cadre, des pays comme la France, les Etats-Unis, la Norvège ou encore l'Angleterre, utilisent cette nouvelle forme de gouvernance. En effet, tout organisme d'une certaine taille collecte, génère ou maintient un important volume de données électroniques (bases de données, systèmes d'information cartographiques, registres électroniques, etc.).\n\nAinsi, à titre d'exemple, les données que possède la Ville de Paris sont exploitées au mieux par les services municipaux dans le cadre de leurs missions, mais constituent également un patrimoine immatériel qui peut être mis en valeur pour l'ensemble de la collectivité :\n- les chercheurs peuvent y trouver matière à nourrir leurs travaux et expériences ;\n- les développeurs peuvent créer des services innovants utilisant ces données ;\n- les citoyens et journalistes y trouvent des informations brutes ;\n- les entreprises peuvent fournir une valeur ajoutée à ces données, et ainsi créer de l'emploi et de la richesse pour la collectivité.\n\nEn janvier 2011, la Ville de Paris, à l'initiative de son maire et de son adjoint en charge de l'innovation, de la recherche et des universités, a permis l'ouverture de ce site, marquant la fin d'un premier cycle d'exploration des données de la ville, mais surtout le début d'une nouvelle ère en matière de transparence. Cette démarche est intéressante et innovante, car elle permet aux habitants de devenir des co-concepteurs des évolutions de leur ville.\n\nCette démarche se fait, bien évidemment, dans le respect des règles sur la vie privée et il est clair qu'il n'est pas question de donner des informations sur des données personnelles, mais bien des informations d'ordre général.\n\nMonsieur le Ministre a-t-il déjà entendu parler de ce concept ?\nPense-t-il qu'il serait envisageable de le mettre en place dans notre région ?\nConcernant les communes wallonnes, ne serait-il pas intéressant d'étudier la question et, pourquoi pas, développer une expérience pilote en la matière ?\nMonsieur le Ministre a-t-il déjà été approché par des sociétés informatiques sur ce sujet ?",
  answerText: "Il n'est pas inutile de rappeler l'origine de la matière. Le Principe d'Open Data, c'est-à-dire la réutilisation des informations du secteur public, trouve sa source dans la Directive 2003/98 du même nom et à pour objet d'établir un cadre harmonisé fixant les conditions de réutilisation desdites informations.\n\nPar « réutilisation », on vise l'utilisation d'informations détenues par des organismes du secteur public à des fins commerciales ou non commerciales autres que l'objectif initial de la mission de service public pour lequel les informations ont été produites.\n\nAinsi, dans le cadre de l'exercice de ses multiples missions, le SPW collecte ou produit une grande variété d'informations afin :\n- de préparer ses décisions,\n- de fournir ses services,\n- d'évaluer son action.\n\nAppliqué au secteur public, le principe de l'Open Data consiste donc à permettre l'usage, commercial ou non, par d'autres acteurs (organismes publics, entreprises, associations, pouvoirs locaux ou citoyens) des données collectées par un organisme public donné.\nC'est en 2006 que le gouvernement adoptait définitivement le décret transposant la directive précitée.\n"
}
];


})();

(function() {

Noselus.ApplicationRoute = Ember.Route.extend();


})();

(function() {

Noselus.PoliticianRoute = Ember.Route.extend({
  model: function(model) {
    return Noselus.Politician.find(model.politician_id);
  }
});



})();

(function() {

Noselus.PoliticiansRoute = Ember.Route.extend({
  model: function() {
    return politicians;
  }
});



})();

(function() {

Noselus.QuestionsRoute = Ember.Route.extend({
  model: function(model) {
    return Noselus.Question.find();
  }
});



})();

(function() {

Noselus.PoliticianView = Ember.View.extend({
    templateName: 'politician'
});


})();

(function() {

Noselus.PoliticiansView = Ember.View.extend({
    templateName: 'politicians'
});


})();

(function() {

Noselus.QuestionListView = Ember.View.extend({
    templateName: 'question_list'
});


})();

(function() {

Noselus.QuestionView = Ember.View.extend({
  didInsertElement: function (argument) {

  }
});


})();

(function() {

Noselus.QuestionsView = Ember.View.extend({
    templateName: 'questions',
    classNames: ['row'],
    didInsertElement: function (argument) {

    }
});


})();

(function() {

Noselus.Router.map(function () {
  this.resource('politicians');
  this.resource('politician', { path: '/politicians/:politician_id' });
  this.resource('questions');
  this.resource('question', { path: '/questions/:question_id' });
});


})();