/* eslint no-sync: 0 */

const fs = require('fs');
const path = require('path');

const loadConfigFile = filename =>
    JSON.parse(fs.readFileSync(path.join(__dirname, filename), 'utf8'));

module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 6,
        'sourceType': 'module'
    },
    'rules': Object.assign(
        {},
        loadConfigFile('.eslintrc-best-practices').rules,
        loadConfigFile('.eslintrc-ecmascript-6').rules,
        loadConfigFile('.eslintrc-nodejs-and-commonjs').rules,
        loadConfigFile('.eslintrc-possible-errors').rules,
        loadConfigFile('.eslintrc-stylistic-issues').rules,
        loadConfigFile('.eslintrc-variables').rules
    )
};
