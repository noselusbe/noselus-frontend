Noselus.PoliticianController = Ember.ObjectController.extend({
  tags: [
  {
    name: 'Budget',
    tagClass: 'importance-1'
  },
  {
    name: "Parlement wallon",
    tagClass: 'importance-5'
  },
  {
    name: "Déclaration de Politique régionale",
    tagClass: 'importance-9'
  },
  {
    name: "Gouvernement wallon",
    tagClass: 'importance-5'
  },
  {
    name: "Pararégionaux - Organismes d'intérêt public - Conseils consultatifs",
    tagClass: 'importance-8'
  },
  {
    name: "Administration régionale - Fonction publique régionale",
    tagClass: 'importance-2'
  },
  {
    name: "Affaires sociales",
    tagClass: 'importance-5'
  },
  {
    name: "Environnement",
    tagClass: 'importance-8'
  },
  {
    name: "Expansion économique",
    tagClass: 'importance-2'
  },
  {
    name: "Logement",
    tagClass: 'importance-2'
  },
  {
    name: "Politique de l'eau",
    tagClass: 'importance-9'
  },
  {
    name: "Politique de l'emploi",
    tagClass: 'importance-10'
  },
  {
    name: "Politique de l'énergie",
    tagClass: 'importance-7'
  },
  {
    name: "Pouvoirs locaux",
    tagClass: 'importance-9'
  },
  {
    name: "Relations extérieures",
    tagClass: 'importance-4'
  },
  {
    name: "Rénovation rurale et Conservation de la nature",
    tagClass: 'importance-2'
  },
  {
    name: "Transports - Mobilité",
    tagClass: 'importance-5'
  },
  {
    name: "Travaux publics",
    tagClass: 'importance-7'
  },
  {
    name: "Urbanisme et Aménagement du territoire",
    tagClass: 'importance-9'
  },
  {
    name: "Coopération au développement",
    tagClass: 'importance-5'
  }
  ]
});

Noselus.WidgetMiniProfileComponent = Ember.Component.extend({
  backgroundThumb: function() {
    return 'background-image: url("'+this.get('model.thumb')+'")'
  }.property('Noselus.Politician')
});

