import { test, moduleFor } from 'ember-qunit';

moduleFor('controller:question', 'QuestionController', {
  // Specify the other units that are required for this test.
  // needs: ['controller:application', 'controller:favorites']
  needs: ['controller:application']
});

// Replace this with your real tests.
test('it exists', function() {
  var controller = this.subject();
  ok(controller);
});
