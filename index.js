/* eslint no-sync: 0 */

const fs = require('fs');
const path = require('path');

const loadConfigFile = (filename) =>
    JSON.parse(fs.readFileSync(path.join(__dirname, filename), 'utf8'));

module.exports = {
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
