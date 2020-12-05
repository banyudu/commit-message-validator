#!/usr/bin/env node

'use strict'

const findGitRoot = require('find-git-root')
const fs = require('fs')
const path = require('path')
const validator = require('./commit-message-validator')

const commitMsgFile = path.join(findGitRoot(), 'COMMIT_EDITMSG')

if (!fs.existsSync(commitMsgFile)) {
  console.log('Cannot find COMMIT_EDITMSG file!')
  process.exit(1)
}

try {
  let message = fs.readFileSync(commitMsgFile, 'utf8')
  const tmpArr = message.split('\n')
  let filtered = []
  for (const line of tmpArr) {
    // break at first comment line
    if (/^# /.test(line)) {
      break
    }
    filtered.push(line)
  }
  message = filtered.join('\n')
  validator(message)
} catch (error) {
  console.log('Error read COMMIT_EDITMSG file')
  console.error(error)
  process.exit(1)
}
