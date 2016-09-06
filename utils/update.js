/* eslint arrow-body-style: 0 */
/* eslint global-require: 0 */
/* eslint no-sync: 0 */

const fs = require('fs');
const path = require('path');

const cheerio = require('cheerio');
const request = require('request');

const SPACE_SIZE = 2;

const parseRulesFromTable = ($body, id) => {

    const rules = $body(id)
        .nextAll('.rule-list')
        .eq(0)
        .find('td:nth-of-type(3)')
        .toArray()
        .map((rule) =>
            $body(rule).text()
                .trim()
        );

    const customRulesFile = path.join(__dirname, `./mods/eslintrc-${id.replace(/^#/, '')}.json`);

    const customRules = require(customRulesFile).rules;

    return {
        'rules': Object.assign({}, ...rules.map((rule) => {

            return {[rule]: 2};

        }), customRules)
    };

};

request('http://eslint.org/docs/rules/', (err, res, body) => {

    if (err) {

        return new Error(err);

    }

    const $body = cheerio.load(body);

    return [
        '#best-practices',
        '#ecmascript-6',
        '#nodejs-and-commonjs',
        '#possible-errors',
        '#strict-mode',
        '#stylistic-issues',
        '#variables'
    ].forEach((id) => fs.writeFileSync(
            `.eslintrc-${id.replace(/^#/, '')}`,
            `${JSON.stringify(parseRulesFromTable($body, id), null, SPACE_SIZE)}\n`
        )
    );

});
