// 랜덤한 기능 간단하게 하나 추가해봐
// PM → Dev. 2026-10-19T02:09:04.369Z

// Usage: const { getRandomItem, getRandomInt } = require('./random-utils');

function getRandomItem(items) {
  if (!Array.isArray(items)) {
    throw new TypeError('items must be an array');
  }

  if (items.length === 0) {
    return null;
  }

  return items[Math.floor(Math.random() * items.length)];
}

function getRandomInt(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new TypeError('min and max must be integers');
  }

  if (min > max) {
    throw new RangeError('min must be less than or equal to max');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  getRandomItem,
  getRandomInt
};

function runSelfTest() {
  if (getRandomItem([]) !== null) {
    throw new Error('getRandomItem([]) should return null');
  }

  const value = getRandomInt(1, 1);
  if (value !== 1) {
    throw new Error('getRandomInt(1, 1) should return 1');
  }
}

if (require.main === module) {
  runSelfTest();

  const fruits = ['apple', 'banana', 'cherry', 'grape'];
  console.log('Random item:', getRandomItem(fruits));
  console.log('Random integer (1-10):', getRandomInt(1, 10));
}
