/* eslint global-require: 0 */
/* eslint no-sync: 0 */

const fs = require('fs');
const path = require('path');

const { JSDOM } = require('jsdom');
const request = require('request');

const SPACE_SIZE = 2;

const parseRulesFromTable = (document, id) => {
    const rules = [].slice
        .call(
            document
                .querySelector(`#${id} ~ .rule-list`)
                .querySelectorAll('td:nth-of-type(3)')
        )
        .map(rule => rule.querySelector('a').textContent.trim());

    const customRulesFile = path.join(
        __dirname,
        `./mods/eslintrc-${id.replace(/^#/u, '')}.json`
    );

    const customRules = require(customRulesFile).rules;

    return {
        rules: Object.assign(
            {},
            ...rules.map(rule => ({ [rule]: 2 })),
            customRules
        )
    };
};

request('http://eslint.org/docs/rules/', (err, res, body) => {
    if (err) {
        return new Error(err);
    }

    const { document } = new JSDOM(
        body.replace(
            /<h2>(?<id>[^<]+)<\/h2>/gu,
            (matches, id) =>
                `<h2 id="${id.toLowerCase().replace(/ /gu, '-')}">${id}</h2>`
        )
    ).window;

    return [
        'best-practices',
        'ecmascript-6',
        'possible-errors',
        'strict-mode',
        'stylistic-issues',
        'variables'
    ].forEach(id =>
        fs.writeFileSync(
            `.eslintrc-${id}`,
            `${JSON.stringify(
                parseRulesFromTable(document, id),
                null,
                SPACE_SIZE
            )}\n`
        )
    );
});
