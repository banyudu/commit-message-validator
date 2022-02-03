# commit-message-validator

[![shields badge](https://img.shields.io/npm/dw/commit-message-validator.svg)](https://npmjs.com/package/commit-message-validator)

Git commit-msg validator

This package provides you a binary that you can use as a git hook to validate the commit message, with your custom regex pattern.

This package can be used with githook packages such as [husky](https://www.npmjs.com/package/husky).

If you are looking for a *standard* commit message validator which supports [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) out of the box, give [Commitlint](https://github.com/conventional-changelog/commitlint) a try.

## Installation

This module is distributed via npm which is bundled with node and should be installed as one of your project's devDependencies:

```bash
    npm install -D commit-message-validator
```

## Usage

1. Install this package as one of your project's devDependencies
2. Install githook [husky](https://www.npmjs.com/package/husky)
3. Config commit-msg hook to run commit-message-validator.

**husky v7**

```bash
npm set-script prepare "husky install"
npx husky add .husky/commit-msg "npx commit-message-validator"
```

**husky v4**

setup husky in `package.json`.

```json
{
  "husky": {
    "hooks": {
      "commit-msg": "commit-message-validator"
    }
  }
}
```

4. Custom commit-message regex pattern in package.json

```json
{
  "config": {
    "commit-message-validator": {
      "_comment": "pattern can be Regex string or array of Regex string",
      "pattern": "your regex pattern here",
      "errorMessage": "your error message"
    }
  }
}
```
