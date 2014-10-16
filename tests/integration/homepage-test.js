/*global jQuery*/
import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;

module('Integration - Homepage', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test("Searching questions via homepage", function() {
  expect(4);
  visit('/').then(function() {

    fillIn('.search-field', 'gouvernement');
    $('.search-field').siblings('.btn-submit').click();

    andThen(function() {
      equal(currentPath(), 'questions');
      equal(find('.search-query').text().match('résultats pour: gouvernement').length, 1, 'Page contains search query');
      equal(find('.inf-scroll-inner-container').length, 1, "Page contains list of questions");
      ok(find('.activityfeed--story').length > 0, "Page contains the correct list of models");
    });
  });
});
