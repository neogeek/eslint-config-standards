const { writeFileSync, readFileSync } = require('fs');

const { JSDOM } = require('jsdom');

fetch('http://eslint.org/docs/rules/')
  .then(res => res.text())
  .then(html => {
    const { document } = new JSDOM(html).window;

    let currentKey = null;

    const rules = Array.from(
      document.querySelectorAll(
        '.docs-main__content > h2, .docs-main__content > .rule:not(.rule--deprecated):not(.rule--removed) .rule__name'
      )
    ).reduce((acc, curr) => {
      if (curr.nodeName === 'H2') {
        currentKey = curr.id;

        acc[currentKey] = [];
      } else {
        acc[currentKey].push(curr.textContent);
      }

      return acc;
    }, {});

    Object.keys(rules).forEach(ruleKey => {
      if (rules[ruleKey].length > 0) {
        const path = `.eslintrc-${ruleKey.replace(/[^a-z0-9]+/iu, '-')}`;

        writeFileSync(
          path,
          `${JSON.stringify(
            {
              rules: Object.assign(
                {},
                ...rules[ruleKey].map(rule => ({ [rule]: 'error' })),
                JSON.parse(readFileSync(`./utils/mods/${path}.json`, 'utf8'))
                  .rules
              )
            },
            null,
            // eslint-disable-next-line no-magic-numbers
            2
          )}\n`
        );
      }
    });
  });
