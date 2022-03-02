const { userUtils } = require('./solutions');

describe('Problem 5 - userUtils.updateAccessCount()', function() {
  test('userUtils should be an Object', function() {
    expect(typeof userUtils).toBe('object');
  });

  test('userUtils.updateAccessCount should be function', function() {
    expect(typeof userUtils.updateAccessCount).toBe('function');
  });
});
