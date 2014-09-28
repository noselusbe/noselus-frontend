import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;

module('Integration - Question', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test("Viewing a question page", function() {
  expect(2);
  visit('/questions');
  andThen(function() {
    var title = $('.activityfeed--story:first h4').text();
    click('.activityfeed--story:first .activityfeed--header a');
    andThen(function() {
      equal($('.question--header h1').text(), title);
      equal(currentRouteName(), 'question');
    });
  });
});
