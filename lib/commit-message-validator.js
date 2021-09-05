'use strict'

const findRoot = require('find-root')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const DEFAULT_PATTERN = '.+'
const MERGE_REGEX = /^Merge\s+.+/i
const DEFAULT_ERROR_MESSAGE = 'Commit message cannot match pattern'

const getOptions = () => {
  try {
    const root = findRoot(process.cwd())
    const packageJson = path.join(root, 'package.json')
    const packageObj = JSON.parse(fs.readFileSync(packageJson, 'utf8'))
    let options = (packageObj && packageObj.config && packageObj.config['commit-message-validator']) || {}
    options.pattern = options.pattern || DEFAULT_PATTERN
    options.errorMessage = options.errorMessage || DEFAULT_ERROR_MESSAGE

    if (!Array.isArray(options.pattern)) {
      options.pattern = [options.pattern]
    }
    return options
  } catch (error) {
    return null
  }
}
const commitMessageValidator = (message) => {
  if (MERGE_REGEX.test(message)) {
    process.exit(0)
  }

  const options = getOptions()
  const patterns = options.pattern
  for (let pattern of patterns) {
    try {
      const regex = new RegExp(pattern, 'm')
      if (regex.test(message)) {
        process.exit(0)
      } 
    } catch (error) {
      // do nothing
    }
  }
  console.warn(chalk.red(options.errorMessage))
  process.exit(1)
}

module.exports = commitMessageValidator
