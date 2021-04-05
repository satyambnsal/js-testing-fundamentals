const { sum, substract } = require('./math');

const a = 10;
const b = 4;

let result = sum(a, b);
let expected = 14;

expect(result).toBe(expected);

result = substract(a, b);
expected = 6;

expect(result).toBe(expected);

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`🔴 ${actual} is not equal to ${expected}`);
      }
    },
  };
}
