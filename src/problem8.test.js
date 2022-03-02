const { userUtils } = require('./solutions');

describe('Problem 8 - userUtils.createWelcomeEmails()', function() {
  test('userUtils should be an Object', function() {
    expect(typeof userUtils).toBe('object');
  });

  test('userUtils.createWelcomeEmails should be function', function() {
    expect(typeof userUtils.createWelcomeEmails).toBe('function');
  });
});
