/* eslint no-sync: 0 */
/* eslint arrow-body-style: 0 */

const fs = require('fs');

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

    return {
        'rules': Object.assign({}, ...rules.map((rule) => {

            return {[rule]: 2};

        }))
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
