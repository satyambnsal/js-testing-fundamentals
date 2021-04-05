const assert = require('assert');
const utils = require('./utils');
const { iplWinner } = require('./iplWinner');

function fn(impl) {
  // Higher order function

  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };
  mockFn.mock = { calls: [] };
  mockFn.mockImplementation = (newImpl) => {
    impl = newImpl;
  };

  return mockFn;
}

function spyOn(obj, prop) {
  const originalValue = obj[prop];
  obj[prop] = fn((t1, t2) => t1);
  obj[prop].mockRestore = () => (obj[prop] = originalValue);
}

spyOn(utils, 'getWinner');
utils.getWinner.mockImplementation((t1, t2) => t1);

const team1 = 'Mumbai Indians';
const team2 = 'Chennai Superking';

assert.strictEqual(iplWinner(team1, team2), 'Mumbai Indians');
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Mumbai Indians', 'Chennai Superking'],
  ['Mumbai Indians', 'Chennai Superking'],
]);

assert.strictEqual(utils.getWinner.mock.calls.length, 2);

utils.getWinner.mockRestore();

test('get ipl winner', () => {});
