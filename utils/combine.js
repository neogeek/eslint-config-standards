const { writeFileSync } = require('fs');

const loadConfigFile = require('./loadConfigFile');

const rules = {
  ...loadConfigFile('../.eslintrc-layout-formatting').rules,
  ...loadConfigFile('../.eslintrc-possible-problems').rules,
  ...loadConfigFile('../.eslintrc-suggestions').rules
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

// eslint-disable-next-line no-magic-numbers
writeFileSync('.eslintrc-all', JSON.stringify(config, null, 2));
