# eslint-plugin-namek-testcase-owner

test case should include code owner

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-namek-testcase-owner`:

```
$ npm install eslint-plugin-namek-testcase-owner --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-namek-testcase-owner` globally.

## Usage

Add `namek-testcase-owner` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "namek-testcase-owner"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "namek-testcase-owner/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





