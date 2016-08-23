/* eslint no-sync: 0 */

const fs = require('fs');
const path = require('path');

const loadConfigFile = (filename) =>
    JSON.parse(fs.readFileSync(path.join(__dirname, filename), 'utf8'));

module.exports = {
    'rules': Object.assign(
        {},
        loadConfigFile('.eslintrc-best-practice').rules,
        loadConfigFile('.eslintrc-es6').rules,
        loadConfigFile('.eslintrc-nodejs-commonjs').rules,
        loadConfigFile('.eslintrc-possible-errors').rules,
        loadConfigFile('.eslintrc-stylistic').rules,
        loadConfigFile('.eslintrc-variables').rules
    )
};
