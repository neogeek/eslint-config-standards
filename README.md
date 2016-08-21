# ESLint Coding Standards

See http://eslint.org/docs/rules/ for more information.

This package enables errors on all of the available flags except the following:

## Flags

### Best Practices

| Flag | Description | Value |
|------|-------------|--------|
| dot-location | Enforce consistent newlines before and after dots | `0` |
| no-magic-number | Disallow Magic Numbers | `[2, { "ignore": [0, 1] }]` |

### Node.js and CommonJS

| Flag | Description | Value |
|------|-------------|--------|
| no-process-env | Disallow the use of `process.env` | `0` |
| no-process-exit | Disallow the use of `process.exit()` | `0` |

### Stylistic Issues

| Flag | Description | Value |
|------|-------------|--------|
| max-len | Enforce a maximum line length | `[1, 100, 4, {"ignoreComments": true}]` |
| max-lines | Enforce a maximum file length | `0` |
| object-curly-newline | Enforce consistent line breaks inside braces | `0` |
| one-var | Enforce variables to be declared either together or separately in functions | `0` |
| quotes | Enforce the consistent use of either backticks, double, or single quotes | `[2, "single"]` |

## Sample .eslintrc

```json
{
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "./config/eslint-coding-standards/.eslintrc-best-practice",
    "./config/eslint-coding-standards/.eslintrc-es6",
    "./config/eslint-coding-standards/.eslintrc-nodejs-commonjs",
    "./config/eslint-coding-standards/.eslintrc-possible-errors",
    "./config/eslint-coding-standards/.eslintrc-stylistic",
    "./config/eslint-coding-standards/.eslintrc-variables"
  ],
  "rules": {
    "valid-jsdoc": 2
  }
}
```

## Updating Rules from <http://eslint.org/docs/rules/>

Run the following code snippet from the console before copying the rules.

```javascript
$('.rule-list tr td:not(:nth-of-type(3))').remove();
```
