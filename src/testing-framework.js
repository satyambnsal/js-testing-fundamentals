const { sum, substract, substractAsync, sumAsync } = require('./math');

test('sum two numbers', () => {
  const a = 10;
  const b = 4;
  const result = sum(a, b);
  const expected = 14;
  expect(result).toBe(expected);
});

test('substract two numbers', () => {
  const a = 20;
  const b = 5;
  const result = substract(a, b);
  const expected = 15;
  expect(result).toBe(expected);
});

test('sum two numbers in async mode', async () => {
  const a = 10;
  const b = 4;
  const result = await sumAsync(a, b);
  const expected = 14;
  expect(result).toBe(expected);
});

test('substract two numbers in async Mode', async () => {
  const a = 20;
  const b = 5;
  const result = await substractAsync(a, b);
  const expected = 15;
  expect(result).toBe(expected);
});

async function test(title, callback) {
  try {
    await callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.error(`❌ ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`🔴 ${actual} is not equal to ${expected}`);
      }
    },
  };
}
