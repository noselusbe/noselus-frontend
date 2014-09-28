import { test, moduleForModel } from 'ember-qunit';

moduleForModel('question', 'Question', {
  // Specify the other units that are required for this test.
  needs: ['model:politician']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});

test('answered questions', function() {
  var model = this.subject({answerText: 'Hello'});
  equal(model.get('questionHasAnswer'), true);
});

test('null answered questions', function() {
  var model = this.subject({answerText: null});
  equal(model.get('questionHasAnswer'), false);
});

test('undefined answered questions', function() {
  var model = this.subject({answerText: undefined});
  equal(model.get('questionHasAnswer'), false);
});
