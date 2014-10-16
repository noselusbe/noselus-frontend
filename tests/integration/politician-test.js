/*global jQuery*/
import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;

module('Integration - Politician page', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test("Searching questions via politician page", function() {
  expect(4);
  visit('/politicians/88').then(function() {
    fillIn('.search-field', 'gouvernement');
    $('.search-field').siblings('.btn-submit').click();

    andThen(function() {
      equal(currentPath(), 'politician');
      equal(find('.search-query').text().match('Résultats pour: gouvernement').length, 1, 'Page contains search query');
      equal(find('.inf-scroll-inner-container').length, 1, "Page contains list of questions");
      ok(find('.activityfeed--story').length > 0, "Page contains the correct list of models");
    });
  });
});
