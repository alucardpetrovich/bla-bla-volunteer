const eslint = 'eslint --fix';
const prettier = 'prettier --write';

module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': [eslint, prettier],
  '*.json': [prettier],
  '*.{svg,md,yml,yaml}': [prettier],
};
