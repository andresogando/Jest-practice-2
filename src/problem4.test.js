const { userUtils } = require('./solutions');

describe('Problem 4 - userUtils.getProfiles()', function() {
  test('userUtils should be an Object', function() {
    expect(typeof userUtils).toBe('object');
  });

  test('userUtils.getProfiles should be function', function() {
    expect(typeof userUtils.getOldestUser).toBe('function');
  });

  test('userUtils.getProfiles should return an Array', function() {
    let profiles = userUtils.getProfiles(100, 100);
    expect(Array.isArray(profiles)).toBe(true);
    expect(profiles.length).toBe(150);
  });

  test('userUtils.getProfiles Array should have correct properties', function() {
    let profile0 = userUtils.getProfiles(100, 100)[0];
    expect(typeof profile0).toBe('object');
    expect(typeof profile0.id).toBe('number');
    expect(typeof profile0.email).toBe('string');
    expect(typeof profile0.image).toBe('string');
  });
});
