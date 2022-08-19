const eslint = 'eslint --fix';
const prettier = 'prettier --write';

module.exports = {
  '*.{js,jsx,ts,tsx}': [eslint, prettier],
  '*.json': [prettier],
  '*.{md,yml,yaml}': [prettier],
};
