const assert = require('assert');
const { iplWinner } = require('./ipl-winner');
const utils = require('./utils');

function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };

  mockFn.mock = { calls: [] };
  mockFn.mockImplementation = (newImpl) => (impl = newImpl);
  return mockFn;
}

function spyOn(obj, prop) {
  const originalValue = obj[prop];
  obj[prop] = fn();
  obj[prop].mockRestore = () => (ob[prop] = originalValue);
}

spyOn(utils, 'getWinner');
utils.getWinner.mockImplementation((t1, t2) => t1);

const team1 = 'Mumbai Indians';
const team2 = 'Chennai Superking';

const winner = iplWinner(team1, team2);
assert.strictEqual(winner, 'Mumbai Indians');
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Mumbai Indians', 'Chennai Superking'],
  ['Mumbai Indians', 'Chennai Superking'],
]);

utils.getWinner.mockRestore();
