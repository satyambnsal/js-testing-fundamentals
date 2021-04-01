const sum = (a, b) => a + b;

const substract = (a, b) => a - b;

const sumAsync = (a, b) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(sum(a, b));
    }, 1000);
  });

const substractAsync = (a, b) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(substract(a, b));
    }, 1000);
  });

module.exports = {
  sum,
  substract,
  sumAsync,
  substractAsync,
};
