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
