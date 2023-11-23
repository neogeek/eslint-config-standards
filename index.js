const fs = require('fs');
const path = require('path');

const loadConfigFile = filename =>
  JSON.parse(fs.readFileSync(path.join(__dirname, filename), 'utf8'));

const rules = {
  ...loadConfigFile('.eslintrc-layout-formatting').rules,
  ...loadConfigFile('.eslintrc-possible-problems').rules,
  ...loadConfigFile('.eslintrc-suggestions').rules
};

const config = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: Object.keys(rules)
    .sort()
    .reverse()
    .reduce((acc, ruleKey) => ({ [ruleKey]: rules[ruleKey], ...acc }), {})
};

module.exports = config;
