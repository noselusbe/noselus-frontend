import { test, moduleForModel } from 'ember-qunit';

moduleForModel('politician', 'Politician', {
  // Specify the other units that are required for this test.
  needs: ['model:question']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(model);
});
