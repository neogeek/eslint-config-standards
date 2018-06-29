/* eslint global-require: 0 */
/* eslint no-sync: 0 */

const fs = require('fs');
const path = require('path');

const {JSDOM} = require('jsdom');
const request = require('request');

const SPACE_SIZE = 2;

const parseRulesFromTable = (doc, id) => {

    const rules = [].slice
        .call(doc.querySelector(`#${id} ~ .rule-list`).querySelectorAll('td:nth-of-type(3)'))
        .map(rule => rule.querySelector('a').textContent.trim());

    const customRulesFile = path.join(__dirname, `./mods/eslintrc-${id.replace(/^#/, '')}.json`);

    const customRules = require(customRulesFile).rules;

    return {
        'rules': Object.assign({}, ...rules.map(rule => ({[rule]: 2})), customRules)
    };

};

request('http://eslint.org/docs/rules/', (err, res, body) => {

    if (err) {

        return new Error(err);

    }

    const {document} = new JSDOM(body).window;

    return [
        'best-practices',
        'ecmascript-6',
        'nodejs-and-commonjs',
        'possible-errors',
        'strict-mode',
        'stylistic-issues',
        'variables'
    ].forEach(id => fs.writeFileSync(
        `.eslintrc-${id}`,
        `${JSON.stringify(parseRulesFromTable(document, id), null, SPACE_SIZE)}\n`
    ));

});
