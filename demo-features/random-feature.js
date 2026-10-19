// 랜덤한 기능 간단하게 하나 추가해봐
// PM → Dev. 2026-10-19T02:01:20.646Z

// Usage: const { getRandomTip, getRandomNumber } = require('./random-feature');

const TIPS = [
  '작은 작업부터 시작하면 집중하기 쉬워집니다.',
  '중요한 파일은 작업 전에 백업하세요.',
  '짧은 휴식은 생산성을 높여줍니다.',
  '복잡한 문제는 작은 단계로 나누어 해결하세요.',
  '오늘 할 일을 세 가지로 정리해보세요.'
];

function getRandomNumber(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new TypeError('min과 max는 정수여야 합니다.');
  }

  if (min > max) {
    throw new RangeError('min은 max보다 작거나 같아야 합니다.');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomTip() {
  return TIPS[getRandomNumber(0, TIPS.length - 1)];
}

module.exports = {
  getRandomTip,
  getRandomNumber
};

if (require.main === module) {
  console.log('랜덤 팁:', getRandomTip());
  console.log('랜덤 숫자:', getRandomNumber(1, 100));
}

// Tiny self-test
if (require.main === module) {
  console.assert(typeof getRandomTip() === 'string');
  console.assert(getRandomNumber(1, 1) === 1);
}
