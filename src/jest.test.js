// const { sum, substract, substractAsync, sumAsync } = require('./math');
import { sum, substract, substractAsync, sumAsync } from './math.js';

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
