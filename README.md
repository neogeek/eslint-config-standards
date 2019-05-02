# ESLint Config Standards

[![Build Status](https://travis-ci.org/neogeek/eslint-config-standards.svg?branch=master)](https://travis-ci.org/neogeek/eslint-config-standards)
[![NPM Version](https://img.shields.io/npm/v/@neogeek/eslint-config-standards.svg?style=flat)](https://www.npmjs.org/package/@neogeek/eslint-config-standards)

## Install

```bash
$ npm install eslint babel-eslint @neogeek/eslint-config-standards --save-dev
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

### Best Practices

| Flag            | Description                                       | Value                         |
| --------------- | ------------------------------------------------- | ----------------------------- |
| dot-location    | Enforce consistent newlines before and after dots | `0`                           |
| no-magic-number | Disallow Magic Numbers                            | `[2, {"ignore": [-1, 0, 1]}]` |

### ECMAScript 6

| Flag         | Description                                         | Value                    |
| ------------ | --------------------------------------------------- | ------------------------ |
| arrow-parens | require parentheses around arrow function arguments | `["error", "as-needed"]` |

### Node.js and CommonJS

| Flag            | Description                          | Value |
| --------------- | ------------------------------------ | ----- |
| no-process-env  | Disallow the use of `process.env`    | `0`   |
| no-process-exit | Disallow the use of `process.exit()` | `0`   |

### Stylistic Issues

| Flag                     | Description                                                                 | Value                                                                  |
| ------------------------ | --------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| implicit-arrow-linebreak | Enforce the location of arrow function bodies with implicit returns         | `0`                                                                    |
| max-len                  | Enforce a maximum line length                                               | `[1, 80, 4, {"ignoreComments": true, "ignoreTemplateLiterals": true}]` |
| max-lines                | Enforce a maximum file length                                               | `0`                                                                    |
| object-curly-newline     | Enforce consistent line breaks inside braces                                | `0`                                                                    |
| one-var                  | Enforce variables to be declared either together or separately in functions | `0`                                                                    |
| quotes                   | Enforce the consistent use of either backticks, double, or single quotes    | `[2, "single"]`                                                        |
| spaced-comment           | enforce consistent spacing after the `//` or `/*` in a comment              | `["error", "always", {"block": {"markers": ["!"]}}]`                   |

### Variables

| Flag           | Description                                                                         | Value                                                      |
| -------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| no-shadow      | disallow variable declarations from shadowing variables declared in the outer scope | `["error", {"allow": ["err"]}]`                            |
| no-unused-vars | disallow unused variables                                                           | `"no-unused-vars": ["warn", {"ignoreRestSiblings": true}]` |

## Extended `.eslintrc` Configuration

```json
{
    "extends": [
        "@neogeek/eslint-config-standards/.eslintrc-best-practices",
        "@neogeek/eslint-config-standards/.eslintrc-ecmascript-6",
        "@neogeek/eslint-config-standards/.eslintrc-nodejs-and-commonjs",
        "@neogeek/eslint-config-standards/.eslintrc-possible-errors",
        "@neogeek/eslint-config-standards/.eslintrc-react",
        "@neogeek/eslint-config-standards/.eslintrc-strict-mode",
        "@neogeek/eslint-config-standards/.eslintrc-stylistic-issues",
        "@neogeek/eslint-config-standards/.eslintrc-variables"
    ],
    "rules": {
        "quotes": [2, "double"]
    }
}
```

```json
{
    "extends": ["@neogeek/eslint-config-standards/.eslintrc-tests"]
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
        "prettier": "prettier-eslint --eslint-config-path .eslintrc --write \"src/**/*.js\""
    }
}
```
