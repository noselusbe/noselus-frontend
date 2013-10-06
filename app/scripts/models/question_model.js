Noselus.Question = DS.Model.extend({
  title: DS.attr('string'),
  excerpt: DS.attr('string'),
  questionText: DS.attr('string'),
  answerText: DS.attr('string'),
  askedBy: DS.attr('number'),
  askedTo: DS.attr('number'),
  dateAsked: DS.attr('date'),
  askedByPolitician: function() {
    politician = Noselus.Politician.find(this.get('askedBy'));
    return politician;
  }.property(),
  askedToPolitician: function() {
    politician = Noselus.Politician.find(this.get('askedTo'));
    return politician;
  }.property()
});

Noselus.Question.reopenClass({
  search: function(criteria) {
    var replaced = criteria.split(' ').join('+');
    $('<div class="spinner"></div>').insertAfter('.search-form').spin();
    $.getJSON("http://noselus-test.herokuapp.com/questions?+"+replaced, function(data) {
        $('.spinner').spin(false);
        return data;
    });
    // $.getJSON('http://noselus-test.herokuapp.com/questions', {q: replaced}, function(data, textStatus) {
    //     $('.spinner').spin(false);
    //     return data;
    // }).done(function() {
    //   console.log( "second success" );
    // })
    // .fail(function() {
    //   console.log( "error" );
    // })
    // .always(function() {
    //   console.log( "complete" );
    // });

    // $.ajax({
    //   url: 'http://noselus-test.herokuapp.com/questions',
    //   type: 'GET',
    //   // dataType: 'json',
    //   data: {q: replaced},
    //   beforeSend: function(xhr) {

    //   },
    //   error: function(xhr, textStatus, errorThrown) {

    //   },
    //   success: function (data, textStatus) {
    //     $('.spinner').spin(false);
    //     return data;
    //   }
    // });
  }
});

Ember.Handlebars.registerBoundHelper('format-date', function(date) {
  return moment(date, 'YYYY-MM-DD').fromNow();
});

moment.lang('fr', {
    months : "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
    monthsShort : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
    weekdays : "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
    weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
    weekdaysMin : "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[Aujourd'hui à] LT",
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "dans %s",
        past : "il y a %s",
        s : "quelques secondes",
        m : "une minute",
        mm : "%d minutes",
        h : "une heure",
        hh : "%d heures",
        d : "un jour",
        dd : "%d jours",
        M : "un mois",
        MM : "%d mois",
        y : "une année",
        yy : "%d années"
    },
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : 'ème');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

