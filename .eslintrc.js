module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended"
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/standard',
  ],
  plugins: [
    'vue',
  ],
  rules: {
  },
};
