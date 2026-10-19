// 랜덤한 기능 간단하게 하나 추가해봐
// PM → Dev. 2026-10-19T02:51:05.358Z

// Usage: node random-modal-config.js
'use strict';

const TITLES = ['새로운 소식', '오늘의 추천', '행운의 메시지', '알림', '깜짝 이벤트'];
const MESSAGES = [
  '작은 변화가 큰 즐거움을 만들 수 있어요.',
  '지금 새로운 기능을 확인해 보세요!',
  '오늘은 좋은 일이 생길지도 몰라요.',
  '랜덤한 아이디어를 하나 받아가세요.',
  '잠시 멈추고 멋진 순간을 즐겨보세요.'
];
const THEMES = [
  { name: 'ocean', primary: '#2563eb', background: '#eff6ff', text: '#1e3a8a' },
  { name: 'forest', primary: '#16a34a', background: '#f0fdf4', text: '#14532d' },
  { name: 'sunset', primary: '#ea580c', background: '#fff7ed', text: '#9a3412' },
  { name: 'violet', primary: '#7c3aed', background: '#f5f3ff', text: '#4c1d95' },
  { name: 'rose', primary: '#e11d48', background: '#fff1f2', text: '#9f1239' }
];

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function generateRandomModalConfig() {
  const theme = pickRandom(THEMES);

  return {
    title: pickRandom(TITLES),
    message: pickRandom(MESSAGES),
    theme: {
      name: theme.name,
      primary: theme.primary,
      background: theme.background,
      text: theme.text
    }
  };
}

function formatModalPreview(config) {
  if (!config || typeof config !== 'object' || !config.theme) {
    throw new TypeError('A modal config object with a theme is required.');
  }

  return [
    '=== Modal Preview ===',
    `Title: ${config.title}`,
    `Message: ${config.message}`,
    `Theme: ${config.theme.name}`,
    `Colors: primary=${config.theme.primary}, background=${config.theme.background}, text=${config.theme.text}`,
    '====================='
  ].join('\n');
}

module.exports = {
  generateRandomModalConfig,
  formatModalPreview
};

if (require.main === module) {
  const config = generateRandomModalConfig();
  console.log(config);
  console.log(formatModalPreview(config));
}
