const { sum, substract, sumAsync, substractAsync } = require('./math.js');

const a = 20;
const b = 4;

test('sum two numbers', () => {
  let result = sum(a, b);
  let expected = 24;
  expect(result).toBe(expected);
});

test('substract two numbers', () => {
  result = substract(a, b);
  expected = 16;
  expect(result).toBe(expected);
});

test('sum two numbers in async mode', async () => {
  let result = await sumAsync(a, b);
  let expected = 24;
  expect(result).toBe(expected);
});

test('substract two numbers in async mode', async () => {
  result = await substractAsync(a, b);
  expected = 16;
  expect(result).toBe(expected);
});

async function test(title, callback) {
  try {
    await callback();
    console.log(` ✅ ${title}`);
  } catch (error) {
    console.error(` ❌ ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(` 🔴 ${actual} is not equal to ${expected}`);
      }
    },
  };
}
