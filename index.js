const fs = require('fs');
const path = require('path');

const loadConfigFile = filename =>
  JSON.parse(fs.readFileSync(path.join(__dirname, filename), 'utf8'));

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    ...loadConfigFile('.eslintrc-layout-formatting').rules,
    ...loadConfigFile('.eslintrc-possible-problems').rules,
    ...loadConfigFile('.eslintrc-suggestions').rules
  }
};
