# eslint-plugin-namek-testing

namek testing rules plugin for eslint

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-namek-testing`:

```
$ npm install eslint-plugin-namek-testing --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-namek-testing` globally.

## Usage

Add `namek-testing` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "namek-testing"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "namek-testing/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





