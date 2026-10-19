// 랜덤한 기능 간단하게 하나 추가해봐
// PM → Dev. 2026-10-19T00:30:27.779Z

// Usage: const { randomInt, pickRandom } = require('./random-utils');

function randomInt(min, max) {
  if (!Number.isSafeInteger(min) || !Number.isSafeInteger(max)) {
    throw new TypeError('min and max must be safe integers');
  }

  if (min > max) {
    throw new RangeError('min must be less than or equal to max');
  }

  const range = max - min + 1;
  if (!Number.isSafeInteger(range)) {
    throw new RangeError('the requested range is too large');
  }

  return Math.floor(Math.random() * range) + min;
}

function pickRandom(items) {
  if (!Array.isArray(items)) {
    throw new TypeError('items must be an array');
  }

  if (items.length === 0) {
    throw new RangeError('cannot pick a random item from an empty array');
  }

  return items[randomInt(0, items.length - 1)];
}

module.exports = { randomInt, pickRandom };

if (require.main === module) {
  console.log(randomInt(1, 10));
  console.log(pickRandom(['apple', 'banana', 'cherry']));
}
