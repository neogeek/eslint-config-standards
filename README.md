# ESLint Config Standards

[![Tests](https://github.com/neogeek/eslint-config-standards/actions/workflows/test.workflow.yml/badge.svg)](https://github.com/neogeek/eslint-config-standards/actions/workflows/test.workflow.yml)
[![NPM Version](https://img.shields.io/npm/v/@neogeek/eslint-config-standards.svg?style=flat)](https://www.npmjs.org/package/@neogeek/eslint-config-standards)

## Install

```bash
$ npm install eslint @neogeek/eslint-config-standards --save-dev
```

Then create a `.eslintrc` file in the root of your project with the following contents:

```json
{
  "extends": ["@neogeek/eslint-config-standards"]
}
```

## Configuration

See http://eslint.org/docs/rules/ for more information.

This package enables errors on all of the available flags except the following:

### Layout Formatting

No changes

### Possible Problems

| Flag           | Description               | Value                                                      |
| -------------- | ------------------------- | ---------------------------------------------------------- |
| no-unused-vars | Disallow unused variables | `"no-unused-vars": ["warn", {"ignoreRestSiblings": true}]` |

### Suggestions

| Flag            | Description                                                                         | Value                               |
| --------------- | ----------------------------------------------------------------------------------- | ----------------------------------- |
| id-length       | Enforce minimum and maximum identifier lengths                                      | `off`                               |
| max-lines       | Enforce a maximum number of lines per file                                          | `off`                               |
| max-statements  | Enforce a maximum number of statements allowed in function blocks                   | `off`                               |
| no-magic-number | Disallow magic numbers                                                              | `["error", {"ignore": [-1, 0, 1]}]` |
| no-shadow       | Disallow variable declarations from shadowing variables declared in the outer scope | `["error", {"allow": ["err"]}]`     |
| one-var         | Enforce variables to be declared either together or separately in functions         | `off`                               |

## Extended `.eslintrc` Configuration

```json
{
  "extends": [
    "@neogeek/eslint-config-standards/.eslintrc-layout-formatting",
    "@neogeek/eslint-config-standards/.eslintrc-possible-problems",
    "@neogeek/eslint-config-standards/.eslintrc-suggestions"
  ],
  "rules": {
    "quotes": [2, "double"]
  }
}
```

## Prettier Config

Create a `.prettierrc` file with the following contents:

```json
{
  "printWidth": 80,
  "tabWidth": 4
}
```

Install the [prettier-eslint-cli](https://github.com/prettier/prettier-eslint-cli).

```bash
$ npm install prettier-eslint-cli --save-dev
```

Add NPM script for automation.

```json
{
  "scripts": {
    "prettier": "prettier-eslint --write \"src/**/*.js\""
  }
}
```
