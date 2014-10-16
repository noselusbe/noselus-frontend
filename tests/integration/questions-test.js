import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;

module('Integration - Questions', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test("Viewing the list of questions", function() {
  expect(2);
  visit('/questions').then(function() {
    equal(find('.inf-scroll-inner-container').length, 1, "Page contains list of questions");
    equal(find('.activityfeed--story').length, 20, "Page contains the correct list of models");
  });
});

test("Searching questions", function() {
  expect(3);
  visit('/questions').then(function() {
    fillIn('.search-field', 'gouvernement');
    triggerEvent('.search-field', 'blur');
    andThen(function() {
      equal(find('.search-query').text().match('résultats pour: gouvernement').length, 1, 'Page contains search query');
      equal(find('.inf-scroll-inner-container').length, 1, "Page contains list of questions");
      equal(find('.activityfeed--story').length, 20, "Page contains the correct list of models");
    });
  });
});
