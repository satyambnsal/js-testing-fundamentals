const { sum, substract } = require('./math');

const a = 10;
const b = 4;

let result = sum(a, b);
let expected = 14;

if (result !== expected) {
  throw new Error(`🔴 ${result} is not equal to ${expected}`);
}

result = substract(a, b);
expected = 6;

if (result !== expected) {
  throw new Error(`🔴 ${result} is not equal to ${expected}`);
}
