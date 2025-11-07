const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
  { ignores: ['src/generated'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended
);
